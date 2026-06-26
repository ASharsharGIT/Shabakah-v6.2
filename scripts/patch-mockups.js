const fs = require('fs');
const path = require('path');
const D = 'div';
const close = '</' + D + '>';
const openD = '<' + D;

const p = path.join(__dirname, '..', 'iot-tracking.html');
let h = fs.readFileSync(p, 'utf8');
const fb = 'assets/images/Raqeeb.png';

function img(src, alt, w, hgt) {
  return (
    '<img class="elm-product-img" src="' + src + '" alt="' + alt + '" width="' + w +
    '" height="' + hgt + '" loading="lazy" data-fallback="' + fb + '">'
  );
}

const webRe = new RegExp(
  openD + ' class="platform-mockup">\\s*' +
  openD + ' class="mockup-placeholder">\\s*' +
  '<i class="icon-datacenter"></i>\\s*' +
  '<p>Dashboard Screenshot</p>\\s*' +
  close + '\\s*' + close
);

const mobRe = new RegExp(
  openD + ' class="platform-mockup">\\s*' +
  openD + ' class="mockup-placeholder mobile">\\s*' +
  '<i class="icon-enduser"></i>\\s*' +
  '<p>Mobile App Screenshot</p>\\s*' +
  close + '\\s*' + close
);

const webNew = openD + ' class="platform-mockup product-screenshot-frame">' +
  img('assets/images/elm/rased-web-dashboard.webp', 'Rased web dashboard', 560, 320) + close;

const mobNew = openD + ' class="platform-mockup product-screenshot-frame mobile-frame">' +
  img('assets/images/elm/rased-mobile-app.webp', 'Rased mobile app', 280, 480) + close;

const n1 = webRe.test(h) ? (h = h.replace(webRe, webNew), 1) : 0;
const n2 = mobRe.test(h) ? (h = h.replace(mobRe, mobNew), 1) : 0;

fs.writeFileSync(p, h);
console.log('web', n1, 'mobile', n2, 'left', (h.match(/mockup-placeholder/g) || []).length);
