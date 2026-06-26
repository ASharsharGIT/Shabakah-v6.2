const fs = require('fs');
const path = require('path');
const D = 'motion'.replace('motion', 'motion').replace('motion', 'div');
const openD = '<' + D;
const closeD = '</' + D + '>';

const p = path.join(__dirname, '..', 'iot-tracking.html');
let h = fs.readFileSync(p, 'utf8');

function fix(s) {
  return s.replace(/<motion /g, openD + ' ').replace(/<\/motion>/g, closeD);
}

const RASED_MODULES = fix(`
            <!-- Sub-block: Rased four modules -->
            <div id="rased-modules" class="rased-block rased-block-modules">
                <div class="rased-block-header text-center">
                    <span class="section-tag glass-pill rased-modules-tag">Rased · Service modules</span>
                    <h3 class="section-title rased-modules-title">Four modules for every fleet operation</h3>
                    <p class="section-description rased-modules-desc">Choose the Rased capabilities your organization needs — tracking, maintenance, operations, or rental.</p>
                </div>
                <div class="rased-modules-grid">
                    <a href="#rased-capabilities" class="rased-module-card glass-card-iot" data-module="tracking">
                        <motion class="rased-module-icon"><i data-lucide="map-pin" class="lucide-icon"></i></div>
                        <h4 class="rased-module-title">Vehicle tracking</h4>
                        <p class="rased-module-desc">Live GPS, geofencing, trip history, and instant alerts on web and mobile.</p>
                        <span class="rased-module-link">View capabilities <i data-lucide="arrow-right" class="lucide-icon"></i></span>
                    </a>
                    <a href="#rased-capabilities" class="rased-module-card glass-card-iot" data-module="maintenance">
                        <div class="rased-module-icon"><i data-lucide="wrench" class="lucide-icon"></i></div>
                        <h4 class="rased-module-title">Maintenance &amp; operations</h4>
                        <p class="rased-module-desc">Work orders, preventive maintenance schedules, and technician workflows.</p>
                        <span class="rased-module-link">View capabilities <i data-lucide="arrow-right" class="lucide-icon"></i></span>
                    </a>
                    <a href="#rased-capabilities" class="rased-module-card glass-card-iot" data-module="operations">
                        <div class="rased-module-icon"><i data-lucide="route" class="lucide-icon"></i></motion>
                        <h4 class="rased-module-title">Fleet operations</h4>
                        <p class="rased-module-desc">Dispatch, driver scoring, fuel analytics, and compliance reporting.</p>
                        <span class="rased-module-link">View capabilities <i data-lucide="arrow-right" class="lucide-icon"></i></span>
                    </a>
                    <a href="#support" class="rased-module-card glass-card-iot" data-module="rental">
                        <div class="rased-module-icon"><i data-lucide="key-round" class="lucide-icon"></i></div>
                        <h4 class="rased-module-title">Rental management</h4>
                        <p class="rased-module-desc">Contract tracking, handover/return checks, and rental fleet utilization.</p>
                        <span class="rased-module-link">Talk to sales <i data-lucide="arrow-right" class="lucide-icon"></i></span>
                    </a>
                </div>
            </div>
`);
