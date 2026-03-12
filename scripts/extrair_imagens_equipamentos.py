import os
from pathlib import Path
from io import BytesIO

import fitz  # PyMuPDF
from PIL import Image


# Caminho do PDF de origem
PDF_PATH = Path(r"c:\Users\Helder\Downloads\Folder de Apresentação.pdf")

# Raiz do projeto Next.js
PROJECT_ROOT = Path(
    r"c:\Users\Helder\Desktop\hd projetos\HD-Projetos-Site\hdindustrial.ind.br"
)

# Pasta de saída dentro do projeto
OUTPUT_DIR = PROJECT_ROOT / "public" / "equipamentos"

# Fator de upscale aplicada às imagens (2x por padrão)
UPSCALE_FACTOR = 2

# Mapeamento de palavras-chave no texto da página para nomes-alvo de arquivos
EQUIP_KEYWORDS_TO_NAME = {
    "ctsc": "ctsc.png",
    "caixa terminal de insuflação": "ctsc.png",
    "ctlr": "ctlr.png",
    "caixa terminal com recirculação": "ctlr.png",
    "ctlc": "ctlc.png",
    "caixa terminal com controle": "ctlc.png",
    "uvf": "uvf.png",
    "unidade de ventilação filtrante": "uvf.png",
    "cf ": "cf.png",  # espaço ajuda a não confundir com cfve
    "caixa de filtragem": "cf.png",
    "cfve": "cfve.png",
    "caixa de filtragem com ventilador": "cfve.png",
    "bibo-c": "bibo-c.png",
    "bibo v": "bibo-v.png",
    "bibo-v": "bibo-v.png",
    "bag in bag out": "bibo-v.png",
    "pem": "pem.png",
    "plenum": "pem.png",
}


def ensure_output_dir(path: Path) -> None:
    """Garante que a pasta de saída exista."""
    path.mkdir(parents=True, exist_ok=True)


def upscale_image(pil_img: Image.Image, factor: int) -> Image.Image:
    """Aplica upscale suave na imagem usando Pillow."""
    if factor <= 1:
        return pil_img

    new_size = (pil_img.width * factor, pil_img.height * factor)
    return pil_img.resize(new_size, resample=Image.LANCZOS)


def guess_filename_from_text(page_text: str, used_names: set[str]) -> str | None:
    """
    Tenta deduzir o nome do arquivo a partir do texto da página.
    Retorna um nome único baseado em EQUIP_KEYWORDS_TO_NAME, ou None.
    """
    text_lower = page_text.lower()

    for keyword, filename in EQUIP_KEYWORDS_TO_NAME.items():
        if keyword.lower() in text_lower and filename not in used_names:
            return filename

    return None


def generate_fallback_name(counter: int) -> str:
    """Gera nome genérico: equipamento_01.png, equipamento_02.png, ..."""
    return f"equipamento_{counter:02d}.png"


def main() -> None:
    ensure_output_dir(OUTPUT_DIR)

    if not PDF_PATH.exists():
        raise FileNotFoundError(f"PDF não encontrado em: {PDF_PATH}")

    doc = fitz.open(PDF_PATH)

    image_index = 0
    fallback_counter = 1
    used_filenames: set[str] = set()

    for page_number in range(len(doc)):
        page = doc[page_number]
        page_text = page.get_text("text") or ""

        for img_info in page.get_images(full=True):
            xref = img_info[0]

            # Extração da imagem em bytes
            base_image = doc.extract_image(xref)
            img_bytes = base_image["image"]

            # Tenta identificar pelo texto da página
            filename = guess_filename_from_text(page_text, used_filenames)

            if not filename:
                filename = generate_fallback_name(fallback_counter)
                fallback_counter += 1

            # Garante extensão .png
            filename = Path(filename).with_suffix(".png").name

            # Evita sobrescrever
            if filename in used_filenames:
                filename = generate_fallback_name(fallback_counter)
                fallback_counter += 1
                filename = Path(filename).with_suffix(".png").name

            used_filenames.add(filename)

            output_path = OUTPUT_DIR / filename

            # Abre com Pillow, converte e faz upscale
            with Image.open(BytesIO(img_bytes)) as img:
                if img.mode in ("P", "LA"):
                    img = img.convert("RGBA")
                if img.mode == "RGBA":
                    background = Image.new("RGB", img.size, (2, 6, 23))
                    background.paste(img, mask=img.split()[-1])
                    img = background
                else:
                    img = img.convert("RGB")

                img = upscale_image(img, UPSCALE_FACTOR)
                img.save(output_path, format="PNG", optimize=True)

            image_index += 1

    doc.close()

    print("===== Extração concluída =====")
    print(f"Total de imagens extraídas: {image_index}")
    print(f"Imagens salvas em: {OUTPUT_DIR}")


if __name__ == "__main__":
    main()

