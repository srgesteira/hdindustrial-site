# Posts de 10/11 (cascata de pressão) e 12/11 (painel de filtragem Daikin).
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
FX = small(SITE/"equipamentos/fxsq/fxsq.jpeg", 360, crop=(60, 180, 1500, 900), q=45)
EXP = small(SITE/"manual/paineis-daikin/manual-troca-filtro.jpg", 300, crop=(1480, 270, 2420, 820), q=50)

cascata = [
 """<div class=k>SALA LIMPA · PRESSURIZAÇÃO</div><h1>Por que <span class=c>10 Pa</span> entre uma sala e outra?</h1><p style='margin-top:auto'>É esse diferencial que mantém a contaminação do lado certo da porta. Arraste →</p>""",
 """<div class=k>O QUE DIZEM AS REFERÊNCIAS</div><h2>Mínimo de 10 Pa entre graus diferentes</h2>
 <table><tr><th>Referência</th><th>Diferencial</th></tr>
 <tr><td>EU GMP Anexo 1 (2022), item 4.14</td><td>mín. <b>10 Pa</b> entre salas de graus diferentes</td></tr>
 <tr><td>FDA, Guidance de estéreis (2004)</td><td><b>10 a 15 Pa</b>, com portas fechadas</td></tr></table>
 <p style='margin-top:auto;font-size:28px;color:#64748b'>Valores de referência (guidance). O projeto e a qualificação definem o valor de cada sala.</p>""",
 """<div class=k>COMO A CASCATA FUNCIONA</div><h2>O ar sai da sala mais limpa para a menos limpa</h2>
 <table><tr><th>Ambiente</th><th style='text-align:right'>Pressão relativa</th></tr>
 <tr><td>Grau B</td><td class=n>+30 Pa</td></tr><tr><td>Grau C</td><td class=n>+20 Pa</td></tr>
 <tr><td>Grau D</td><td class=n>+10 Pa</td></tr><tr><td>Corredor técnico</td><td class=n>0 Pa</td></tr></table>
 <p style='margin-top:auto;font-size:28px;color:#64748b'>Exemplo ilustrativo de cascata positiva, 10 Pa por degrau.</p>""",
 """<div class=k>ATENÇÃO</div><h2>Quando a lógica se inverte</h2><p>Com pós ativos, citotóxicos ou agentes biológicos, a prioridade é <b>conter</b>. A sala de processo pode ficar com pressão menor e a antecâmara vira a barreira, com pressão maior ou menor que os dois lados.<br><br>O ar que entra na zona crítica deve vir de área de grau igual ou superior.</p>""",
 """<div class=k>NO PROJETO</div><h2>O que segura o diferencial</h2>
 <p>• Insuflamento maior que retorno + exaustão: a diferença sai pelas frestas<br><br>• Estanqueidade de portas, forro e passagens<br><br>• Damper de regulagem e indicador de pressão em cada sala<br><br>• Portas intertravadas nas antecâmaras</p>""",
 """<div class=k>FERRAMENTA GRATUITA</div><h1>Monte a cascata da sua área</h1><p style='margin-top:40px'>Calculadora de cascata de pressão e de trocas de ar, direto no navegador.</p><p style='margin-top:auto' class=c>hdindustrial.ind.br/ferramentas</p><p style='font-size:30px;margin-top:16px'>Salve este post para o próximo projeto.</p>""",
]
painel = [
 f"""<div class=k>PAINEL DE FILTRAGEM · DAIKIN FXSQ / FXMQ</div><h1>Filtro na evaporadora sem desmontar o duto</h1><div class=img style='background:#0b1220'><img src='__FX__'></div>""",
 """<div class=num>01</div><h2>Encaixe direto no retorno</h2><p>Painel com flange padronizada para as evaporadoras de duto FXSQ e FXMQ. Monta no retorno, sem adaptação na obra.</p>""",
 f"""<div class=num>02</div><h2>Troca pela lateral</h2><p>Gira os fechos HD, tira a porta lateral e puxa o filtro articulado, que dobra no meio para sair mesmo com pouco espaço.</p><div class=img style='height:420px'><img src='__EXP__' style='object-fit:contain'></div>""",
 """<div class=num>03</div><h2>O ar passa pelo filtro, não pela fresta</h2><p>Gabinete em aço galvanizado, portas com espuma de vedação e 4 fechos rápidos, 2 em cada porta.</p>""",
 """<div class=num>04</div><h2>Reposição sem dor de cabeça</h2><p>Filtro plano G4 com a medida de cada modelo na etiqueta da porta. Troca conforme o plano de manutenção (PMOC) ou quando estiver sujo.</p>""",
 """<div class=k>HD INDUSTRIAL</div><h1>Manual de troca e descritivo técnico</h1><p style='margin-top:40px'>Passo a passo ilustrado da troca de filtro e dados do painel, para a manutenção e para o memorial.</p><p style='margin-top:auto' class=c>hdindustrial.ind.br/manual/paineis-daikin</p>""",
]
IMGS = {"__FX__": FX, "__EXP__": EXP}

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
    for name, slides in (("cascata", cascata), ("painel", painel)):
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
