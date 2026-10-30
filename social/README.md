# Redes sociais — HD Industrial

Carrosséis 1080x1350 gerados a partir de HTML.

- `gen.py`: gera os JPG/PNG (Playwright) em `2026-11/`.
- `build_inpage.py`: gera `inpage-<post>.js`, que renderiza os mesmos slides **dentro da página** (SVG foreignObject → canvas → File) e deixa os arquivos em `window.__hdFiles`.
  Uso no navegador (Instagram/LinkedIn bloqueiam fetch externo por CSP): executar o conteúdo do .js com `await`, depois atribuir `window.__hdFiles` ao `input[type=file]` do compositor via DataTransfer e disparar `change`.

Programados no Instagram (@hdindustrialbr): ISO 14644 em 03/11/2026 11:05; caixa terminal em 05/11/2026 11:12.
LinkedIn: publicar no mesmo dia no perfil do Helder.
