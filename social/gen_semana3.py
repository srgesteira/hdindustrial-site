# Posts de 17/11 (graus A-D x classe ISO) e 19/11 (fluxo laminar 0,36-0,54 m/s).
# Gera PNGs de prévia em social/out/ e social/inpage-cascata.js / inpage-painel.js
import io, base64, json, pathlib
from PIL import Image
import lxml.html, lxml.etree as ET
from playwright.sync_api import sync_playwright

HERE = pathlib.Path(__file__).parent
SITE = pathlib.Path("/home/claude/hdindustrial-site/public")
src = (HERE/"gen.py").read_text().split("iso = [")[0]
ns = {"__file__": str(HERE/"gen.py")}; exec(src, ns)
CSS = ns["CSS"]

def small(path, h=None, crop=None, q=70, png=False):
    im = Image.open(path).convert("RGBA" if png else "RGB")
    if png: im = im.crop(im.getchannel("A").getbbox())
    if crop: im = im.crop(crop)
    if h: im = im.resize((int(im.width*h/im.height), h))
    b = io.BytesIO()
    if png: im = im.quantize(32); im.save(b, "PNG", optimize=True)
    else: im.save(b, "JPEG", quality=q, optimize=True)
    return ("data:image/png;base64," if png else "data:image/jpeg;base64,") + base64.b64encode(b.getvalue()).decode()

LOGO = small(SITE/"marca/logo-hd-industrial-texto-branco.png", 96, png=True)
FL = small(SITE/"equipamentos/fluxo laminar/fluxo laminar.jpeg", 420, crop=(250, 0, 1300, 1024), q=55)
graus = [
 """<div class=k>SALA LIMPA · CLASSIFICAÇÃO</div><h1>Grau A, B, C, D: <span class=c>qual classe ISO</span> é cada um?</h1><p style='margin-top:auto'>A conversão muda com o estado da sala. Arraste →</p>""",
 """<div class=k>DUAS LINGUAGENS</div><h2>ISO classifica. O GMP define graus.</h2>
 <p>• <b>ISO 14644-1</b>: classe ISO 1 a 9, pela concentração de partículas no ar<br><br>• <b>EU GMP Anexo 1 (2022)</b>: graus A a D para produção estéril, com limites <b>em repouso</b> e <b>em operação</b></p>""",
 """<div class=k>A CONVERSÃO</div><h2>Grau × classe ISO</h2>
 <table><tr><th>Grau</th><th>Em repouso</th><th>Em operação</th></tr>
 <tr><td><b>A</b></td><td>ISO 5</td><td>ISO 5</td></tr>
 <tr><td><b>B</b></td><td>ISO 5</td><td>ISO 7</td></tr>
 <tr><td><b>C</b></td><td>ISO 7</td><td>ISO 8</td></tr>
 <tr><td><b>D</b></td><td>ISO 8</td><td>a definir*</td></tr></table>
 <p style='margin-top:auto;font-size:28px;color:#64748b'>*Grau D em operação: limite não predeterminado, definido pelo fabricante na estratégia de controle de contaminação (CCS). Fonte: EU GMP Anexo 1 (2022), Tabela 1.</p>""",
 """<div class=k>EM NÚMEROS</div><h2>Partículas ≥ 0,5 µm por m³</h2>
 <table><tr><th>Grau</th><th style='text-align:right'>Repouso</th><th style='text-align:right'>Operação</th></tr>
 <tr><td><b>A</b></td><td class=n>3.520</td><td class=n>3.520</td></tr>
 <tr><td><b>B</b></td><td class=n>3.520</td><td class=n>352.000</td></tr>
 <tr><td><b>C</b></td><td class=n>352.000</td><td class=n>3.520.000</td></tr>
 <tr><td><b>D</b></td><td class=n>3.520.000</td><td class=n>—</td></tr></table>
 <p style='margin-top:auto;font-size:28px;color:#64748b'>Limites máximos para classificação, EU GMP Anexo 1 (2022).</p>""",
 """<div class=k>NO PROJETO</div><h2>O erro mais comum</h2><p>Especificar "sala ISO 7" sem dizer o estado.<br><br>Um <b>Grau B</b> precisa chegar a <b>ISO 5 em repouso</b>. É isso que dimensiona vazão, cobertura de filtros HEPA e retorno.<br><br>Em repouso, o limite deve voltar após a limpeza da sala em cerca de <b>15 a 20 min</b> (valor-guia).</p>""",
 """<div class=k>PARA O MEMORIAL</div><h1>Especificação pronta para copiar</h1><p style='margin-top:40px'>Descritivos técnicos de caixas terminais, FFU e fluxo laminar, e calculadoras gratuitas de trocas de ar e cascata.</p><p style='margin-top:auto' class=c>hdindustrial.ind.br/especificacoes</p><p style='font-size:30px;margin-top:16px'>No Brasil, confira também a IN 35/2019 da Anvisa vigente.</p>""",
]
fluxo = [
 """<div class=k>FLUXO LAMINAR · GRAU A</div><h1>Por que <span class=c>0,36 a 0,54 m/s</span>?</h1><div class=img style='background:#0b1220'><img src='__FL__'></div>""",
 """<div class=k>A REFERÊNCIA</div><h2>Velocidade homogênea na posição de trabalho</h2><p>O EU GMP Anexo 1 (2022) pede fluxo unidirecional com velocidade de <b>0,36 a 0,54 m/s</b> (valor-guia) na posição de trabalho, salvo justificativa científica na CCS.<br><br>A IN 35/2019 da Anvisa traz a mesma faixa como valor de referência.</p>""",
 """<div class=k>POR QUE A FAIXA</div><h2>Nem fraco, nem forte demais</h2><p>• <b>Abaixo</b>: o ar perde força para arrastar as partículas geradas pelo operador e pelo processo<br><br>• <b>Acima</b>: o fluxo bate nos obstáculos, vira turbulência e pode puxar ar de fora para a zona crítica</p>""",
 """<div class=k>NÃO É SÓ A MÉDIA</div><h2>Uniformidade conta tanto quanto a velocidade</h2><p>A velocidade é medida em uma grade de pontos abaixo dos filtros (ISO 14644-3). Uma média boa com cantos fracos ainda deixa a zona crítica exposta.</p>""",
 """<div class=k>NO EQUIPAMENTO</div><h2>O que segura a velocidade com o tempo</h2><p>• Ventilador com ajuste de rotação para compensar o filtro HEPA saturando<br><br>• Indicação de perda de carga do filtro<br><br>• Plenum que distribui o ar por igual em toda a face filtrante<br><br>• Teste de integridade do HEPA na instalação</p>""",
 """<div class=k>FERRAMENTA GRATUITA</div><h1>Quantas FFUs a sua área precisa?</h1><p style='margin-top:40px'>Calculadora de quantidade de FFU e caixas terminais HEPA, direto no navegador.</p><p style='margin-top:auto' class=c>hdindustrial.ind.br/ferramentas</p><p style='font-size:30px;margin-top:16px'>Descritivo de fluxo laminar: hdindustrial.ind.br/especificacoes</p>""",
]
IMGS = {"__FL__": FL}

