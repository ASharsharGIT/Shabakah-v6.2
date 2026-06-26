/* =====================================================
   PROJECTS CAROUSEL - AUTO-SLIDING JAVASCRIPT
   Smooth, reliable, no scroll-jacking
   ===================================================== */

(function() {
    'use strict';
    
    function initProjectsCarousel() {
        const carousel = document.querySelector('.projects-carousel');
        if (!carousel) return;
        
        const slides = carousel.querySelectorAll('.carousel-slide');
        const dots = carousel.querySelectorAll('.dot');
        const prevBtn = carousel.querySelector('.nav-prev');
        const nextBtn = carousel.querySelector('.nav-next');
        const progressBar = carousel.querySelector('.progress-bar');
        
        if (slides.length === 0) return;

        const slidesContainer = carousel.querySelector('.carousel-slides');
        let resizeTimer = null;
        
        let currentIndex = 0;
        let autoPlayInterval = null;
        let progressInterval = null;
        const autoPlayDelay = 5000; // 5 seconds per slide
        const progressStep = 50; // Update every 50ms

        function syncCarouselHeight() {
            if (!slidesContainer) return;
            const active = slidesContainer.querySelector('.carousel-slide.active');
            if (!active) return;
            slidesContainer.style.height = active.scrollHeight + 'px';
        }

        function scheduleHeightSync() {
            requestAnimationFrame(() => {
                syncCarouselHeight();
                requestAnimationFrame(syncCarouselHeight);
            });
        }
        
        // Go to specific slide
        function goToSlide(index) {
            // Handle wrapping
            if (index < 0) index = slides.length - 1;
            if (index >= slides.length) index = 0;
            
            // Update slides
            slides.forEach((slide, i) => {
                slide.classList.remove('active', 'prev');
                if (i === index) {
                    slide.classList.add('active');
                } else if (i < index || (index === 0 && i === slides.length - 1)) {
                    slide.classList.add('prev');
                }
            });
            
            // Update dots
            dots.forEach((dot, i) => {
                dot.classList.remove('active');
                if (i === index) {
                    dot.classList.add('active');
                }
            });
            
            currentIndex = index;
            
            // Reset progress
            resetProgress();
            scheduleHeightSync();
        }
        
        // Next slide
        function nextSlide() {
            goToSlide(currentIndex + 1);
        }
        
        // Previous slide
        function prevSlide() {
            goToSlide(currentIndex - 1);
        }
        
        // Progress bar animation
        function resetProgress() {
            if (progressInterval) clearInterval(progressInterval);
            if (!progressBar) return;
            
            let progress = 0;
            progressBar.style.width = '0%';
            
            progressInterval = setInterval(() => {
                progress += (progressStep / autoPlayDelay) * 100;
                progressBar.style.width = Math.min(progress, 100) + '%';
                
                if (progress >= 100) {
                    clearInterval(progressInterval);
                }
            }, progressStep);
        }
        
        // Start auto-play
        function startAutoPlay() {
            stopAutoPlay();
            resetProgress();
            autoPlayInterval = setInterval(nextSlide, autoPlayDelay);
        }
        
        // Stop auto-play
        function stopAutoPlay() {
            if (autoPlayInterval) {
                clearInterval(autoPlayInterval);
                autoPlayInterval = null;
            }
            if (progressInterval) {
                clearInterval(progressInterval);
                progressInterval = null;
            }
        }
        
        // Event listeners
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                startAutoPlay(); // Restart timer after manual navigation
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                startAutoPlay(); // Restart timer after manual navigation
            });
        }
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                goToSlide(index);
                startAutoPlay(); // Restart timer after manual navigation
            });
        });
        
        // Pause on hover
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);
        
        // Touch/swipe support
        let touchStartX = 0;
        let touchEndX = 0;
        
        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            stopAutoPlay();
        }, { passive: true });
        
        carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
            startAutoPlay();
        }, { passive: true });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    nextSlide(); // Swipe left = next
                } else {
                    prevSlide(); // Swipe right = prev
                }
            }
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            // Only if carousel is in viewport
            const rect = carousel.getBoundingClientRect();
            const inView = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (!inView) return;
            
            if (e.key === 'ArrowLeft') {
                prevSlide();
                startAutoPlay();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
                startAutoPlay();
            }
        });
        
        // Visibility change - pause when tab is hidden
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                stopAutoPlay();
            } else {
                startAutoPlay();
            }
        });
        
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(scheduleHeightSync, 150);
        });

        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(scheduleHeightSync);
        }

        carousel.querySelectorAll('img').forEach((img) => {
            if (!img.complete) {
                img.addEventListener('load', scheduleHeightSync, { once: true });
            }
        });

        // Initialize
        goToSlide(0);
        startAutoPlay();
        scheduleHeightSync();
        
        console.log('✅ Projects Carousel initialized');
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initProjectsCarousel);
    } else {
        initProjectsCarousel();
    }
})();
