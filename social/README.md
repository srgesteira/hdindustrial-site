# Redes sociais — HD Industrial

Carrosséis 1080x1350 gerados a partir de HTML.

- `gen.py`: gera os JPG/PNG (Playwright) em `2026-11/`.
- `build_inpage.py`: gera `inpage-<post>.js`, que renderiza os mesmos slides **dentro da página** (SVG foreignObject → canvas → File) e deixa os arquivos em `window.__hdFiles`.
  Uso no navegador (Instagram/LinkedIn bloqueiam fetch externo por CSP): executar o conteúdo do .js com `await`, depois atribuir `window.__hdFiles` ao `input[type=file]` do compositor via DataTransfer e disparar `change`.

Instagram (@hdindustrialbr): ISO 14644 publicado 03/11; caixa terminal 05/11 11:12; cascata de pressão programado 10/11 11:05.
LinkedIn (Helder): ISO publicado; caixa terminal 05/11 11:00; cascata programado 10/11 11:00.
Pendente: painel Daikin (12/11) — aprovado, falta programar nos dois.

Obs.: fetch externo bloqueado por CSP. Para transferir o script sem erro, setar CSS/LOGO/S em window.* e conferir hash (v=(v*31+charCode)%1e9+7) contra o arquivo local antes de renderizar.
