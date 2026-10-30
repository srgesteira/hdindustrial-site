# Gera social/inpage-<post>.js: renderiza os slides dentro da página (SVG foreignObject -> canvas -> File)
import io, base64, json, pathlib, re, sys
from PIL import Image
import lxml.html, lxml.etree as ET
sys.path.insert(0, str(pathlib.Path(__file__).parent))
import importlib.util
spec = importlib.util.spec_from_file_location("gen", pathlib.Path(__file__).parent/"gen.py")
src = (pathlib.Path(__file__).parent/"gen.py").read_text().split("with sync_playwright()")[0]
ns = {"__file__": str(pathlib.Path(__file__).parent/"gen.py")}; exec(src, ns)
SITE = ns["SITE"]
def small(path, h, q=72, png=False):
    im = Image.open(path); im = im.convert("RGBA" if png else "RGB")
    if png: im = im.crop(im.getchannel("A").getbbox())
    pq = png
    w = int(im.width * h / im.height); im = im.resize((w, h))
    b = io.BytesIO()
    if png: im = im.quantize(32)
    im.save(b, "PNG" if png else "JPEG", **({"optimize": True} if png else {"quality": q}))
    return ("data:image/png;base64," if png else "data:image/jpeg;base64,") + base64.b64encode(b.getvalue()).decode()
LOGO = small(SITE/"marca/logo-hd-industrial-texto-branco.png", 96, png=True)
ctim = Image.open(SITE/"equipamentos/caixas-terminais/familia.png").convert("L")
ctim = ctim.crop((int(ctim.width*0.36), int(ctim.height*0.05), int(ctim.width*0.64), int(ctim.height*0.96)))
b = io.BytesIO(); ctim.resize((int(ctim.width*400/ctim.height), 400)).save(b, "JPEG", quality=45, optimize=True)
CT = "data:image/jpeg;base64," + base64.b64encode(b.getvalue()).decode()
CSS = ns["CSS"].replace("font-family:Inter,sans-serif", "font-family:Inter,'Segoe UI',Arial,sans-serif")
def xhtml(inner, n, tot):
    v = " v" if "margin-top:auto" not in inner else ""
    inner = inner.replace(ns["CT"], "__CT__")
    html = f"<div class='root'><div class=g></div><div class='p{v}'>{inner}</div><div class=f><div class=l><img src='__LOGO__'>hdindustrial.ind.br</div><span>{n}/{tot}{' &nbsp;→' if n<tot else ''}</span></div></div>"
    el = lxml.html.fragment_fromstring(html)
    s = ET.tostring(el, method="xml", encoding="unicode")
    return s
css = CSS.replace("body{", ".root{")
for name in ("iso", "caixa"):
    slides = ns["iso"] if name == "iso" else ns["ct"]
    xs = [xhtml(s, i, len(slides)) for i, s in enumerate(slides, 1)]
    js = f"""(async()=>{{const CSS={json.dumps(css)};const LOGO={json.dumps(LOGO)};const CT={json.dumps(CT if name=="caixa" else "")};const S={json.dumps(xs)};
const files=[];for(let i=0;i<S.length;i++){{const body=S[i].split('__LOGO__').join(LOGO).split('__CT__').join(CT);
const svg='<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350"><foreignObject width="1080" height="1350"><div xmlns="http://www.w3.org/1999/xhtml" style="width:1080px;height:1350px"><style>'+CSS.replace(/</g,'&lt;')+'</style>'+body.replace('<div class="root">','<div xmlns="http://www.w3.org/1999/xhtml" class="root">')+'</div></foreignObject></svg>';
const img=new Image();await new Promise((r,j)=>{{img.onload=r;img.onerror=()=>j('svg '+i);img.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg)}});
const c=document.createElement('canvas');c.width=1080;c.height=1350;const x=c.getContext('2d');x.fillStyle='#020617';x.fillRect(0,0,1080,1350);x.drawImage(img,0,0);
const b=await new Promise(r=>c.toBlob(r,'image/jpeg',0.92));files.push(new File([b],'{name}-'+(i+1)+'.jpg',{{type:'image/jpeg'}}));}}
window.__hdFiles=files;window.__hdPreview=files.map(f=>URL.createObjectURL(f));return files.map(f=>f.name+' '+f.size).join(', ');}})()"""
    pathlib.Path(f"inpage-{name}.js").write_text(js)
    print(name, len(js))
