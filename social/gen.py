import base64, pathlib
from playwright.sync_api import sync_playwright

OUT = pathlib.Path(__file__).parent / "out"; OUT.mkdir(exist_ok=True)
SITE = pathlib.Path("/home/claude/hdindustrial-site/public")
def b64(p, mime): return f"data:{mime};base64," + base64.b64encode(p.read_bytes()).decode()
LOGO = b64(SITE/"marca/logo-hd-industrial-texto-branco.png", "image/png")
CT = b64(SITE/"equipamentos/caixas-terminais/familia.png", "image/png")

CSS = """
*{margin:0;box-sizing:border-box}
body{width:1080px;height:1350px;background:#020617;color:#e5e7eb;font-family:Inter,sans-serif;position:relative;overflow:hidden}
.g{position:absolute;inset:0;background:radial-gradient(900px 600px at 85% 0%,rgba(34,211,238,.18),transparent 60%)}
.p{position:absolute;inset:90px 90px 190px 90px;display:flex;flex-direction:column}.v{justify-content:center}
.k{color:#22d3ee;font-weight:700;letter-spacing:.14em;font-size:30px;margin-bottom:34px}
h1{font-size:92px;line-height:1.02;font-weight:800;color:#fff;letter-spacing:-.02em}
h2{font-size:64px;line-height:1.08;font-weight:800;color:#fff;margin-bottom:36px;letter-spacing:-.01em}
p{font-size:38px;line-height:1.38;color:#cbd5e1}
b,.c{color:#22d3ee}
.f{position:absolute;left:90px;right:90px;bottom:60px;display:flex;justify-content:space-between;align-items:center;font-size:26px;color:#64748b}
.f img{height:96px;margin-right:22px}.f .l{display:flex;align-items:center;color:#94a3b8;font-size:28px}
table{width:100%;border-collapse:collapse;font-size:44px;margin-top:10px}
td,th{padding:26px 10px;border-bottom:2px solid #1e293b;text-align:left}
th{font-size:28px;color:#64748b;font-weight:600;letter-spacing:.08em;text-transform:uppercase}
td.n{text-align:right;font-variant-numeric:tabular-nums;color:#fff;font-weight:700}
.big{font-size:150px;font-weight:800;color:#22d3ee;line-height:1}
.num{font-size:120px;font-weight:800;color:#22d3ee;line-height:1;margin-bottom:24px}
.img{margin-top:auto;background:#fff;border-radius:24px;height:560px;display:flex;align-items:center;justify-content:center;overflow:hidden}
.img img{height:100%;width:100%;object-fit:cover}
.sw{font-size:28px;color:#22d3ee}
"""
def page(inner, n, tot):
    v=" v" if "margin-top:auto" not in inner else ""
    return f"<html><head><style>{CSS}</style></head><body><div class=g></div><div class='p{v}'>{inner}</div><div class=f><div class=l><img src='{LOGO}'>hdindustrial.ind.br</div><span>{n}/{tot}{' &nbsp;→' if n<tot else ''}</span></div></body></html>"

