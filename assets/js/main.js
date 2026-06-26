/**
 * SHABAKAH Integrated Technology
 * Main JavaScript - Premium Interactions
 */

// ===== IMMEDIATE SCROLL TO TOP (BEFORE ANYTHING RENDERS) =====
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    
    // Scroll to top when clicking Home link
    const homeLinks = document.querySelectorAll('a[href="index.html"], a[href="/"]');
    homeLinks.forEach(link => {
        if (link.textContent.includes('Home')) {
            link.addEventListener('click', (e) => {
                if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        }
    });
});

function initializeApp() {
    // Core Features
    initCustomCursor();
    initScrollProgress();
    initLoadingScreen();
    initStickyHeader();
    initMobileMenu();
    initSearchModal();
    initCertLightbox();
    initScrollAnimations();
    initCounters();
    initHeroCounters(); // Animated hero stats
    initTextSlideAnimations(); // Text slide from left/right
    init3DCardTilt();
    initTestimonialCarousel();
    initBackToTop();
    initCookieConsent();
    initParallax();
    initSmoothScroll();
    initFormValidation();
    initHorizontalScrollProjects();
    initRotatingText(); // Hero text rotation
    
    console.log('🚀 SHABAKAH - All systems initialized');
}

// ===== ROTATING TEXT ANIMATION =====
function initRotatingText() {
    const words = document.querySelectorAll('.rotate-word');
    if (words.length === 0) return;
    
    let currentIndex = 0;
    
    setInterval(() => {
        words[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % words.length;
        words[currentIndex].classList.add('active');
    }, 2500);
}

// ===== TEXT SLIDE ANIMATIONS =====
function initTextSlideAnimations() {
    const textElements = document.querySelectorAll('.text-animate');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    textElements.forEach(el => observer.observe(el));
}

// ===== TEXT SLIDE ANIMATIONS =====
function initTextSlideAnimations() {
    // Auto-add animation classes to headings and paragraphs
    const selectors = 'h1, h2, h3, h4, p, .service-card h3, .service-card p, .why-card h3, .why-card p, .stat-label, .iot-hero-title, .iot-hero-subtitle';
    const textElements = document.querySelectorAll(selectors);
    
    let fromLeft = true;
    
    textElements.forEach((el, index) => {
        // Skip hero section and already animated elements, but include IOT hero
        if ((el.closest('.hero-section') && !el.closest('.iot-hero')) || el.classList.contains('animate-fade-up')) return;
        
        // Add animation class
        el.classList.add('text-animate');
        if (!fromLeft) {
            el.classList.add('from-right');
        }
        
        // Alternate direction
        fromLeft = !fromLeft;
    });
    
    // Observe and trigger animations
    const animatedElements = document.querySelectorAll('.text-animate');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => observer.observe(el));
}

// ===== HERO ANIMATED COUNTERS =====
function initHeroCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target], .iot-stat-number[data-target], .iot-stat-number span[data-target]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseFloat(counter.getAttribute('data-target'));
                const suffix = counter.getAttribute('data-suffix') || '';
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        counter.textContent = (target.toString().includes('.') ? target.toFixed(2) : target) + suffix;
                        clearInterval(timer);
                    } else {
                        counter.textContent = target.toString().includes('.') ? current.toFixed(2) : Math.floor(current);
                    }
                }, 16);
                
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

// ===== CUSTOM CURSOR =====
function initCustomCursor() {
    if (!('ontouchstart' in window)) {
        const cursor = document.querySelector('.custom-cursor');
        const cursorDot = document.querySelector('.custom-cursor-dot');
        
        if (!cursor || !cursorDot) return;
        
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        let dotX = 0, dotY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        // Smooth cursor follow
        function animateCursor() {
            // Cursor circle (slower)
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            
            // Cursor dot (faster)
            dotX += (mouseX - dotX) * 0.3;
            dotY += (mouseY - dotY) * 0.3;
            cursorDot.style.left = dotX + 'px';
            cursorDot.style.top = dotY + 'px';
            
            requestAnimationFrame(animateCursor);
        }
        
        animateCursor();
        
        // Scale on interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .service-card, .why-card');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorDot.style.transform = 'translate(-50%, -50%) scale(0)';
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });
    }
}

