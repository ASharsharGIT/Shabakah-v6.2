/**
 * Animation Controllers
 * Additional animation utilities and effects
 */

// Scroll-triggered animations with Intersection Observer
class ScrollAnimator {
    constructor(options = {}) {
        this.options = {
            threshold: options.threshold || 0.1,
            rootMargin: options.rootMargin || '0px 0px -100px 0px',
            animationClass: options.animationClass || 'active'
        };
        
        this.observer = new IntersectionObserver(
            (entries) => this.handleIntersection(entries),
            {
                threshold: this.options.threshold,
                rootMargin: this.options.rootMargin
            }
        );
        
        this.init();
    }
    
    init() {
        // Observe all elements with data-animate attribute
        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach(el => this.observer.observe(el));
    }
    
    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animation = entry.target.dataset.animate;
                const delay = entry.target.dataset.delay || 0;
                
                setTimeout(() => {
                    entry.target.classList.add(this.options.animationClass);
                    if (animation) {
                        entry.target.style.animation = animation;
                    }
                }, delay);
                
                // Unobserve after animation
                if (!entry.target.dataset.repeat) {
                    this.observer.unobserve(entry.target);
                }
            }
        });
    }
}

// Text typing effect
class TypeWriter {
    constructor(element, options = {}) {
        this.element = element;
        this.text = element.textContent;
        this.speed = options.speed || 50;
        this.delay = options.delay || 0;
        this.cursor = options.cursor !== false;
        
        this.element.textContent = '';
        
        setTimeout(() => this.type(), this.delay);
    }
    
    type(index = 0) {
        if (index < this.text.length) {
            this.element.textContent += this.text.charAt(index);
            setTimeout(() => this.type(index + 1), this.speed);
        } else if (this.cursor) {
            this.element.classList.add('typing-cursor');
        }
    }
}

// Number counter with easing
class NumberCounter {
    constructor(element, options = {}) {
        this.element = element;
        this.target = parseInt(element.dataset.target || element.textContent);
        this.duration = options.duration || 2000;
        this.suffix = options.suffix || '';
        this.prefix = options.prefix || '';
        this.separator = options.separator || ',';
        
        this.element.textContent = '0';
    }
    
    start() {
        const startTime = performance.now();
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / this.duration, 1);
            
            // Easing function (easeOutExpo)
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const current = Math.floor(eased * this.target);
            
            this.element.textContent = this.formatNumber(current);
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                this.element.textContent = this.formatNumber(this.target);
            }
        };
        
        requestAnimationFrame(animate);
    }
    
    formatNumber(num) {
        const formatted = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.separator);
        return this.prefix + formatted + this.suffix;
    }
}

// Progress bar animation
class ProgressBar {
    constructor(element, options = {}) {
        this.element = element;
        this.target = parseInt(element.dataset.target || 100);
        this.duration = options.duration || 1500;
        
        this.element.style.width = '0%';
    }
    
    start() {
        const startTime = performance.now();
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / this.duration, 1);
            
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const current = eased * this.target;
            
            this.element.style.width = current + '%';
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    }
}

// Magnetic button effect
class MagneticButton {
    constructor(element, options = {}) {
        this.element = element;
        this.strength = options.strength || 20;
        
        this.element.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        this.element.addEventListener('mouseleave', () => this.handleMouseLeave());
    }
    
    handleMouseMove(e) {
        const rect = this.element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const moveX = (x / rect.width) * this.strength;
        const moveY = (y / rect.height) * this.strength;
        
        this.element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
    
    handleMouseLeave() {
        this.element.style.transform = 'translate(0, 0)';
    }
}

// Parallax scroll effect
class ParallaxScroll {
    constructor(element, options = {}) {
        this.element = element;
        this.speed = options.speed || 0.5;
        
        window.addEventListener('scroll', () => this.update());
        this.update();
    }
    
