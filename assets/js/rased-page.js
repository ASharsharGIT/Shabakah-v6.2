/* =============================================================
   rased-page.js — Interactivity for the Rased / Elm / ISO page
   - Tamm pricing tier slider + tier buttons (re-rendered on language change)
   - ISO standards category filter
   - Floating WhatsApp link (data-whatsapp attribute swap)
   - Lazy reveal animations (respects prefers-reduced-motion)
   - Lucide icon refresh after dynamic content
   ============================================================= */

(function () {
    'use strict';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /** Single company WhatsApp — update digits only (no + or spaces) */
    const SHABAKAH_WHATSAPP = '966920033465';
    const WA_MSG_EN = 'Hello, I need help with Elm services (Muqeem / Tamm / Rased) from SHABAKAH.';
    const WA_MSG_AR = 'مرحباً، أحتاج المساعدة في خدمات علم (مقيم / تم / راصد) من شبكة التقنية.';
    const ELM_IMG_FALLBACK = 'assets/images/Raqeeb.png';

    function getWhatsAppUrl() {
        const lang = getCurrentLang();
        const text = encodeURIComponent(lang === 'ar' ? WA_MSG_AR : WA_MSG_EN);
        return 'https://wa.me/' + SHABAKAH_WHATSAPP + '?text=' + text;
    }

    window.getShabakahWhatsAppUrl = getWhatsAppUrl;

    // ---------- Helpers ----------
    function refreshLucide() {
        if (typeof lucide !== 'undefined' && typeof lucide.createIcons === 'function') {
            try { lucide.createIcons(); } catch (e) { /* noop */ }
        }
    }

    function getCurrentLang() {
        return (localStorage.getItem('language') || 'en');
    }

    function formatNumber(n, lang) {
        try {
            const locale = lang === 'ar' ? 'ar-SA' : 'en-US';
            return new Intl.NumberFormat(locale).format(n);
        } catch (e) {
            return String(n);
        }
    }

    // ---------- Tamm Pricing Slider ----------
    function getTammData() {
        if (window.__tammPricingData) return window.__tammPricingData;
        // Fallback: pull EN defaults from page's HTML if i18n hasn't fired yet
        return {
            pricingTierLabel: 'Tier',
            pricingRangeLabel: 'Vehicles',
            pricingPriceLabel: 'Annual price',
            perVehicleNote: '+ 0.5 SAR per additional vehicle',
            pricingTiers: [
                { tier: 1, range: '0 – 9 vehicles', short: '0–9', price: 1800 },
                { tier: 2, range: '10 – 49 vehicles', short: '10–49', price: 3300 },
                { tier: 3, range: '50 – 99 vehicles', short: '50–99', price: 4800 },
                { tier: 4, range: '100 – 249 vehicles', short: '100–249', price: 7300 },
                { tier: 5, range: '250 – 499 vehicles', short: '250–499', price: 9800 },
                { tier: 6, range: '500 – 999 vehicles', short: '500–999', price: 12300 },
                { tier: 7, range: '1,000 – 4,999 vehicles', short: '1,000–4,999', price: 16300 },
                { tier: 8, range: '5,000 – 9,999 vehicles', short: '5,000–9,999', price: 20300 },
                { tier: 9, range: '10,000+ vehicles', short: '10,000+', price: 24300, perVehicleRate: 0.5 }
            ],
            currency: 'SAR',
            perYear: '/ year'
        };
    }

    function renderTammPricing() {
        const root = document.getElementById('tamm-pricing');
        if (!root) return;
        const data = getTammData();
        const lang = getCurrentLang();
        const tiers = Array.isArray(data.pricingTiers) ? data.pricingTiers : [];
        if (!tiers.length) return;

        const slider = root.querySelector('.tamm-pricing-slider');
        const ticksWrap = root.querySelector('.tamm-pricing-ticks');
        const tiersGrid = root.querySelector('.tamm-pricing-tiers-grid');

        // Slider min/max
        if (slider) {
            slider.min = '1';
            slider.max = String(tiers.length);
            slider.step = '1';
        }

        // Ticks (short labels above the slider line)
        if (ticksWrap) {
            ticksWrap.innerHTML = '';
            tiers.forEach((t) => {
                const span = document.createElement('span');
                span.textContent = t.short || ('T' + t.tier);
                ticksWrap.appendChild(span);
            });
        }

        // Tier button cards
        if (tiersGrid) {
            tiersGrid.innerHTML = '';
            tiers.forEach((t) => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'tamm-pricing-tier-btn';
                btn.setAttribute('role', 'tab');
                btn.setAttribute('data-tier', String(t.tier));

                const num = document.createElement('span');
                num.className = 'tamm-pricing-tier-btn-num';
                num.textContent = (data.pricingTierLabel || 'Tier') + ' ' + t.tier;

                const sht = document.createElement('span');
                sht.className = 'tamm-pricing-tier-btn-short';
                sht.textContent = t.short || t.range;

                const pr = document.createElement('span');
                pr.className = 'tamm-pricing-tier-btn-price';
                pr.textContent = formatNumber(t.price, lang) + ' ' + (data.currency || 'SAR');

                btn.appendChild(num);
                btn.appendChild(sht);
                btn.appendChild(pr);
                if (t.perVehicleRate && data.perVehicleNote) {
                    const extraPr = document.createElement('span');
                    extraPr.className = 'tamm-pricing-tier-btn-extra';
                    extraPr.textContent = data.perVehicleNote;
                    btn.appendChild(extraPr);
                }
                btn.addEventListener('click', () => setTammTier(t.tier));
                tiersGrid.appendChild(btn);
            });
        }

        // Initial display sync to current slider value
        const initialTier = slider ? parseInt(slider.value, 10) || 1 : 1;
        setTammTier(initialTier);
    }

    function setTammTier(tierNum) {
        const root = document.getElementById('tamm-pricing');
        if (!root) return;
        const data = getTammData();
        const lang = getCurrentLang();
        const tiers = Array.isArray(data.pricingTiers) ? data.pricingTiers : [];
        const tier = tiers.find(t => t.tier === tierNum) || tiers[0];
        if (!tier) return;

        const slider = root.querySelector('.tamm-pricing-slider');
        if (slider && parseInt(slider.value, 10) !== tier.tier) {
            slider.value = String(tier.tier);
        }

        const tierValue = root.querySelector('.tamm-pricing-tier-value');
        const rangeValue = root.querySelector('.tamm-pricing-range-value');
        const amount = root.querySelector('.tamm-pricing-amount');
        const currency = root.querySelector('.tamm-pricing-currency');
        const period = root.querySelector('.tamm-pricing-period');
        const extra = root.querySelector('.tamm-pricing-extra');

        if (tierValue) tierValue.textContent = String(tier.tier);
        if (rangeValue) rangeValue.textContent = tier.range;
        if (amount) amount.textContent = formatNumber(tier.price, lang);
        if (currency && data.currency) currency.textContent = data.currency;
        if (period && data.perYear) period.textContent = data.perYear;
        if (extra) {
            if (tier.perVehicleRate && data.perVehicleNote) {
                extra.textContent = data.perVehicleNote;
                extra.hidden = false;
            } else {
                extra.textContent = '';
                extra.hidden = true;
            }
        }

        const buttons = root.querySelectorAll('.tamm-pricing-tier-btn');
        buttons.forEach(btn => {
            const n = parseInt(btn.getAttribute('data-tier'), 10);
            const active = n === tier.tier;
            btn.classList.toggle('is-active', active);
            btn.setAttribute('aria-selected', active ? 'true' : 'false');
        });
    }

    function bindTammSlider() {
        const slider = document.querySelector('#tamm-pricing .tamm-pricing-slider');
        if (!slider) return;
        slider.addEventListener('input', (e) => {
            const n = parseInt(e.target.value, 10);
            if (!isNaN(n)) setTammTier(n);
        });
    }

    // Expose for language-complete.js to re-render after i18n swap
    window.renderTammPricing = renderTammPricing;

    // ---------- Rased Packages (official rased.elm.sa tiers) ----------
    function getRasedPricingData() {
        if (window.__rasedPricingData) return window.__rasedPricingData;
        return {
            fleetAriaLabel: 'Fleet size tiers',
            perVehicleLabel: 'Per vehicle',
            currency: 'SAR',
            period: '/ month',
            fleetTiers: [
                { key: '99', label: '5–99 vehicles' },
                { key: '249', label: '100–249 vehicles' },
                { key: '499', label: '250–499 vehicles' },
                { key: '999', label: '500–999 vehicles' },
                { key: '4999', label: '1,000–4,999 vehicles' },
                { key: '5000', label: 'More than 5,000 vehicles' }
            ],
            packages: [
                { id: 'tracking', name: 'Tracking', prices: { '99': 16, '249': 14, '499': 13, '999': 12, '4999': 11, '5000': 9 } },
                { id: 'ops', name: 'Tracking, operation and maintenance', prices: { '99': 18, '249': 16, '499': 15, '999': 14, '4999': 13, '5000': 12 } },
                { id: 'rental', name: 'Rental', prices: { '99': 7.5, '249': 7, '499': 6.5, '999': 6, '4999': 5.5, '5000': 5 } },
                { id: 'full', name: 'Full Package', prices: { '99': 23, '249': 21, '499': 19.5, '999': 18, '4999': 16.5, '5000': 15 } },
                { id: 'fuel', name: 'Fuel Package', prices: { '99': 16, '249': 14, '499': 13, '999': 12, '4999': 11, '5000': 9 } }
            ]
        };
    }

    let activeRasedFleetKey = '99';

    function formatPrice(n, lang) {
        if (Number.isInteger(n)) return formatNumber(n, lang);
        try {
            const locale = lang === 'ar' ? 'ar-SA' : 'en-US';
            return new Intl.NumberFormat(locale, { minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(n);
        } catch (e) {
            return String(n);
        }
    }

    function setRasedFleetTier(fleetKey) {
        activeRasedFleetKey = fleetKey;
        const root = document.getElementById('rased-packages');
        if (!root) return;
        const data = getRasedPricingData();
        const lang = getCurrentLang();

        const chips = root.querySelectorAll('.rased-packages-fleet-chip');
        chips.forEach(chip => {
            const active = chip.getAttribute('data-fleet-key') === fleetKey;
            chip.classList.toggle('is-active', active);
            chip.setAttribute('aria-selected', active ? 'true' : 'false');
        });

        const cards = root.querySelectorAll('.rased-package-card');
        (data.packages || []).forEach((pkg, i) => {
            const card = cards[i];
            if (!card) return;
            const price = pkg.prices && pkg.prices[fleetKey];
            const amount = card.querySelector('.rased-package-price-amount');
            const currency = card.querySelector('.rased-package-price-currency');
            const period = card.querySelector('.rased-package-price-period');
            if (amount && price != null) amount.textContent = formatPrice(price, lang);
            if (currency && data.currency) currency.textContent = data.currency;
            if (period && data.period) period.textContent = data.period;
        });
    }

    function renderRasedPricing() {
        const root = document.getElementById('rased-packages');
        if (!root) return;
        const data = getRasedPricingData();
        const lang = getCurrentLang();

        const chipsWrap = root.querySelector('.rased-packages-fleet-chips');
        const grid = root.querySelector('.rased-packages-grid');
        if (!chipsWrap || !grid) return;

        chipsWrap.innerHTML = '';
        (data.fleetTiers || []).forEach((tier, idx) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'rased-packages-fleet-chip';
            btn.setAttribute('role', 'tab');
            btn.setAttribute('data-fleet-key', tier.key);
            btn.textContent = tier.label;
            btn.addEventListener('click', () => setRasedFleetTier(tier.key));
            chipsWrap.appendChild(btn);
            if (idx === 0 && !data.fleetTiers.find(t => t.key === activeRasedFleetKey)) {
                activeRasedFleetKey = tier.key;
            }
        });

        grid.innerHTML = '';
        (data.packages || []).forEach(pkg => {
            const card = document.createElement('article');
            card.className = 'rased-package-card glass-card-iot';
            card.setAttribute('data-package', pkg.id);

            const name = document.createElement('h4');
            name.className = 'rased-package-name';
            name.textContent = pkg.name;

            const priceWrap = document.createElement('p');
            priceWrap.className = 'rased-package-price';

            const amount = document.createElement('span');
            amount.className = 'rased-package-price-amount';

            const currency = document.createElement('span');
            currency.className = 'rased-package-price-currency';

            const period = document.createElement('span');
            period.className = 'rased-package-price-period';

            priceWrap.appendChild(amount);
            priceWrap.appendChild(document.createTextNode(' '));
            priceWrap.appendChild(currency);
            priceWrap.appendChild(period);

            const label = document.createElement('span');
            label.className = 'rased-package-label';
            label.textContent = data.perVehicleLabel || 'Per vehicle';

            card.appendChild(name);
            card.appendChild(priceWrap);
            card.appendChild(label);
            grid.appendChild(card);
        });

        const validKey = (data.fleetTiers || []).some(t => t.key === activeRasedFleetKey)
            ? activeRasedFleetKey
            : ((data.fleetTiers && data.fleetTiers[0] && data.fleetTiers[0].key) || '99');
        setRasedFleetTier(validKey);
        refreshLucide();
    }

    window.renderRasedPricing = renderRasedPricing;

    // ---------- Muqeem Packages (official tier pricing) ----------
    function getMuqeemPricingData() {
        if (window.__muqeemPricingData) return window.__muqeemPricingData;
        return {
            pricingTierAriaLabel: 'Muqeem resident tiers',
            freeUsersLabel: 'Free users',
            annualPriceLabel: 'Annual price',
            perResident: 'per resident',
            currency: 'SAR',
            packages: [
                { id: 'basic', name: 'Basic' },
                { id: 'advanced', name: 'Advanced' },
                { id: 'professional', name: 'Professional' }
            ],
            tiers: []
        };
    }

    let activeMuqeemTier = 1;

    function formatMuqeemPrice(price, perResident, data, lang) {
        const curr = data.currency || 'SAR';
        const amount = formatPrice(price, lang);
        if (perResident) {
            return `${amount} ${curr} ${data.perResident || 'per resident'}`;
        }
        return `${amount} ${curr}`;
    }

    function setMuqeemTier(tierNum) {
        activeMuqeemTier = tierNum;
        const root = document.getElementById('muqeem-pricing');
        if (!root) return;
        const data = getMuqeemPricingData();
        const lang = getCurrentLang();
        const tierData = (data.tiers || []).find(t => t.tier === tierNum);
        if (!tierData) return;

        root.querySelectorAll('.muqeem-pricing-tier-chip').forEach(chip => {
            const active = Number(chip.getAttribute('data-tier')) === tierNum;
            chip.classList.toggle('is-active', active);
            chip.setAttribute('aria-selected', active ? 'true' : 'false');
        });

        (data.packages || []).forEach((pkg, i) => {
            const card = root.querySelectorAll('.muqeem-package-card')[i];
            if (!card) return;
            const price = tierData.prices && tierData.prices[pkg.id];
            const amount = card.querySelector('.muqeem-package-price-amount');
            const free = card.querySelector('.muqeem-package-free-users');
            if (amount && price != null) {
                amount.textContent = formatMuqeemPrice(price, tierData.perResident, data, lang);
            }
            if (free && tierData.freeUsers) {
                free.textContent = tierData.freeUsers[pkg.id] || '';
            }
        });

        root.querySelectorAll('.muqeem-pricing-table tbody tr').forEach(row => {
            const active = Number(row.getAttribute('data-tier')) === tierNum;
            row.classList.toggle('is-active', active);
        });
    }

    function renderMuqeemPricing() {
        const root = document.getElementById('muqeem-pricing');
        if (!root) return;
        const data = getMuqeemPricingData();
        const lang = getCurrentLang();

        const chipsWrap = root.querySelector('.muqeem-pricing-tier-chips');
        const grid = root.querySelector('.muqeem-pricing-packages-grid');
        const residentsBody = root.querySelector('.muqeem-pricing-residents-table tbody');
        const freeBody = root.querySelector('.muqeem-pricing-freeusers-table tbody');
        const pricesBody = root.querySelector('.muqeem-pricing-prices-table tbody');
        if (!chipsWrap || !grid || !residentsBody || !freeBody || !pricesBody) return;

        chipsWrap.innerHTML = '';
        (data.tiers || []).forEach((tier, idx) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'muqeem-pricing-tier-chip';
            btn.setAttribute('role', 'tab');
            btn.setAttribute('data-tier', String(tier.tier));
            btn.textContent = tier.range;
            btn.addEventListener('click', () => setMuqeemTier(tier.tier));
            chipsWrap.appendChild(btn);
            if (idx === 0 && !(data.tiers || []).find(t => t.tier === activeMuqeemTier)) {
                activeMuqeemTier = tier.tier;
            }
        });

        grid.innerHTML = '';
        (data.packages || []).forEach(pkg => {
            const card = document.createElement('article');
            card.className = 'muqeem-package-card glass-card-iot';
            card.setAttribute('data-package', pkg.id);

            const name = document.createElement('h4');
            name.className = 'muqeem-package-name';
            name.textContent = pkg.name;

            const priceWrap = document.createElement('p');
            priceWrap.className = 'muqeem-package-price';

            const amount = document.createElement('span');
            amount.className = 'muqeem-package-price-amount';
            priceWrap.appendChild(amount);

            const free = document.createElement('span');
            free.className = 'muqeem-package-free-users';

            const freeLabel = document.createElement('span');
            freeLabel.className = 'muqeem-package-free-label';
            freeLabel.textContent = data.freeUsersLabel || 'Free users';

            card.appendChild(name);
            card.appendChild(priceWrap);
            card.appendChild(freeLabel);
            card.appendChild(free);
            grid.appendChild(card);
        });

        residentsBody.innerHTML = '';
        freeBody.innerHTML = '';
        pricesBody.innerHTML = '';
        (data.tiers || []).forEach(tier => {
            const rRow = document.createElement('tr');
            rRow.setAttribute('data-tier', String(tier.tier));
            rRow.innerHTML = `<td>${tier.tier}</td><td>${tier.range}</td>`;
            residentsBody.appendChild(rRow);

            const fRow = document.createElement('tr');
            fRow.setAttribute('data-tier', String(tier.tier));
            const fu = tier.freeUsers || {};
            fRow.innerHTML = `<td>${tier.tier}</td><td>${fu.basic || ''}</td><td>${fu.advanced || ''}</td><td>${fu.professional || ''}</td>`;
            freeBody.appendChild(fRow);

            const pRow = document.createElement('tr');
            pRow.setAttribute('data-tier', String(tier.tier));
            const pr = tier.prices || {};
            const pkgs = data.packages || [];
            pRow.innerHTML = `<td>${tier.tier}</td>` +
                pkgs.map(pkg => {
                    const val = pr[pkg.id];
                    return `<td>${val != null ? formatMuqeemPrice(val, tier.perResident, data, lang) : ''}</td>`;
                }).join('');
            pricesBody.appendChild(pRow);
        });

        const validTier = (data.tiers || []).some(t => t.tier === activeMuqeemTier)
            ? activeMuqeemTier
            : ((data.tiers && data.tiers[0] && data.tiers[0].tier) || 1);
        setMuqeemTier(validTier);
        refreshLucide();
    }

    window.renderMuqeemPricing = renderMuqeemPricing;

    // ---------- ISO Standards Category Filter ----------
    function bindIsoFilter() {
        const chips = document.querySelectorAll('.iso-filter-chip');
        if (!chips.length) return;
        const cards = document.querySelectorAll('.iso-standard-card');

        chips.forEach(chip => {
            chip.addEventListener('click', () => {
                const category = chip.getAttribute('data-category');
                chips.forEach(c => {
                    const active = c === chip;
                    c.classList.toggle('is-active', active);
                    c.setAttribute('aria-selected', active ? 'true' : 'false');
                });
                cards.forEach(card => {
                    const cat = card.getAttribute('data-category');
                    const alwaysVisible = card.hasAttribute('data-always-visible');
                    const visible = alwaysVisible || category === 'all' || cat === category;
                    card.classList.toggle('is-hidden', !visible);
                });
            });
        });
    }

    // ---------- Floating WhatsApp + hero/support WA links ----------
    function bindFloatingWhatsapp() {
        const url = getWhatsAppUrl();
        document.querySelectorAll('[data-whatsapp], .js-whatsapp-link').forEach(el => {
            el.setAttribute('href', url);
            el.setAttribute('target', '_blank');
            el.setAttribute('rel', 'noopener noreferrer');
        });
        document.querySelectorAll('[data-whatsapp]').forEach(el => {
            el.setAttribute('data-whatsapp', SHABAKAH_WHATSAPP);
        });
    }

    function bindElmImageFallbacks() {
        document.querySelectorAll('.elm-product-img[data-fallback], .raqeeb-product-img[data-fallback]').forEach(img => {
            if (img.dataset.fallbackBound) return;
            img.dataset.fallbackBound = '1';
            img.addEventListener('error', function onErr() {
                if (img.src.indexOf(ELM_IMG_FALLBACK) === -1) {
                    img.src = img.getAttribute('data-fallback') || ELM_IMG_FALLBACK;
                }
            });
        });
    }

    // ---------- FAQ category filter ----------
    function bindFaqFilter() {
        const chips = document.querySelectorAll('.faq-filter-chip');
        if (!chips.length) return;
        const items = document.querySelectorAll('.faq-item[data-faq-category]');

        chips.forEach(chip => {
            chip.addEventListener('click', () => {
                const category = chip.getAttribute('data-category');
                chips.forEach(c => {
                    const active = c === chip;
                    c.classList.toggle('is-active', active);
                    c.setAttribute('aria-selected', active ? 'true' : 'false');
                });
                items.forEach(item => {
                    const cat = item.getAttribute('data-faq-category');
                    const visible = category === 'all' || cat === category;
                    item.classList.toggle('is-hidden', !visible);
                });
            });
        });
    }

    // ---------- Reveal-on-scroll Animations ----------
    function bindReveals() {
        if (prefersReducedMotion) return;
        const targets = document.querySelectorAll(
            '.service-pillar-card, .elm-product-card, .iso-standard-card, ' +
            '.iso-step, .support-channel, .faq-item, ' +
            '.feature-card-iot, .value-card-iot, .gallery-item-iot, .platform-card, ' +
            '.rased-module-card, .rased-highlight-card, .rased-package-card, ' +
            '.smart-gate-highlight-card, .smart-gate-service-card, ' +
            '.activation-step, .official-link-card, .iot-stat-card, ' +
            '.sales-team-card, .sales-rep-row'
        );
        if (!targets.length || !('IntersectionObserver' in window)) return;

        targets.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(14px)';
            el.style.transition = 'opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)';
            el.style.willChange = 'opacity, transform';
        });

        // Group targets by parent so siblings get a 60ms stagger.
        const parentMap = new WeakMap();
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                const parent = el.parentElement;
                let delay = 0;
                if (parent) {
                    const idx = parentMap.get(parent) || 0;
                    delay = Math.min(idx, 7) * 60;
                    parentMap.set(parent, idx + 1);
                }
                el.style.transitionDelay = delay + 'ms';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                io.unobserve(el);
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        targets.forEach(el => io.observe(el));
    }

    // ---------- Product sub-nav (scroll-spy + smooth-scroll) ----------
    function getHeaderOffset() {
        const cssVar = getComputedStyle(document.documentElement)
            .getPropertyValue('--header-height').trim();
        const fromVar = parseInt(cssVar, 10);
        if (!isNaN(fromVar) && fromVar > 0) return fromVar;
        const header = document.querySelector('header, .header, .site-header, .navbar');
        if (header && header.offsetHeight) return header.offsetHeight;
        return 80;
    }

    function bindProductSubNav(navSelector, tabSelector) {
        const nav = document.querySelector(navSelector);
        if (!nav) return;
        const tabs = Array.from(nav.querySelectorAll(tabSelector));
        if (!tabs.length) return;

        const blocks = tabs
            .map(t => {
                const targetId = t.getAttribute('data-target') || (t.getAttribute('href') || '').replace(/^#/, '');
                return { tab: t, block: document.getElementById(targetId) };
            })
            .filter(x => x.block);
        if (!blocks.length) return;

        // Smooth-scroll click handler with header + sticky-nav offset
        function setActive(targetTab) {
            tabs.forEach(t => {
                const active = t === targetTab;
                t.classList.toggle('is-active', active);
                t.setAttribute('aria-selected', active ? 'true' : 'false');
            });
        }

        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                const id = tab.getAttribute('data-target') || (tab.getAttribute('href') || '').replace(/^#/, '');
                const target = document.getElementById(id);
                if (!target) return;
                e.preventDefault();

                const headerOffset = getHeaderOffset();
                const subnavOffset = nav.offsetHeight || 56;
                const rect = target.getBoundingClientRect();
                const targetY = rect.top + window.pageYOffset - headerOffset - subnavOffset - 16;

                window.scrollTo({
                    top: targetY,
                    behavior: prefersReducedMotion ? 'auto' : 'smooth'
                });
                setActive(tab);
                history.replaceState(null, '', '#' + id);
            });
        });

        // Scroll-spy via IntersectionObserver
        if (!('IntersectionObserver' in window)) return;

        const headerOffset = getHeaderOffset();
        const navHeight = 64;
        const io = new IntersectionObserver((entries) => {
            // Pick the entry that's most visible / closest to top
            const visible = entries
                .filter(e => e.isIntersecting)
                .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

            if (visible.length) {
                const id = visible[0].target.id;
                const match = blocks.find(b => b.block.id === id);
                if (match) setActive(match.tab);
            }
        }, {
            rootMargin: `-${headerOffset + navHeight + 16}px 0px -55% 0px`,
            threshold: [0, 0.1, 0.3]
        });

        blocks.forEach(b => io.observe(b.block));
    }

    // ---------- Raqeeb gallery lightbox ----------
    function bindRaqeebGalleryLightbox() {
        const section = document.getElementById('raqeeb-preview');
        const lightbox = document.getElementById('raqeebGalleryLightbox');
        const lbImg = document.getElementById('raqeebGalleryLightboxImg');
        const lbCaption = document.getElementById('raqeebGalleryLightboxCaption');
        const closeBtn = document.getElementById('raqeebGalleryLightboxClose');
        const prevBtn = document.querySelector('[data-raqeeb-lightbox-prev]');
        const nextBtn = document.querySelector('[data-raqeeb-lightbox-next]');
        if (!section || !lightbox || !lbImg) return;

        const tiles = () => Array.from(section.querySelectorAll('.gallery-item-iot--lightbox'));
        const imgs = () => tiles().map(t => t.querySelector('.gallery-img')).filter(Boolean);
        let index = 0;
        let lastFocused = null;

        function render(i) {
            const list = imgs();
            if (!list.length) return;
            index = (i + list.length) % list.length;
            const img = list[index];
            lbImg.src = img.currentSrc || img.src;
            lbImg.alt = img.alt || '';
            if (lbCaption) lbCaption.textContent = img.alt || '';
        }

        function open(tile) {
            const list = imgs();
            const img = tile.querySelector('.gallery-img');
            const i = list.indexOf(img);
            if (i < 0) return;
            lastFocused = document.activeElement;
            render(i);
            lightbox.classList.add('is-open');
            lightbox.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            closeBtn?.focus();
        }

        function close() {
            lightbox.classList.remove('is-open');
            lightbox.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            lbImg.removeAttribute('src');
            if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
        }

        tiles().forEach(tile => {
            const img = tile.querySelector('.gallery-img');
            if (!img) return;
            if (!img.alt) return;
            tile.setAttribute('aria-label', `View ${img.alt} full size`);
            tile.addEventListener('click', () => open(tile));
        });

        closeBtn?.addEventListener('click', close);
        lightbox.querySelectorAll('[data-raqeeb-lightbox-close]').forEach(el => {
            el.addEventListener('click', close);
        });
        prevBtn?.addEventListener('click', () => render(index - 1));
        nextBtn?.addEventListener('click', () => render(index + 1));

        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('is-open')) return;
            if (e.key === 'Escape') close();
            if (e.key === 'ArrowLeft') render(index - 1);
            if (e.key === 'ArrowRight') render(index + 1);
        });
    }

    // ---------- Init ----------
    function init() {
        renderTammPricing();
        renderRasedPricing();
        renderMuqeemPricing();
        bindTammSlider();
        bindIsoFilter();
        bindFloatingWhatsapp();
        bindFaqFilter();
        bindElmImageFallbacks();
        bindRaqeebGalleryLightbox();
        bindProductSubNav('.rased-subnav', '.rased-subnav-tab');
        bindProductSubNav('.raqeeb-subnav', '.raqeeb-subnav-tab');
        bindReveals();
        refreshLucide();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Re-render Tamm pricing after every language toggle (language-complete.js
    // dispatches no native event; we hook into setLanguage by re-rendering when
    // the language storage changes via the toggle).
    window.addEventListener('storage', (e) => {
        if (e.key === 'language') {
            renderTammPricing();
            renderRasedPricing();
            renderMuqeemPricing();
            bindFloatingWhatsapp();
            refreshLucide();
        }
    });
})();