// ===== SCROLL PROGRESS BAR =====
function initScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress');
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// ===== LOADING SCREEN =====
function initLoadingScreen() {
    const loadingScreen = document.querySelector('.loading-screen');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 1000);
    });
}

// ===== STICKY HEADER =====
function initStickyHeader() {
    const header = document.getElementById('header');
    if (!header) return;

    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        if (document.body.classList.contains('menu-open') ||
            document.documentElement.classList.contains('menu-open')) {
            header.classList.remove('header-hidden');
            return;
        }

        const currentScroll = window.scrollY;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide on scroll down, show on scroll up (top offset — avoids breaking fixed mobile menu)
        if (currentScroll > lastScroll && currentScroll > 200) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }
        
        lastScroll = currentScroll;
    });
}

// ===== MOBILE MENU =====
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const header = document.getElementById('header');
    const MOBILE_NAV_BP = 1102;

    if (!menuToggle || !navMenu) return;

    const navWrapper = navMenu.closest('.nav-wrapper');
    const navActions = navWrapper?.querySelector('.nav-actions');

    let backdrop = document.querySelector('.mobile-nav-backdrop');
    if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.className = 'mobile-nav-backdrop';
        backdrop.setAttribute('aria-hidden', 'true');
        document.body.appendChild(backdrop);
    }

    if (!menuToggle.getAttribute('aria-label')) {
        menuToggle.setAttribute('aria-label', 'Toggle menu');
    }
    menuToggle.setAttribute('type', 'button');
    menuToggle.setAttribute('aria-controls', 'navMenu');
    menuToggle.setAttribute('aria-expanded', 'false');
    navMenu.setAttribute('aria-label', 'Main navigation');

    function setScrollLock(locked) {
        document.documentElement.classList.toggle('menu-open', locked);
        document.body.classList.toggle('menu-open', locked);
    }

    function restoreMenuToHeader() {
        navMenu.classList.remove('nav-menu--mobile-portal', 'active');
        if (!navWrapper) return;
        if (navActions && navActions.parentNode === navWrapper) {
            navWrapper.insertBefore(navMenu, navActions);
        } else {
            navWrapper.appendChild(navMenu);
        }
    }

    function portalMenuToBody() {
        navMenu.classList.add('nav-menu--mobile-portal');
        document.body.appendChild(navMenu);
    }

    function closeMenu() {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        backdrop.classList.remove('active');
        setScrollLock(false);
        restoreMenuToHeader();
        menuToggle.setAttribute('aria-expanded', 'false');
        backdrop.setAttribute('aria-hidden', 'true');
    }

    function openMenu() {
        const searchModal = document.getElementById('searchModal');
        if (searchModal?.classList.contains('active')) {
            searchModal.classList.remove('active');
            document.body.style.overflow = '';
        }

        header?.classList.remove('header-hidden');
        portalMenuToBody();
        navMenu.scrollTop = 0;
        menuToggle.classList.add('active');
        navMenu.classList.add('active');
        backdrop.classList.add('active');
        setScrollLock(true);
        menuToggle.setAttribute('aria-expanded', 'true');
        backdrop.setAttribute('aria-hidden', 'false');
    }

    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        if (navMenu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    backdrop.addEventListener('click', closeMenu);

    navMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => closeMenu());
    });

    document.addEventListener('click', (e) => {
        if (!navMenu.classList.contains('active')) return;
        if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMenu();
            menuToggle.focus();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > MOBILE_NAV_BP && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });
}

