"""
Script para processar em lote as imagens de equipamentos
do site HD Soluções Industriais.

Funcionalidades:
- Lê imagens de public/equipamentos/ e subpastas.
- Aumenta a resolução em 2x.
- Remove / suaviza fundo escuro (usando rembg se disponível).
- Centraliza o equipamento em uma tela 1600x1600 com fundo de catálogo.
- Adiciona sombra suave.
- Salva em public/equipamentos-processados/ preservando a estrutura.
"""

from __future__ import annotations

import os
from pathlib import Path
from typing import Iterable, Tuple

import numpy as np
from PIL import Image, ImageFilter

try:
  # rembg é opcional; se não houver backend (onnxruntime), trataremos como indisponível.
  from rembg import remove as rembg_remove

  REMBG_AVAILABLE = True
except Exception:
  REMBG_AVAILABLE = False


# Caminhos principais (ajuste se mudar a raiz do projeto)
PROJECT_ROOT = Path(
  r"c:\Users\Helder\Desktop\hd projetos\HD-Projetos-Site\hdindustrial.ind.br"
)

INPUT_ROOT = PROJECT_ROOT / "public" / "equipamentos"
OUTPUT_ROOT = PROJECT_ROOT / "public" / "equipamentos-processados"

# Subpastas que também devem ser processadas
SUBFOLDERS = [
  Path("."),  # raiz de public/equipamentos
  Path("bibo"),
  Path("cabine-pintura"),
  Path("caixas-filtragem"),
  Path("caixas-terminais"),
  Path("fan-filter-unit"),
  Path("ventilacao-exaustao"),
]

# Resolução alvo para o canvas final
CANVAS_SIZE = (1600, 1600)
UPSCALE_FACTOR = 2


def iter_image_files(base: Path, subfolders: Iterable[Path]) -> Iterable[Path]:
  """Itera sobre todos os arquivos de imagem PNG/JPG nas pastas indicadas."""
  exts = {".png", ".jpg", ".jpeg"}
  for sub in subfolders:
    folder = base / sub
    if not folder.exists():
      continue
    for entry in folder.rglob("*"):
      if entry.is_file() and entry.suffix.lower() in exts:
        yield entry


def upscale_image(img: Image.Image, factor: int) -> Image.Image:
  """Aumenta a resolução da imagem usando interpolação de alta qualidade."""
  if factor <= 1:
    return img
  new_size = (img.width * factor, img.height * factor)
  return img.resize(new_size, resample=Image.LANCZOS)


def remove_background_with_rembg(img: Image.Image) -> Image.Image:
  """
  Remove fundo usando rembg, retornando imagem RGBA.
  Se ocorrer qualquer problema (por exemplo, backend onnxruntime ausente),
  simplesmente devolve a imagem original para que o fallback cuide do fundo.
  """
  if not REMBG_AVAILABLE:
    return img

  try:
    img_rgba = img.convert("RGBA")
    data = np.array(img_rgba)
    out = rembg_remove(data)
    return Image.fromarray(out).convert("RGBA")
  except Exception as exc:  # noqa: BLE001
    # Falha ao usar rembg (provavelmente sem backend); continuamos com fallback.
    print(f"[AVISO] rembg indisponível neste ambiente ({exc}); usando fallback simples.")
    return img


def remove_dark_background_fallback(img: Image.Image) -> Image.Image:
  """
  Fallback simples: detecta fundo escuro (quase preto) e torna transparente.
  Mantém equipamentos mais claros e regiões com contraste.
  """
  img_rgba = img.convert("RGBA")
  data = np.array(img_rgba)

  rgb = data[..., :3].astype(np.float32)
  alpha = data[..., 3].astype(np.float32)

  # Luminância aproximada
  luminance = 0.2126 * rgb[..., 0] + 0.7152 * rgb[..., 1] + 0.0722 * rgb[..., 2]

  # Considera fundo escuro onde a luminância é muito baixa e já era opaco
  dark_mask = (luminance < 30) & (alpha > 0)

  # Zera alpha nas áreas escuras
  data[dark_mask, 3] = 0

  return Image.fromarray(data, mode="RGBA")


def auto_crop_to_content(img: Image.Image) -> Image.Image:
  """Recorta a imagem ao menor retângulo que contém pixels não totalmente transparentes."""
  if img.mode != "RGBA":
    img = img.convert("RGBA")
  alpha = img.split()[-1]
  bbox = alpha.getbbox()
  if bbox:
    return img.crop(bbox)
  return img


def create_catalog_background(size: Tuple[int, int]) -> Image.Image:
  """
  Cria um fundo de catálogo 1600x1600:
  - Cinza claro com leve gradiente vertical.
  """
  w, h = size
  top_color = np.array([235, 238, 242], dtype=np.float32)  # cinza bem claro
  bottom_color = np.array([210, 216, 226], dtype=np.float32)

  alpha = np.linspace(0.0, 1.0, h, dtype=np.float32)[:, None]
  grad = (1 - alpha) * top_color + alpha * bottom_color
  grad = np.repeat(grad.astype(np.uint8), w, axis=1)

  return Image.fromarray(grad, mode="RGB")


