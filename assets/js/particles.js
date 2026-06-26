/**
 * Particles Animation System
 * Creates animated particle background for hero sections
 */

class ParticlesAnimation {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;
        
        // Configuration
        this.config = {
            particleCount: options.particleCount || 50,
            particleColor: options.particleColor || '#3B82F6',
            particleSize: options.particleSize || 2,
            connectionDistance: options.connectionDistance || 150,
            speed: options.speed || 0.5,
            interactive: options.interactive !== false
        };
        
        // Canvas setup
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.container.appendChild(this.canvas);
        
        // Particles array
        this.particles = [];
        
        // Mouse position
        this.mouse = { x: null, y: null, radius: 150 };
        
        // Initialize
        this.init();
    }
    
    init() {
        // Set canvas size
        this.resizeCanvas();
        
        // Create particles
        this.createParticles();
        
        // Event listeners
        window.addEventListener('resize', () => this.resizeCanvas());
        
        if (this.config.interactive) {
            this.container.addEventListener('mousemove', (e) => this.handleMouseMove(e));
            this.container.addEventListener('mouseleave', () => this.handleMouseLeave());
        }
        
        // Start animation
        this.animate();
    }
    
    resizeCanvas() {
        this.canvas.width = this.container.offsetWidth;
        this.canvas.height = this.container.offsetHeight;
        
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.pointerEvents = 'none';
    }
    
    createParticles() {
        this.particles = [];
        
        for (let i = 0; i < this.config.particleCount; i++) {
            this.particles.push(new Particle(
                Math.random() * this.canvas.width,
                Math.random() * this.canvas.height,
                (Math.random() - 0.5) * this.config.speed,
                (Math.random() - 0.5) * this.config.speed,
                this.config.particleSize,
                this.config.particleColor,
                this.canvas
            ));
        }
    }
    
    handleMouseMove(e) {
        const rect = this.container.getBoundingClientRect();
        this.mouse.x = e.clientX - rect.left;
        this.mouse.y = e.clientY - rect.top;
    }
    
    handleMouseLeave() {
        this.mouse.x = null;
        this.mouse.y = null;
    }
    
    connectParticles() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < this.config.connectionDistance) {
                    const opacity = 1 - (distance / this.config.connectionDistance);
                    
                    this.ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.2})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }
    }
    
    animate() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw particles
        this.particles.forEach(particle => {
            particle.update(this.mouse);
            particle.draw(this.ctx);
        });
        
        // Connect particles
        this.connectParticles();
        
        // Continue animation
        requestAnimationFrame(() => this.animate());
    }
}

class Particle {
    constructor(x, y, vx, vy, size, color, canvas) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.size = size;
        this.color = color;
        this.canvas = canvas;
        this.baseSize = size;
    }
    
    update(mouse) {
        // Bounce off walls
        if (this.x > this.canvas.width || this.x < 0) {
            this.vx = -this.vx;
        }
        if (this.y > this.canvas.height || this.y < 0) {
            this.vy = -this.vy;
        }
        
        // Move particle
        this.x += this.vx;
        this.y += this.vy;
        
        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < mouse.radius) {
                // Repel from mouse
                const force = (mouse.radius - distance) / mouse.radius;
                const angle = Math.atan2(dy, dx);
                this.x -= Math.cos(angle) * force * 5;
                this.y -= Math.sin(angle) * force * 5;
                
                // Increase size near mouse
                this.size = this.baseSize * (1 + force);
            } else {
                // Return to base size
                this.size = this.baseSize;
            }
        } else {
            this.size = this.baseSize;
        }
    }
    
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
    }
}

// Initialize particles when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Hero section particles
    if (document.getElementById('particles')) {
        new ParticlesAnimation('particles', {
            particleCount: 80,
            particleColor: '#3B82F6',
            particleSize: 2,
            connectionDistance: 120,
            speed: 0.3,
            interactive: true
        });
    }
    
    // Additional particle backgrounds can be initialized here
    const particleContainers = document.querySelectorAll('[data-particles]');
    particleContainers.forEach(container => {
        const config = {
            particleCount: parseInt(container.dataset.particleCount) || 50,
            particleColor: container.dataset.particleColor || '#3B82F6',
            particleSize: parseInt(container.dataset.particleSize) || 2,
            connectionDistance: parseInt(container.dataset.connectionDistance) || 150,
            speed: parseFloat(container.dataset.speed) || 0.5,
            interactive: container.dataset.interactive !== 'false'
        };
        
        new ParticlesAnimation(container.id, config);
    });
});

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ParticlesAnimation;
}
