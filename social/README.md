# Redes sociais — HD Industrial

Carrosséis 1080x1350 gerados a partir de HTML.

- `gen.py`: gera os JPG/PNG (Playwright) em `2026-11/`.
- `build_inpage.py`: gera `inpage-<post>.js`, que renderiza os mesmos slides **dentro da página** (SVG foreignObject → canvas → File) e deixa os arquivos em `window.__hdFiles`.
  Uso no navegador (Instagram/LinkedIn bloqueiam fetch externo por CSP): executar o conteúdo do .js com `await`, depois atribuir `window.__hdFiles` ao `input[type=file]` do compositor via DataTransfer e disparar `change`.

Instagram (@hdindustrialbr): ISO 14644 publicado 03/11; caixa terminal 05/11 11:12; cascata de pressão programado 10/11 11:05.
LinkedIn (Helder): ISO publicado; caixa terminal 05/11 11:00; cascata programado 10/11 11:00.
Painel Daikin: programado 12/11 (Instagram 11:17, LinkedIn 11:00).

Obs.: fetch externo bloqueado por CSP. Para transferir o script sem erro, setar CSS/LOGO/S em window.* e conferir hash (v=(v*31+charCode)%1e9+7) contra o arquivo local antes de renderizar.

Atalho mais simples (06/11): numa página sem CSP (ex. hdindustrial.ind.br) buscar os JPG em raw.githubusercontent.com, juntar os base64 com '.' e navegar para `https://www.instagram.com/?hd=1#HD<dados>` (o Instagram mantém o hash). No LinkedIn o feed apaga o hash: navegar para `https://www.linkedin.com/robots.txt#HD<dados>`, salvar o hash em IndexedDB, abrir /feed/ e ler de lá. No LinkedIn o botão Mídia chama input.click(): sobrescrever HTMLInputElement.prototype.click para preencher os arquivos.
