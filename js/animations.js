// Animation utilities
export function initializeAnimations() {
    initializeScrollAnimations();
    initializeCounterAnimations();
    initializeProgressBars();
}

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Stagger animation for children
                const children = entry.target.querySelectorAll('.stagger-child');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate-in');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe elements with animation classes
    document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .fade-in, .scale-in').forEach(el => {
        observer.observe(el);
    });
}

function initializeCounterAnimations() {
    const counters = document.querySelectorAll('.counter');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps
                
                let current = 0;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    counter.textContent = Math.floor(current);
                }, 16);
                
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function initializeProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const progress = progressBar.querySelector('.progress');
                const percentage = progressBar.getAttribute('data-percentage');
                
                if (progress) {
                    setTimeout(() => {
                        progress.style.width = percentage + '%';
                    }, 200);
                }
                
                progressObserver.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });
}

// Utility functions for animations
export function fadeIn(element, duration = 300) {
    element.style.opacity = '0';
    element.style.display = 'block';
    
    const start = performance.now();
    
    function animate(currentTime) {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        
        element.style.opacity = progress;
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }
    
    requestAnimationFrame(animate);
}

export function fadeOut(element, duration = 300) {
    const start = performance.now();
    const startOpacity = parseFloat(getComputedStyle(element).opacity);
    
    function animate(currentTime) {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        
        element.style.opacity = startOpacity * (1 - progress);
        
        if (progress >= 1) {
            element.style.display = 'none';
        } else {
            requestAnimationFrame(animate);
        }
    }
    
    requestAnimationFrame(animate);
}

export function slideUp(element, duration = 300) {
    element.style.height = element.offsetHeight + 'px';
    element.style.transition = `height ${duration}ms ease-out`;
    element.style.overflow = 'hidden';
    
    setTimeout(() => {
        element.style.height = '0px';
    }, 10);
    
    setTimeout(() => {
        element.style.display = 'none';
        element.style.height = '';
        element.style.transition = '';
        element.style.overflow = '';
    }, duration);
}

export function slideDown(element, duration = 300) {
    element.style.display = 'block';
    const height = element.offsetHeight;
    element.style.height = '0px';
    element.style.transition = `height ${duration}ms ease-out`;
    element.style.overflow = 'hidden';
    
    setTimeout(() => {
        element.style.height = height + 'px';
    }, 10);
    
    setTimeout(() => {
        element.style.height = '';
        element.style.transition = '';
        element.style.overflow = '';
    }, duration);
}
