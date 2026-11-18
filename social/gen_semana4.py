# Posts de 24/11 (BIBO) e 26/11 (retorno com filtragem).
# Gera PNGs de prévia em social/out/ e social/inpage-cascata.js / inpage-painel.js
import io, base64, json, pathlib
from PIL import Image
import lxml.html, lxml.etree as ET
from playwright.sync_api import sync_playwright

HERE = pathlib.Path(__file__).parent
SITE = HERE.parent/"public"
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

def flat(path, h=440, q=60):
    im = Image.open(path).convert("RGBA")
    im = im.crop(im.getchannel("A").getbbox())
    bg = Image.new("RGB", im.size, (255,255,255)); bg.paste(im, mask=im.getchannel("A"))
    bg = bg.resize((int(bg.width*h/bg.height), h))
    b = io.BytesIO(); bg.save(b, "JPEG", quality=q, optimize=True)
    return "data:image/jpeg;base64," + base64.b64encode(b.getvalue()).decode()
BIBO = flat(SITE/"equipamentos/bibo/bibo-c-1.webp")
CF = flat(SITE/"equipamentos/caixas-filtragem/cf1-2e-1.webp")
bibo = [
 """<div class=k>BIBO · BAG-IN / BAG-OUT</div><h1>Trocar filtro contaminado <span class=c>sem tocar no filtro</span></h1><div class=img><img src='__BIBO__' style='object-fit:contain'></div>""",
 """<div class=k>QUANDO USAR</div><h2>Quando o filtro usado vira resíduo perigoso</h2><p>• Exaustão de laboratórios NB-3 com agentes biológicos<br><br>• Fármacos potentes, citotóxicos e hormônios<br><br>• Pós tóxicos e processos químicos<br><br>• Áreas com material radioativo</p>""",
 """<div class=k>COMO FUNCIONA</div><h2>A bolsa é a barreira</h2><p>1. A bolsa de PVC fica presa no colar da porta de acesso<br><br>2. O filtro sai de dentro da caixa direto para a bolsa<br><br>3. A bolsa é selada e cortada entre as vedações<br><br>4. O filtro novo entra por uma bolsa nova<br><br>O operador não tem contato com o material retido.</p>""",
 """<div class=k>O QUE ESPECIFICAR</div><h2>Uma porta e uma bolsa por estágio</h2><p>• Pré-filtro + filtro fino + <b>HEPA H13/H14</b><br><br>• Travamento do filtro acionado por fora da caixa<br><br>• Tomada de pressão diferencial em cada estágio<br><br>• Gabinete estanque, em inox ou aço com pintura epóxi</p>""",
 """<div class=k>O DETALHE QUE PESA NA VALIDAÇÃO</div><h2>Ensaio do HEPA sem abrir a caixa</h2><p>Com filtro contaminado não dá para fazer varredura na face.<br><br>O BIBO precisa de <b>seção de injeção de aerossol a montante</b> e <b>tomada de amostragem a jusante</b> para o ensaio de integridade do HEPA instalado.</p>""",
 """<div class=k>PARA O MEMORIAL</div><h1>Especificação de BIBO pronta para copiar</h1><p style='margin-top:40px'>BIBO-C (só filtragem) e BIBO-V (ventilação e filtragem): construção, estágios, bolsas de contenção e ensaios.</p><p style='margin-top:auto' class=c>hdindustrial.ind.br/especificacoes</p><p style='font-size:30px;margin-top:16px'>Fabricação sob medida em São Paulo.</p>""",
]
retorno = [
 """<div class=k>RETORNO COM FILTRAGEM</div><h1>O ar que sai da sala <span class=c>também passa por filtro</span></h1><div class=img><img src='__CF__' style='object-fit:contain'></div>""",
 """<div class=k>POR QUE FILTRAR O RETORNO</div><h2>Três motivos</h2><p>• <b>Proteger o sistema</b>: dutos, serpentina e filtros da UTA não recebem o pó do processo<br><br>• <b>Vida do HEPA</b>: em recirculação, menos carga chega ao filtro terminal<br><br>• <b>Contenção</b>: com produto potente ou agente biológico, o contaminante fica retido antes do duto</p>""",
 """<div class=k>ONDE FICA</div><h2>Retorno baixo, perto do piso</h2><p>Em sala limpa o retorno costuma ser por grelhas baixas: o ar entra pelo forro, desce varrendo a sala e sai perto do chão.<br><br>O shaft de retorno na parede leva esse ar até o entreforro sem ocupar área útil.</p>""",
 """<div class=k>QUAL FILTRO</div><h2>Depende do que a sala manipula</h2>
 <table><tr><th>Situação</th><th>Filtragem no retorno</th></tr>
 <tr><td>Recirculação comum</td><td>Pré + filtro fino</td></tr>
 <tr><td>Pó de processo</td><td>Pré + fino, troca frequente</td></tr>
 <tr><td>Potente / biológico</td><td>HEPA com troca BIBO</td></tr></table>
 <p style='margin-top:auto;font-size:28px;color:#64748b'>A definição final vem do projeto e da avaliação de risco do processo.</p>""",
 """<div class=k>ANTES DE ORÇAR</div><h2>O que definir</h2><p>• Vazão por shaft (m³/h)<br><br>• Estágios e classes de filtragem<br><br>• Espaço disponível na parede ou no shaft<br><br>• Troca pela sala ou pelo lado técnico<br><br>• Tomada de pressão diferencial e material (inox ou aço pintado)</p>""",
 """<div class=k>HD INDUSTRIAL</div><h1>Caixas e shafts de retorno sob medida, com ou sem BIBO.</h1><p style='margin-top:40px'>Especificação pronta para memorial e calculadoras gratuitas de trocas de ar e cascata.</p><p style='margin-top:auto' class=c>hdindustrial.ind.br/especificacoes</p><p style='font-size:30px;margin-top:16px'>Calculadoras: hdindustrial.ind.br/ferramentas</p>""",
]
IMGS = {"__BIBO__": BIBO, "__CF__": CF}


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
    for name, slides in (("bibo", bibo), ("retorno", retorno)):
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