def html_page(inner, n, tot):
    for k, v in IMGS.items(): inner = inner.replace(k, v)
    v = " v" if "margin-top:auto" not in inner else ""
    return f"<html><head><style>{CSS}</style></head><body><div class=g></div><div class='p{v}'>{inner}</div><div class=f><div class=l><img src='{LOGO}'>hdindustrial.ind.br</div><span>{n}/{tot}{' &nbsp;→' if n<tot else ''}</span></div></body></html>"

def xhtml(inner, n, tot):
    v = " v" if "margin-top:auto" not in inner else ""
    html = f"<div class='root'><div class=g></div><div class='p{v}'>{inner}</div><div class=f><div class=l><img src='__LOGO__'>hdindustrial.ind.br</div><span>{n}/{tot}{' &nbsp;→' if n<tot else ''}</span></div></div>"
    return ET.tostring(lxml.html.fragment_fromstring(html), method="xml", encoding="unicode")

css = CSS.replace("font-family:Inter,sans-serif", "font-family:Inter,'Segoe UI',Arial,sans-serif").replace("body{", ".root{")
OUT = HERE/"2026-11"
with sync_playwright() as pw:
    br = pw.chromium.launch(); pg = br.new_page(viewport={"width":1080,"height":1350})
    for name, slides in (("graus", graus), ("fluxo", fluxo)):
        for i, s in enumerate(slides, 1):
            pg.set_content(html_page(s, i, len(slides))); pg.wait_for_timeout(250)
            pg.screenshot(path=str(OUT/f"{name}-{i}.jpg"), type="jpeg", quality=90)
        xs = [xhtml(s, i, len(slides)) for i, s in enumerate(slides, 1)]
        reps = "".join(f".split({json.dumps(k)}).join({json.dumps(v)})" for k, v in IMGS.items() if any(k in x for x in xs))
        js = f"""(async()=>{{const CSS={json.dumps(css)};const LOGO={json.dumps(LOGO)};const S={json.dumps(xs)};
const files=[];for(let i=0;i<S.length;i++){{const body=S[i].split('__LOGO__').join(LOGO){reps};
const svg='<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350"><foreignObject width="1080" height="1350"><div xmlns="http://www.w3.org/1999/xhtml" style="width:1080px;height:1350px"><style>'+CSS.replace(/</g,'&lt;')+'</style>'+body.replace('<div class="root">','<div xmlns="http://www.w3.org/1999/xhtml" class="root">')+'</div></foreignObject></svg>';
const img=new Image();await new Promise((r,j)=>{{img.onload=r;img.onerror=()=>j('svg '+i);img.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg)}});
const c=document.createElement('canvas');c.width=1080;c.height=1350;const x=c.getContext('2d');x.fillStyle='#020617';x.fillRect(0,0,1080,1350);x.drawImage(img,0,0);
const b=await new Promise(r=>c.toBlob(r,'image/jpeg',0.92));files.push(new File([b],'{name}-'+(i+1)+'.jpg',{{type:'image/jpeg'}}));}}
window.__hdFiles=files;return files.map(f=>f.name+' '+f.size).join(', ');}})()"""
        (HERE/f"inpage-{name}.js").write_text(js); print(name, len(js))
    br.close()