// ===== SEARCH MODAL =====
function initSearchModal() {
    const searchBtn = document.getElementById('searchBtn');
    const searchModal = document.getElementById('searchModal');
    const searchClose = document.getElementById('searchClose');
    
    if (!searchBtn || !searchModal) return;
    
    searchBtn.addEventListener('click', () => {
        searchModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    searchClose?.addEventListener('click', () => {
        searchModal.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Close on overlay click
    searchModal.querySelector('.search-overlay')?.addEventListener('click', () => {
        searchModal.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchModal.classList.contains('active')) {
            searchModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ===== CERTIFICATE LIGHTBOX (home page) =====
function initCertLightbox() {
    const lightbox = document.getElementById('certLightbox');
    const lightboxImg = document.getElementById('certLightboxImg');
    const lightboxCaption = document.getElementById('certLightboxCaption');
    const closeBtn = document.getElementById('certLightboxClose');
    const certItems = document.querySelectorAll('.cert-item--lightbox');

    if (!lightbox || !lightboxImg || certItems.length === 0) return;

    let lastFocused = null;

    function openLightbox(src, alt) {
        lastFocused = document.activeElement;
        lightboxImg.src = src;
        lightboxImg.alt = alt || 'Certificate';
        if (lightboxCaption) lightboxCaption.textContent = alt || '';
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        closeBtn?.focus();
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        lightboxImg.src = '';
        if (lastFocused && typeof lastFocused.focus === 'function') {
            lastFocused.focus();
        }
    }

    certItems.forEach(item => {
        const img = item.querySelector('.cert-item__img');
        if (!img) return;

        item.setAttribute('role', 'button');
        item.setAttribute('tabindex', '0');
        item.setAttribute('aria-label', `View ${img.alt || 'certificate'} full size`);

        const openFromItem = () => openLightbox(img.src, img.alt);

        item.addEventListener('click', openFromItem);
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openFromItem();
            }
        });
    });

    closeBtn?.addEventListener('click', closeLightbox);
    lightbox.querySelectorAll('[data-cert-lightbox-close]').forEach(el => {
        el.addEventListener('click', closeLightbox);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements with reveal class
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    // Add reveal class to sections
    document.querySelectorAll('.why-card, .service-card, .stat-box, .testimonial-card').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

// ===== ANIMATED COUNTERS =====
function initCounters() {
    const counters = document.querySelectorAll('.stat-number, .stat-value');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const suffix = counter.getAttribute('data-suffix') || '';
                
                if (target) {
                    animateCounter(counter, target, suffix);
                }
                
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target, suffix = '') {
    let current = 0;
    const increment = target / 50; // 50 frames
    const duration = 2000; // 2 seconds
    const stepTime = duration / 50;
    
    const timer = setInterval(() => {
        current += increment;
        
        if (current >= target) {
            element.textContent = target.toLocaleString() + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, stepTime);
}

// ===== 3D CARD TILT =====
function init3DCardTilt() {
    const cards = document.querySelectorAll('[data-tilt]');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', handleTilt);
        card.addEventListener('mouseleave', resetTilt);
    });
}

function handleTilt(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * 5; // Max 5deg
    const rotateY = ((centerX - x) / centerX) * 5;
    
    card.style.setProperty('--tilt-x', `${rotateX}deg`);
    card.style.setProperty('--tilt-y', `${rotateY}deg`);
}

function resetTilt(e) {
    const card = e.currentTarget;
    card.style.setProperty('--tilt-x', '0deg');
    card.style.setProperty('--tilt-y', '0deg');
}

// ===== TESTIMONIAL CAROUSEL (MODERN VERSION) =====
function initTestimonialCarousel() {
    // Try modern testimonial carousel first
    const modernStack = document.getElementById('testimonialStack');
    const modernCards = document.querySelectorAll('.testimonial-card-modern');
    const modernDots = document.querySelectorAll('#testimonialDotsModern .testimonial-dot');
    const modernPrevBtn = document.getElementById('prevTestimonialModern');
    const modernNextBtn = document.getElementById('nextTestimonialModern');
    const progressBar = document.getElementById('testimonialProgressBar');
    
    if (modernCards.length > 0) {
        // Modern Testimonial Carousel
        let currentIndex = 0;
        let autoPlayInterval;
        let progressInterval;
        const autoPlayDelay = 5000;
        
        function showTestimonial(index) {
            currentIndex = index;
            
            modernCards.forEach((card, i) => {
                card.classList.remove('active', 'prev', 'next');
                if (i === index) {
                    card.classList.add('active');
                } else if (i === (index - 1 + modernCards.length) % modernCards.length) {
                    card.classList.add('prev');
                } else if (i === (index + 1) % modernCards.length) {
                    card.classList.add('next');
                }
            });
            
            modernDots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            
            // Reset progress bar
            if (progressBar) {
                progressBar.style.animation = 'none';
                progressBar.offsetHeight; // Trigger reflow
                progressBar.style.animation = 'progressFill 5s linear infinite';
            }
        }
        
        function nextTestimonial() {
            showTestimonial((currentIndex + 1) % modernCards.length);
        }
        
        function prevTestimonial() {
            showTestimonial((currentIndex - 1 + modernCards.length) % modernCards.length);
        }
        
        function startAutoPlay() {
            stopAutoPlay();
            autoPlayInterval = setInterval(nextTestimonial, autoPlayDelay);
        }
        
        function stopAutoPlay() {
            if (autoPlayInterval) clearInterval(autoPlayInterval);
        }
        
        // Event Listeners
        if (modernNextBtn) modernNextBtn.addEventListener('click', () => {
            nextTestimonial();
            startAutoPlay(); // Reset timer
        });
        
        if (modernPrevBtn) modernPrevBtn.addEventListener('click', () => {
            prevTestimonial();
            startAutoPlay(); // Reset timer
        });
        
        modernDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showTestimonial(index);
                startAutoPlay(); // Reset timer
            });
        });
        
        // Pause on hover
        if (modernStack) {
            modernStack.addEventListener('mouseenter', stopAutoPlay);
            modernStack.addEventListener('mouseleave', startAutoPlay);
        }
        
        // Start auto-play
        showTestimonial(0);
        startAutoPlay();
        
        return; // Exit early for modern version
    }
    
    // Fallback to legacy testimonial carousel
    const testimonials = document.querySelectorAll('.testimonial-card');
    const dotsContainer = document.getElementById('testimonialDots');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');
    
    if (!testimonials.length || !dotsContainer) return;
    
    let currentIndex = 0;
    let isDragging = false;
    let startX = 0;
    let currentX = 0;
    
    // Create dots
    testimonials.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = dotsContainer.querySelectorAll('.carousel-dot');
    
    function goToSlide(index) {
        // Animate outgoing card
        const currentCard = testimonials[currentIndex];
        currentCard.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
        currentCard.style.transform = 'translateX(-150%) translateY(0) scale(0.8) rotateZ(-10deg)';
        currentCard.style.opacity = '0';
        
        setTimeout(() => {
            currentIndex = index;
            updateCardStack();
        }, 300);
    }
    
    function nextSlide() {
        goToSlide((currentIndex + 1) % testimonials.length);
    }
    
    function prevSlide() {
        goToSlide((currentIndex - 1 + testimonials.length) % testimonials.length);
    }
    
    function updateCardStack() {
        testimonials.forEach((card, index) => {
            const offset = (index - currentIndex + testimonials.length) % testimonials.length;
            
            card.style.transition = 'all 0.4s ease';
            
            if (offset === 0) {
                // Current card - front (fully visible)
                card.style.display = 'block';
                card.style.zIndex = '3';
                card.style.transform = 'translateX(-50%) translateY(0) scale(1)';
                card.style.opacity = '1';
                card.style.pointerEvents = 'auto';
            } else {
                // Hide all other cards
                card.style.display = 'none';
                card.style.zIndex = '0';
                card.style.opacity = '0';
                card.style.pointerEvents = 'none';
            }
        });
        
        // Update dots
        dots.forEach((d, i) => {
            d.classList.toggle('active', i === currentIndex);
        });
    }
    
    // Touch/Mouse drag to swipe
    testimonials.forEach(card => {
        card.addEventListener('mousedown', dragStart);
        card.addEventListener('touchstart', dragStart);
        card.addEventListener('mousemove', drag);
        card.addEventListener('touchmove', drag);
        card.addEventListener('mouseup', dragEnd);
        card.addEventListener('touchend', dragEnd);
        card.addEventListener('mouseleave', dragEnd);
    });
    
    function dragStart(e) {
        if (e.target.closest('.testimonial-card') !== testimonials[currentIndex]) return;
        isDragging = true;
        startX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
        testimonials[currentIndex].style.transition = 'none';
    }
    
    function drag(e) {
        if (!isDragging) return;
        e.preventDefault();
        currentX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
        const deltaX = currentX - startX;
        const rotation = deltaX * 0.05;
        
        testimonials[currentIndex].style.transform = 
            `translateX(calc(-50% + ${deltaX}px)) translateY(0) scale(1) rotateZ(${rotation}deg)`;
    }
    
    function dragEnd() {
        if (!isDragging) return;
        isDragging = false;
        
        const deltaX = currentX - startX;
        
        if (Math.abs(deltaX) > 100) {
            // Swipe detected
            if (deltaX > 0) {
                prevSlide();
            } else {
                nextSlide();
            }
        } else {
            // Reset position
            testimonials[currentIndex].style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
            testimonials[currentIndex].style.transform = 'translateX(-50%) translateY(0) scale(1)';
        }
    }
    
    // Initialize stack
    updateCardStack();
    
    prevBtn?.addEventListener('click', prevSlide);
    nextBtn?.addEventListener('click', nextSlide);
    
    // Auto-play with pause on hover
    let autoPlayInterval = setInterval(nextSlide, 6000);
    
    testimonials.forEach(card => {
        card.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
        card.addEventListener('mouseleave', () => {
            autoPlayInterval = setInterval(nextSlide, 6000);
        });
    });
}

// ===== BACK TO TOP =====
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== COOKIE CONSENT =====
function initCookieConsent() {
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptBtn = document.getElementById('acceptCookies');
    
    if (!cookieConsent) return;
    
    // Check if already accepted
    if (!localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => {
            cookieConsent.classList.add('visible');
        }, 2000);
    }
    
    acceptBtn?.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieConsent.classList.remove('visible');
    });
}