iso = [
 """<div class=k>SALA LIMPA · ISO 14644-1</div><h1>Quantas partículas cabem numa sala <span class=c>ISO 7</span>?</h1><p style='margin-top:auto'>A resposta define o projeto inteiro de HVAC. Arraste →</p>""",
 """<div class=k>LIMITE POR m³ · PARTÍCULAS ≥ 0,5 µm</div><h2>Cada classe é 10× mais exigente que a seguinte</h2>
 <table><tr><th>Classe</th><th style='text-align:right'>Máx. partículas/m³</th></tr>
 <tr><td>ISO 5</td><td class=n>3.520</td></tr><tr><td>ISO 6</td><td class=n>35.200</td></tr>
 <tr><td>ISO 7</td><td class=n>352.000</td></tr><tr><td>ISO 8</td><td class=n>3.520.000</td></tr></table>
 <p style='margin-top:auto;font-size:28px;color:#64748b'>Fonte: ABNT NBR ISO 14644-1:2019 (ISO 14644-1:2015)</p>""",
 """<div class=k>FARMACÊUTICA · BPF</div><h2>E os graus A, B, C e D?</h2>
 <table><tr><th>Grau BPF</th><th>Em repouso</th><th>Em operação</th></tr>
 <tr><td>A</td><td>ISO 5</td><td>ISO 5</td></tr><tr><td>B</td><td>ISO 5</td><td>ISO 7</td></tr>
 <tr><td>C</td><td>ISO 7</td><td>ISO 8</td></tr><tr><td>D</td><td>ISO 8</td><td>definido pelo usuário</td></tr></table>
 <p style='margin-top:auto;font-size:28px;color:#64748b'>Partículas ≥ 0,5 µm · Anvisa IN 35/2019 · EU GMP Anexo 1</p>""",
 """<div class=k>NA PRÁTICA</div><h2>A classe decide o equipamento</h2>
 <p>• Filtragem terminal <b>HEPA H13/H14</b> no insuflamento<br><br>• Vazão de ar e número de trocas por hora<br><br>• Cascata de pressão entre salas (tipicamente <b>10 a 15 Pa</b>)<br><br>• Fluxo unidirecional onde o produto fica exposto</p>""",
 """<div class=k>FERRAMENTA GRATUITA</div><h1>Calcule as trocas de ar da sua sala</h1><p style='margin-top:40px'>Calculadoras de trocas de ar, cascata de pressão, quantidade de FFU e perda de carga do HEPA.</p><p style='margin-top:auto' class=c>hdindustrial.ind.br/ferramentas</p><p style='font-size:30px;margin-top:16px'>Salve este post para consultar no próximo projeto.</p>""",
]
ct = [
 f"""<div class=k>CAIXA TERMINAL HEPA</div><h1>5 detalhes que <span class=c>reprovam</span> o teste de integridade</h1><div class=img><img src='{CT}' style='object-fit:contain'></div>""",
 """<div class=num>01</div><h2>Vedação filtro × moldura</h2><p>A maior parte dos vazamentos não está na mídia: está no encosto do filtro. Gel ou gaxeta precisam de aperto uniforme e moldura plana.</p>""",
 """<div class=num>02</div><h2>Sem porta de teste</h2><p>Sem ponto de injeção de aerossol e tomada de amostragem a montante, o teste vira improviso — e o resultado perde confiabilidade.</p>""",
 """<div class=num>03</div><h2>Difusor que não sai</h2><p>A varredura (scan) precisa alcançar toda a face do filtro. Difusor fixo ou de difícil remoção atrasa a qualificação.</p>""",
 """<div class=num>04</div><h2>Caixa que vaza</h2><p>Juntas e dobras sem estanqueidade deixam ar não filtrado passar por fora do HEPA. O plenum também é barreira.</p>""",
 """<div class=num>05</div><h2>Filtro danificado na obra</h2><p>Transporte e instalação descuidados furam a mídia. Filtro instalado por último, com a sala limpa já em condição.</p>""",
 """<div class=k>HD INDUSTRIAL</div><h1>Caixa terminal pensada para passar no teste.</h1><p style='margin-top:40px'>Projeto e fabricação sob medida em São Paulo, com especificação pronta para memorial descritivo.</p><p style='margin-top:auto' class=c>hdindustrial.ind.br/especificacoes</p>""",
]
with sync_playwright() as pw:
    br = pw.chromium.launch(); pg = br.new_page(viewport={"width":1080,"height":1350})
    for name, slides in (("iso", iso), ("caixa", ct)):
        for i, s in enumerate(slides, 1):
            pg.set_content(page(s, i, len(slides))); pg.wait_for_timeout(200)
            pg.screenshot(path=str(OUT/f"{name}-{i}.png"))
    br.close()
print("ok")