def add_soft_shadow(canvas: Image.Image, mask: Image.Image) -> None:
  """
  Adiciona uma sombra suave abaixo do equipamento usando a máscara do objeto.
  Desenha in-place sobre o canvas.
  """
  if mask.mode != "L":
    mask = mask.convert("L")

  # Cria sombra a partir da máscara reduzida (para ficar mais compacta)
  shadow = mask.resize(
    (int(mask.width * 0.9), int(mask.height * 0.4)), resample=Image.LANCZOS
  )

  # Fortalece apenas a base da sombra
  shadow = shadow.filter(ImageFilter.GaussianBlur(radius=18))

  shadow_img = Image.new("RGBA", canvas.size, (0, 0, 0, 0))

  # Posição da sombra: levemente abaixo do centro
  cx, cy = canvas.size[0] // 2, int(canvas.size[1] * 0.65)
  sx = cx - shadow.width // 2
  sy = cy - shadow.height // 2

  # Alpha da sombra
  shadow_alpha = 80
  shadow_colored = Image.new("RGBA", shadow.size, (0, 0, 0, shadow_alpha))
  shadow_img.paste(shadow_colored, (sx, sy), mask=shadow)

  canvas.alpha_composite(shadow_img)


def place_on_canvas(obj: Image.Image, canvas_size: Tuple[int, int]) -> Image.Image:
  """Centraliza o objeto em um canvas 1600x1600 com fundo de catálogo e sombra."""
  canvas_bg = create_catalog_background(canvas_size).convert("RGBA")

  obj = auto_crop_to_content(obj)
  if obj.mode != "RGBA":
    obj = obj.convert("RGBA")

  # Redimensiona o equipamento para caber dentro do canvas preservando proporção
  max_w = int(canvas_size[0] * 0.7)
  max_h = int(canvas_size[1] * 0.7)
  scale = min(max_w / obj.width, max_h / obj.height, 1.0)
  new_size = (max(1, int(obj.width * scale)), max(1, int(obj.height * scale)))
  obj = obj.resize(new_size, resample=Image.LANCZOS)

  # Posição central (levemente acima do centro para dar espaço à sombra)
  cx, cy = canvas_size[0] // 2, int(canvas_size[1] * 0.55)
  ox = cx - obj.width // 2
  oy = cy - obj.height // 2

  # Sombra suave usando a máscara de alpha do objeto
  mask = obj.split()[-1]
  add_soft_shadow(canvas_bg, mask)

  canvas_bg.alpha_composite(obj, dest=(ox, oy))
  return canvas_bg.convert("RGBA")


def process_image(path: Path, out_root: Path) -> Path | None:
  """
  Processa uma única imagem:
  - upscaling
  - remoção de fundo
  - centralização em canvas
  - grava resultado em out_root preservando subpastas.
  Retorna o caminho de saída ou None em caso de erro.
  """
  try:
    rel_path = path.relative_to(INPUT_ROOT)
  except ValueError:
    rel_path = path.name

  out_path = out_root / rel_path
  out_path.parent.mkdir(parents=True, exist_ok=True)

  try:
    with Image.open(path) as img:
      img = img.convert("RGBA")
      img = upscale_image(img, UPSCALE_FACTOR)

      if REMBG_AVAILABLE:
        img = remove_background_with_rembg(img)
      else:
        img = remove_dark_background_fallback(img)

      final_img = place_on_canvas(img, CANVAS_SIZE)
      # Garante PNG com transparência se necessário
      out_path = out_path.with_suffix(".png")
      final_img.save(out_path, format="PNG", optimize=True)

    return out_path
  except Exception as exc:  # noqa: BLE001
    print(f"[ERRO] Falha ao processar {path}: {exc}")
    return None


def main() -> None:
  if not INPUT_ROOT.exists():
    print(f"Pasta de entrada não encontrada: {INPUT_ROOT}")
    return

  images = list(iter_image_files(INPUT_ROOT, SUBFOLDERS))
  total = len(images)

  print("===== Processamento de imagens do site HD =====")
  print(f"Pasta de entrada: {INPUT_ROOT}")
  print(f"Pasta de saída  : {OUTPUT_ROOT}")
  print(f"rembg disponível: {REMBG_AVAILABLE}")
  print(f"Imagens encontradas: {total}")

  processed = 0
  outputs: list[Path] = []

  for img_path in images:
    out = process_image(img_path, OUTPUT_ROOT)
    if out is not None:
      processed += 1
      outputs.append(out)

  print("===== Resumo =====")
  print(f"Total de imagens encontradas : {total}")
  print(f"Total processadas com sucesso: {processed}")

  if outputs:
    print("\nArquivos gerados (alguns exemplos):")
    for p in outputs[:10]:
      print(f" - {p}")
    if len(outputs) > 10:
      print(f"... e mais {len(outputs) - 10} arquivos.")
  else:
    print("Nenhuma imagem foi processada.")


if __name__ == "__main__":
  main()