// ===== PARALLAX EFFECT =====
function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    
    window.addEventListener('scroll', () => {
        parallaxElements.forEach(el => {
            const scrolled = window.scrollY;
            const rate = scrolled * 0.3;
            el.style.transform = `translateY(${rate}px)`;
        });
    });
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== FORM VALIDATION =====
function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            console.log('Form submitted:', data);
            
            // Show success message
            showNotification('Thank you! We will get back to you soon.', 'success');
            
            // Reset form
            form.reset();
        });
    });
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification glass-effect notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 0.75rem;
        color: white;
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== UTILITY FUNCTIONS =====

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// ===== ANALYTICS (PLACEHOLDER) =====
function trackEvent(category, action, label) {
    console.log('Analytics:', { category, action, label });
    
    // Integrate with Google Analytics or other analytics service
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}

// Track button clicks
document.addEventListener('click', (e) => {
    if (e.target.matches('.btn')) {
        const btnText = e.target.textContent.trim();
        trackEvent('Button', 'Click', btnText);
    }
});

// ===== PERFORMANCE MONITORING =====
if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            console.log('Performance:', entry.name, entry.startTime);
        }
    });
    
    observer.observe({ entryTypes: ['navigation', 'paint'] });
}

// ===== HORIZONTAL SCROLL PROJECTS (TRUE SCROLL-JACKING) =====
function initHorizontalScrollProjects() {
    const wrapper = document.querySelector('.horizontal-projects-wrapper');
    const container = document.querySelector('.horizontal-scroll-container');
    const dots = document.querySelectorAll('.scroll-dot');
    const progressFill = document.querySelector('.horizontal-progress-fill');
    
    if (!wrapper || !container) return;
    
    // Disable on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
        container.style.scrollBehavior = 'smooth';
        return;
    }
    
    let isActive = false; // Section is perfectly positioned
    let isSnapping = false; // Currently auto-scrolling to position
    let animationFrame = null;
    let snapTimeout = null;
    
    // Auto-snap section to top when it enters 80% viewport
    function autoSnapToTop() {
        if (isSnapping) return;
        
        const rect = wrapper.getBoundingClientRect();
        
        // If section is 80%+ visible but not at top, snap it
        if (rect.top > 0 && rect.top < window.innerHeight * 0.2) {
            isSnapping = true;
            
            const scrollTarget = window.scrollY + rect.top;
            const startY = window.scrollY;
            const distance = scrollTarget - startY;
            const duration = 400;
            let startTime = null;
            
            function snapAnimate(currentTime) {
                if (!startTime) startTime = currentTime;
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeProgress = 1 - Math.pow(1 - progress, 3);
                
                window.scrollTo(0, startY + (distance * easeProgress));
                
                if (progress < 1) {
                    requestAnimationFrame(snapAnimate);
                } else {
                    isSnapping = false;
                    isActive = true; // Enable horizontal scroll AFTER positioned
                }
            }
            
            requestAnimationFrame(snapAnimate);
        }
    }
    
    // Check section position
    const observer = new IntersectionObserver(
        ([entry]) => {
            const rect = wrapper.getBoundingClientRect();
            
            // Perfectly positioned at top
            if (Math.abs(rect.top) < 5) {
                isActive = true;
                isSnapping = false;
            }
            // Entering viewport - trigger auto-snap
            else if (entry.isIntersecting && rect.top < window.innerHeight * 0.8) {
                autoSnapToTop();
            }
            // Completely out of view
            else if (!entry.isIntersecting) {
                isActive = false;
                isSnapping = false;
            }
        },
        { threshold: [0, 0.2, 0.5, 0.8, 1] }
    );
    observer.observe(wrapper);
    
    // Snap to nearest card
    function snapToCard() {
        const cardWidth = window.innerWidth;
        const currentScroll = container.scrollLeft;
        const cardIndex = Math.round(currentScroll / cardWidth);
        const targetScroll = cardIndex * cardWidth;
        
        const startScroll = currentScroll;
        const distance = targetScroll - startScroll;
        const duration = 200;
        let startTime = null;
        
        function animate(currentTime) {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            
            container.scrollLeft = startScroll + (distance * easeProgress);
            
            if (progress < 1) requestAnimationFrame(animate);
        }
        
        requestAnimationFrame(animate);
    }
    
    // Update visual feedback
    function updateVisualFeedback() {
        const maxScroll = container.scrollWidth - container.clientWidth;
        const currentScroll = container.scrollLeft;
        const progress = maxScroll > 0 ? currentScroll / maxScroll : 0;
        
        if (progressFill) progressFill.style.width = (progress * 100) + '%';
        
        const activeIndex = Math.min(2, Math.floor(progress * 3));
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeIndex);
        });
        
        wrapper.classList.toggle('scrolling', progress > 0 && progress < 1);
        
        // Toggle class to hide gradient hint at end
        wrapper.classList.toggle('at-end', progress >= 0.95);
    }
    
    // Wheel event handler
    function handleWheel(e) {
        if (!isActive) return; // Section not sticky yet
        
        const maxScroll = container.scrollWidth - container.clientWidth;
        const currentScroll = container.scrollLeft;
        const delta = e.deltaY;
        
        if (maxScroll <= 0) return;
        
        // Precise boundary detection
        const atFirstCard = currentScroll <= 1;
        const atLastCard = currentScroll >= maxScroll - 1;
        
        // ESCAPE RULES (only at exact boundaries):
        // 1. At FIRST card + scroll UP (delta < 0) → escape to hero
        if (atFirstCard && delta < 0) {
            return; // Allow escape UP to hero
        }
        
        // 2. At LAST card + scroll DOWN (delta > 0) → escape to next section
        if (atLastCard && delta > 0) {
            return; // Allow escape DOWN to next section
        }
        
        // HORIZONTAL SCROLL (all other cases):
        // - Card 2/3 + scroll UP → scroll LEFT (back through cards)
        // - Card 1/2 + scroll DOWN → scroll RIGHT (forward through cards)
        e.preventDefault();
        
        if (snapTimeout) clearTimeout(snapTimeout);
        if (animationFrame) cancelAnimationFrame(animationFrame);
        
        const scrollAmount = delta * 2;
        const newScrollLeft = Math.max(0, Math.min(maxScroll, currentScroll + scrollAmount));
        
        animationFrame = requestAnimationFrame(() => {
            container.scrollLeft = newScrollLeft;
            updateVisualFeedback();
        });
        
        snapTimeout = setTimeout(snapToCard, 100);
    }
    
    // Attach events
    wrapper.addEventListener('wheel', handleWheel, { passive: false });
    
    container.addEventListener('scroll', () => {
        if (!animationFrame) {
            animationFrame = requestAnimationFrame(() => {
                updateVisualFeedback();
                animationFrame = null;
            });
        }
    }, { passive: true });
    
    updateVisualFeedback();
}

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
    // Send to error tracking service
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    // Send to error tracking service
});

// ===== EXPORT FOR MODULE USE =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showNotification,
        trackEvent,
        debounce,
        throttle,
        isInViewport
    };
}
