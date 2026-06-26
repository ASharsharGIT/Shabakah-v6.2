const fs = require('fs');
const path = require('path');
const p = path.join(__dirname, '..', 'iot-tracking.html');
let h = fs.readFileSync(p, 'utf8');
const fb = 'assets/images/Raqeeb.png';

function img(src, alt, w, hgt) {
  return (
    '<img class="elm-product-img" src="' + src + '" alt="' + alt + '" width="' + w +
    '" height="' + hgt + '" loading="lazy" data-fallback="' + fb + '">'
  );
}

const webPattern = [
  '<motion class="platform-mockup">',
  '                        <div class="mockup-placeholder">',
  '                            <i class="icon-datacenter"></i>',
  '                            <p>Dashboard Screenshot</p>',
  '                        </div>',
  '                    </div>'
].join('\n').replace(/<motion /g, '<div ');

const webReplacement = [
  '                    <div class="platform-mockup product-screenshot-frame">',
  '                        ' + img('assets/images/elm/rased-web-dashboard.webp', 'Rased web dashboard', 560, 320),
  '                    </div>'
].join('\n');

const mobPattern = [
  '                    <div class="platform-mockup">',
  '                        <div class="mockup-placeholder mobile">',
  '                            <i class="icon-enduser"></i>',
  '                            <p>Mobile App Screenshot</p>',
  '                        </div>',
  '                    </div>'
].join('\n');

const mobReplacement = [
  '                    <div class="platform-mockup product-screenshot-frame mobile-frame">',
  '                        ' + img('assets/images/elm/rased-mobile-app.webp', 'Rased mobile app', 280, 480),
  '                    </motion>'
].join('\n').replace('</motion>', '</motion>');

if (h.includes(webPattern)) {
  h = h.replace(webPattern, webReplacement);
} else {
  console.warn('web pattern not found');
}

const mobReplacementFixed = mobReplacement.replace('</motion>', '</div>');

if (h.includes(mobPattern)) {
  h = h.replace(mobPattern, mobReplacementFixed);
} else {
  console.warn('mobile pattern not found');
}

fs.writeFileSync(p, h);
console.log('mockup-placeholder count:', (h.match(/mockup-placeholder/g) || []).length);
