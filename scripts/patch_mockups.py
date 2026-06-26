import re
from pathlib import Path

D = "div"
close = "</" + D + ">"
open_d = "<" + D

p = Path(__file__).resolve().parent.parent / "iot-tracking.html"
h = p.read_text(encoding="utf-8")
fb = "assets/images/Raqeeb.png"

def img(src, alt, w, hgt):
    return (
        f'<img class="elm-product-img" src="{src}" alt="{alt}" width="{w}" '
        f'height="{hgt}" loading="lazy" data-fallback="{fb}">'
    )

web_re = re.compile(
    open_d + ' class="platform-mockup">\s*'
    + open_d + ' class="mockup-placeholder">\s*'
    r'<i class="icon-datacenter"></i>\s*'
    r'<p>Dashboard Screenshot</p>\s*'
    + close + r'\s*' + close,
    re.DOTALL,
)

mob_re = re.compile(
    open_d + ' class="platform-mockup">\s*'
    + open_d + ' class="mockup-placeholder mobile">\s*'
    r'<i class="icon-enduser"></i>\s*'
    r'<p>Mobile App Screenshot</p>\s*'
    + close + r'\s*' + close,
    re.DOTALL,
)

web_new = (
    open_d + ' class="platform-mockup product-screenshot-frame">'
    + img("assets/images/elm/rased-web-dashboard.webp", "Rased web dashboard", 560, 320)
    + close
)

mob_new = (
    open_d + ' class="platform-mockup product-screenshot-frame mobile-frame">'
    + img("assets/images/elm/rased-mobile-app.webp", "Rased mobile app", 280, 480)
    + close
)

h2, n1 = web_re.subn(web_new, h, count=1)
h3, n2 = mob_re.subn(mob_new, h2, count=1)
p.write_text(h3, encoding="utf-8")
print("web", n1, "mobile", n2, "left", h3.count("mockup-placeholder"))
