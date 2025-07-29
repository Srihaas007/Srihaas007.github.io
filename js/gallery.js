// Enhanced Photo Gallery Script
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize lightbox functionality
    const photoItems = document.querySelectorAll('.photo-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    
    let currentImageIndex = 0;
    let images = [];
    
    // Collect all images
    photoItems.forEach((item, index) => {
        const img = item.querySelector('img');
        if (img) {
            images.push({
                src: img.src,
                alt: img.alt || `Photo ${index + 1}`,
                index: index
            });
            
            // Add click listener to open lightbox
            item.addEventListener('click', () => {
                openLightbox(index);
            });
        }
    });
    
    function openLightbox(index) {
        if (lightbox && lightboxImg && images[index]) {
            currentImageIndex = index;
            lightboxImg.src = images[index].src;
            lightboxImg.alt = images[index].alt;
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            
            // Add fade-in animation
            setTimeout(() => {
                lightbox.style.opacity = '1';
            }, 10);
        }
    }
    
    function closeLightbox() {
        if (lightbox) {
            lightbox.style.opacity = '0';
            setTimeout(() => {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 300);
        }
    }
    
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        if (lightboxImg && images[currentImageIndex]) {
            lightboxImg.src = images[currentImageIndex].src;
            lightboxImg.alt = images[currentImageIndex].alt;
        }
    }
    
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        if (lightboxImg && images[currentImageIndex]) {
            lightboxImg.src = images[currentImageIndex].src;
            lightboxImg.alt = images[currentImageIndex].alt;
        }
    }
    
    // Event listeners
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    
    if (lightboxNext) {
        lightboxNext.addEventListener('click', nextImage);
    }
    
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', prevImage);
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox && lightbox.style.display === 'flex') {
            switch(e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowRight':
                    nextImage();
                    break;
                case 'ArrowLeft':
                    prevImage();
                    break;
            }
        }
    });
    
    // Close lightbox when clicking outside image
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
    
    // Add loading animation for images
    const allImages = document.querySelectorAll('.photo-item img, .album-preview img');
    allImages.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial opacity for loading effect
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
    
    // Lazy loading for better performance
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        // Observe lazy-loaded images
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    console.log('Enhanced photo gallery initialized with', images.length, 'images');
});
