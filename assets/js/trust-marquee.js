/**
 * Pixel-perfect vendor logo marquee (replaces CSS -50% loop for smooth motion).
 */
(function () {
    'use strict';

    function parseDurationSeconds(marqueeEl) {
        const raw = getComputedStyle(marqueeEl).getPropertyValue('--trust-marquee-duration').trim();
        if (!raw) return 42;
        const value = parseFloat(raw);
        return Number.isFinite(value) && value > 0 ? value : 42;
    }

    function isRtl() {
        return document.documentElement.getAttribute('dir') === 'rtl'
            || document.body.classList.contains('rtl');
    }

    function waitForImages(track) {
        const images = track.querySelectorAll('img');
        return Promise.all(Array.from(images, (img) => {
            if (img.complete) return Promise.resolve();
            return new Promise((resolve) => {
                img.addEventListener('load', resolve, { once: true });
                img.addEventListener('error', resolve, { once: true });
            });
        }));
    }

    function measureCopyWidth(track) {
        const half = track.scrollWidth / 2;
        return half > 0 ? half : 0;
    }

    function initTrustMarquee() {
        const track = document.querySelector('.trust-marquee .trust-track');
        if (!track) return;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        const marquee = track.closest('.trust-marquee');
        if (!marquee) return;

        let copyWidth = 0;
        let position = 0;
        let lastTime = null;
        let rafId = null;
        let pxPerMs = 0;
        let rtl = isRtl();

        function applyTransform() {
            track.style.transform = `translate3d(${position}px, 0, 0)`;
        }

        function recalculateSpeed() {
            copyWidth = measureCopyWidth(track);
            if (copyWidth <= 0) return false;
            const durationSec = parseDurationSeconds(marquee);
            pxPerMs = copyWidth / (durationSec * 1000);
            return true;
        }

        function tick(now) {
            if (lastTime === null) lastTime = now;
            const delta = Math.min(now - lastTime, 50);
            lastTime = now;
            rtl = isRtl();

            if (copyWidth > 0 && pxPerMs > 0) {
                if (rtl) {
                    position += pxPerMs * delta;
                    while (position >= 0) position -= copyWidth;
                } else {
                    position -= pxPerMs * delta;
                    while (position <= -copyWidth) position += copyWidth;
                }
                applyTransform();
            }

            rafId = requestAnimationFrame(tick);
        }

        function start() {
            if (!recalculateSpeed()) return;

            track.classList.add('is-js-marquee');
            position = 0;
            lastTime = null;
            applyTransform();

            if (rafId !== null) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(tick);
        }

        waitForImages(track).then(() => {
            start();

            window.addEventListener('load', () => {
                recalculateSpeed();
            }, { once: true });

            let resizeTimer;
            window.addEventListener('resize', () => {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(() => {
                    const prevRatio = copyWidth > 0 ? position / copyWidth : 0;
                    if (recalculateSpeed()) {
                        position = prevRatio * copyWidth;
                        if (rtl) {
                            while (position >= 0) position -= copyWidth;
                        } else {
                            while (position <= -copyWidth) position += copyWidth;
                        }
                        applyTransform();
                    }
                }, 150);
            }, { passive: true });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTrustMarquee);
    } else {
        initTrustMarquee();
    }
})();
