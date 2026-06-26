const fs = require('fs');
const path = require('path');
const D = 'di' + 'v';
const o = '<' + D;
const c = '</' + D + '>';

const p = path.join(__dirname, '..', 'iot-tracking.html');
let h = fs.readFileSync(p, 'utf8');

const frag = [
  o + ' class="faq-filter-chips" role="tablist" aria-label="Filter FAQ by product">',
  '<button type="button" class="faq-filter-chip iso-filter-chip is-active" data-category="all" role="tab" aria-selected="true">All</button>',
  '<button type="button" class="faq-filter-chip iso-filter-chip" data-category="muqeem" role="tab">Muqeem</button>',
  '<button type="button" class="faq-filter-chip iso-filter-chip" data-category="tamm" role="tab">Tamm</button>',
  '<button type="button" class="faq-filter-chip iso-filter-chip" data-category="rased" role="tab">Rased</button>',
  '<button type="button" class="faq-filter-chip iso-filter-chip" data-category="smart-gate" role="tab">Smart Gate</button>',
  '<button type="button" class="faq-filter-chip iso-filter-chip" data-category="iso" role="tab">ISO</button>',
  c,
  o + ' class="faq-accordion">',
  '<details class="faq-item glass-card-iot" data-faq-category="muqeem"><summary class="faq-question"><span class="faq-question-text">What is Muqeem and who can use it?</span><i data-lucide="chevron-down" class="lucide-icon faq-chevron" aria-hidden="true"></i></summary><p class="faq-answer">Muqeem is an Elm-powered platform that lets companies handle passport and residency transactions for their resident staff online. The service is available to registered establishments only, not individuals.</p></details>',
  '<details class="faq-item glass-card-iot" data-faq-category="muqeem"><summary class="faq-question"><span class="faq-question-text">How does Muqeem subscription pricing work?</span><i data-lucide="chevron-down" class="lucide-icon faq-chevron" aria-hidden="true"></i></summary><p class="faq-answer">Muqeem is billed per establishment based on active residents and selected service bundle. SHABAKAH quotes the exact annual fee after reviewing your workforce size — no hidden charges.</p></details>',
  '<details class="faq-item glass-card-iot" data-faq-category="tamm"><summary class="faq-question"><span class="faq-question-text">How is Tamm priced for fleets?</span><i data-lucide="chevron-down" class="lucide-icon faq-chevron" aria-hidden="true"></i></summary><p class="faq-answer">Tamm is priced in 9 tiers based on fleet size, starting at 1,800 SAR for 0-9 vehicles and going up to 24,300 SAR for 10,000+ vehicles (+ 0.5 SAR per additional vehicle). All prices exclude VAT.</p></details>',
  '<details class="faq-item glass-card-iot" data-faq-category="tamm"><summary class="faq-question"><span class="faq-question-text">How do I add or remove the actual driver in Tamm?</span><i data-lucide="chevron-down" class="lucide-icon faq-chevron" aria-hidden="true"></i></summary><p class="faq-answer">From the Tamm fleet portal, open the vehicle record, choose Actual Driver, then add or cancel the driver linked to the plate. SHABAKAH provides hands-on training for your transport team.</p></details>',
  '<details class="faq-item glass-card-iot" data-faq-category="tamm"><summary class="faq-question"><span class="faq-question-text">How do I register or migrate my fleet to Tamm?</span><i data-lucide="chevron-down" class="lucide-icon faq-chevron" aria-hidden="true"></i></summary><p class="faq-answer">Submit your commercial registration, fleet list, and authorized signatory details. We register your establishment with Elm and migrate existing vehicles within the same business day when documents are complete.</p></details>',
  '<details class="faq-item glass-card-iot" data-faq-category="rased"><summary class="faq-question"><span class="faq-question-text">Is Rased the same as Raqeeb?</span><i data-lucide="chevron-down" class="lucide-icon faq-chevron" aria-hidden="true"></i></summary><p class="faq-answer">Yes. Rased is the official Elm vehicle-tracking cloud service. SHABAKAH delivers it with full activation, training and 24/7 support, accredited by the Saudi Transport General Authority.</p></details>',
  '<details class="faq-item glass-card-iot" data-faq-category="rased"><summary class="faq-question"><span class="faq-question-text">Does Rased include a mobile app?</span><i data-lucide="chevron-down" class="lucide-icon faq-chevron" aria-hidden="true"></i></summary><p class="faq-answer">Yes. Rased ships with a web command-center dashboard and a native mobile app for iOS and Android, covering live tracking, trip history, geofencing and driver scoring.</p></details>',
  '<details class="faq-item glass-card-iot" data-faq-category="rased"><summary class="faq-question"><span class="faq-question-text">How long is trip history stored in Rased?</span><i data-lucide="chevron-down" class="lucide-icon faq-chevron" aria-hidden="true"></i></summary><p class="faq-answer">Trip archives are available for playback and export based on your subscription tier — typically 90 days to 12 months. Contact us for archive retention that matches your compliance needs.</p></details>',
  '<details class="faq-item glass-card-iot" data-faq-category="smart-gate"><summary class="faq-question"><span class="faq-question-text">What does Smart Gate do?</span><i data-lucide="chevron-down" class="lucide-icon faq-chevron" aria-hidden="true"></i></summary><p class="faq-answer">Smart Gate issues digital visitor permits for vital facilities and verifies person + vehicle data against official records — eliminating manual paperwork and fraud risk.</p></details>',
  '<details class="faq-item glass-card-iot" data-faq-category="iso"><summary class="faq-question"><span class="faq-question-text">Which ISO standards does SHABAKAH cover?</span><i data-lucide="chevron-down" class="lucide-icon faq-chevron" aria-hidden="true"></i></summary><p class="faq-answer">We deliver end-to-end consultancy for ISO 9001, 14001, 45001, 22000, HACCP, 13485, 20000-1, 27001, 18788, 41001, 21001, 22301, 44001, 55001 and 37301, plus other sector standards on request.</p></details>',
  '<details class="faq-item glass-card-iot" data-faq-category="general"><summary class="faq-question"><span class="faq-question-text">How fast can a new Elm subscription be activated?</span><i data-lucide="chevron-down" class="lucide-icon faq-chevron" aria-hidden="true"></i></summary><p class="faq-answer">Most subscriptions activate within the same business day once documents are verified. Our after-sales team also tracks renewal dates so your service never lapses.</p></details>',
  '<details class="faq-item glass-card-iot" data-faq-category="general"><summary class="faq-question"><span class="faq-question-text">Why activate Elm services through SHABAKAH?</span><i data-lucide="chevron-down" class="lucide-icon faq-chevron" aria-hidden="true"></i></summary><p class="faq-answer">You get Riyadh-based support in Arabic and English, same-day activation, training for your teams, renewal reminders, published Tamm pricing, and one partner for Muqeem, Tamm, Rased, Smart Gate, and ISO consultancy.</p></details>',
  c
].join('\n            ');

const start = h.indexOf('            <div class="faq-accordion">');
const end = h.indexOf('    <!-- Floating WhatsApp');
if (start === -1 || end === -1) {
  console.error('markers not found', start, end);
  process.exit(1);
}
h = h.slice(0, start) + '            ' + frag + '\n        ' + c + '\n    ' + h.slice(end);
fs.writeFileSync(p, h);
console.log('ok', h.includes('faq-filter-chips'));