    update() {
        const scrolled = window.scrollY;
        const offset = scrolled * this.speed;
        this.element.style.transform = `translateY(${offset}px)`;
    }
}

// Image reveal on scroll
class ImageReveal {
    constructor(element, options = {}) {
        this.element = element;
        this.direction = options.direction || 'left'; // left, right, top, bottom
        
        this.element.style.overflow = 'hidden';
        this.element.style.position = 'relative';
        
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #0A1628;
            z-index: 1;
        `;
        this.element.appendChild(overlay);
        
        this.overlay = overlay;
        this.setupObserver();
    }
    
    setupObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.reveal();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        observer.observe(this.element);
    }
    
    reveal() {
        const transforms = {
            left: 'translateX(-100%)',
            right: 'translateX(100%)',
            top: 'translateY(-100%)',
            bottom: 'translateY(100%)'
        };
        
        this.overlay.style.transition = 'transform 1s cubic-bezier(0.77, 0, 0.175, 1)';
        this.overlay.style.transform = transforms[this.direction];
        
        setTimeout(() => {
            this.overlay.remove();
        }, 1000);
    }
}

// Stagger animation for lists/grids
class StaggerAnimation {
    constructor(container, options = {}) {
        this.container = container;
        this.items = container.children;
        this.delay = options.delay || 100;
        this.animation = options.animation || 'fadeUp';
        
        this.setupObserver();
    }
    
    setupObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animate();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(this.container);
    }
    
    animate() {
        Array.from(this.items).forEach((item, index) => {
            setTimeout(() => {
                item.style.animation = `${this.animation} 0.6s ease-out forwards`;
            }, index * this.delay);
        });
    }
}

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize scroll animator
    new ScrollAnimator();
    
    // Initialize 2026 directional scroll animations
    initDirectionalScrollAnimations();
    
    // Initialize typing effect for specific elements
    document.querySelectorAll('[data-typewriter]').forEach(el => {
        new TypeWriter(el, {
            speed: parseInt(el.dataset.speed) || 50,
            delay: parseInt(el.dataset.delay) || 0
        });
    });
    
    // Initialize magnetic buttons
    document.querySelectorAll('[data-magnetic]').forEach(el => {
        new MagneticButton(el, {
            strength: parseInt(el.dataset.strength) || 20
        });
    });
    
    // Initialize parallax elements
    document.querySelectorAll('[data-parallax]').forEach(el => {
        new ParallaxScroll(el, {
            speed: parseFloat(el.dataset.speed) || 0.5
        });
    });
    
    // Initialize image reveals
    document.querySelectorAll('[data-reveal]').forEach(el => {
        new ImageReveal(el, {
            direction: el.dataset.direction || 'left'
        });
    });
    
    // Initialize stagger animations
    document.querySelectorAll('[data-stagger]').forEach(el => {
        new StaggerAnimation(el, {
            delay: parseInt(el.dataset.staggerDelay) || 100,
            animation: el.dataset.staggerAnimation || 'fadeUp'
        });
    });
});

/**
 * 2026 MODERN DIRECTIONAL SCROLL ANIMATIONS
 * Multi-directional scroll reveals with intersection observer
 */
function initDirectionalScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.scroll-animate-left, .scroll-animate-right, .scroll-animate-bottom, .scroll-animate-top');
    animatedElements.forEach(el => {
        observer.observe(el);
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('animate-in');
        }
    });
}

/**
 * Advanced Magnetic Card Effect for 2026
 * Cards follow cursor with smooth physics
 */
class MagneticCard {
    constructor(element, options = {}) {
        this.element = element;
        this.strength = options.strength || 15;
        this.smooth = options.smooth || 0.15;
        
        this.rect = null;
        this.currentX = 0;
        this.currentY = 0;
        this.targetX = 0;
        this.targetY = 0;
        this.rafId = null;
        
        this.element.addEventListener('mouseenter', (e) => this.handleMouseEnter(e));
        this.element.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        this.element.addEventListener('mouseleave', () => this.handleMouseLeave());
    }
    
    handleMouseEnter(e) {
        this.rect = this.element.getBoundingClientRect();
        if (!this.rafId) {
            this.animate();
        }
    }
    
    handleMouseMove(e) {
        const x = e.clientX - this.rect.left - this.rect.width / 2;
        const y = e.clientY - this.rect.top - this.rect.height / 2;
        
        this.targetX = (x / this.rect.width) * this.strength;
        this.targetY = (y / this.rect.height) * this.strength;
    }
    
    handleMouseLeave() {
        this.targetX = 0;
        this.targetY = 0;
    }
    
    animate() {
        this.currentX += (this.targetX - this.currentX) * this.smooth;
        this.currentY += (this.targetY - this.currentY) * this.smooth;
        
        this.element.style.transform = `translate3d(${this.currentX}px, ${this.currentY}px, 0) scale(1.02)`;
        
        // Continue animation if not at rest
        if (Math.abs(this.targetX - this.currentX) > 0.1 || Math.abs(this.targetY - this.currentY) > 0.1) {
            this.rafId = requestAnimationFrame(() => this.animate());
        } else if (this.targetX === 0 && this.targetY === 0) {
            this.element.style.transform = 'translate3d(0, 0, 0) scale(1)';
            this.rafId = null;
        } else {
            this.rafId = requestAnimationFrame(() => this.animate());
        }
    }
}

// Auto-initialize magnetic cards
document.addEventListener('DOMContentLoaded', () => {
    // Apply to all glass cards
    document.querySelectorAll('.glass-card, .service-card, .why-card').forEach(card => {
        new MagneticCard(card, { strength: 12, smooth: 0.15 });
    });
});

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ScrollAnimator,
        TypeWriter,
        NumberCounter,
        ProgressBar,
        MagneticButton,
        ParallaxScroll,
        ImageReveal,
        StaggerAnimation,
        MagneticCard
    };
}
