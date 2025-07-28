// Firebase Services
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getFirestore, collection, addDoc, getDocs, query, orderBy, limit, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js';
import firebaseConfig from './firebase-config.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Contact Form Handler
export class ContactFormHandler {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.submitBtn = this.form?.querySelector('.submit-btn');
        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', this.handleSubmit.bind(this));
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        if (!this.validateForm()) {
            return;
        }

        this.setLoadingState(true);

        try {
            const formData = this.getFormData();
            
            // Add to Firestore
            const docRef = await addDoc(collection(db, 'contact-messages'), {
                ...formData,
                timestamp: serverTimestamp(),
                userAgent: navigator.userAgent,
                referrer: document.referrer,
                ip: await this.getClientIP()
            });

            console.log('Document written with ID: ', docRef.id);
            this.showSuccessMessage();
            this.resetForm();
            
        } catch (error) {
            console.error('Error adding document: ', error);
            this.showErrorMessage('Failed to send message. Please try again.');
        } finally {
            this.setLoadingState(false);
        }
    }

    getFormData() {
        return {
            name: this.form.name.value.trim(),
            email: this.form.email.value.trim(),
            subject: this.form.subject.value.trim(),
            message: this.form.message.value.trim()
        };
    }

    validateForm() {
        const data = this.getFormData();
        
        if (!data.name || data.name.length < 2) {
            this.showErrorMessage('Please enter a valid name (at least 2 characters).');
            return false;
        }
        
        if (!this.isValidEmail(data.email)) {
            this.showErrorMessage('Please enter a valid email address.');
            return false;
        }
        
        if (!data.subject || data.subject.length < 3) {
            this.showErrorMessage('Please enter a subject (at least 3 characters).');
            return false;
        }
        
        if (!data.message || data.message.length < 10) {
            this.showErrorMessage('Please enter a message (at least 10 characters).');
            return false;
        }
        
        return true;
    }

    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    async getClientIP() {
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            return data.ip;
        } catch (error) {
            return 'Unknown';
        }
    }

    setLoadingState(isLoading) {
        if (this.submitBtn) {
            this.submitBtn.disabled = isLoading;
            const btnText = this.submitBtn.querySelector('.btn-text');
            const btnIcon = this.submitBtn.querySelector('i');
            
            if (isLoading) {
                btnText.textContent = 'Sending...';
                btnIcon.className = 'fas fa-spinner fa-spin';
            } else {
                btnText.textContent = 'Send Message';
                btnIcon.className = 'fas fa-paper-plane';
            }
        }
    }

    showSuccessMessage() {
        this.showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
    }

    showErrorMessage(message) {
        this.showNotification(message, 'error');
    }

    showNotification(message, type) {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.firebase-notification');
        existingNotifications.forEach(notif => notif.remove());

        // Create new notification
        const notification = document.createElement('div');
        notification.className = `firebase-notification firebase-notification--${type}`;
        notification.innerHTML = `
            <div class="firebase-notification__content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
                <span>${message}</span>
            </div>
            <button class="firebase-notification__close" onclick="this.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        `;

        document.body.appendChild(notification);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.classList.add('firebase-notification--fade-out');
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    resetForm() {
        this.form.reset();
        
        // Reset custom floating labels if they exist
        const formGroups = this.form.querySelectorAll('.form-group');
        formGroups.forEach(group => {
            group.classList.remove('form-group--focused');
        });
    }
}

// Portfolio Stats Tracker (Additional Firebase Feature)
export class PortfolioAnalytics {
    constructor() {
        this.sessionStartTime = Date.now();
        this.init();
    }

    init() {
        this.trackPageView();
        this.trackUserInteractions();
        this.trackSessionDuration();
    }

    async trackPageView() {
        try {
            await addDoc(collection(db, 'page-views'), {
                page: window.location.pathname,
                timestamp: serverTimestamp(),
                userAgent: navigator.userAgent,
                referrer: document.referrer,
                screenResolution: `${screen.width}x${screen.height}`,
                language: navigator.language
            });
        } catch (error) {
            console.error('Error tracking page view:', error);
        }
    }

    trackUserInteractions() {
        // Track project clicks
        document.addEventListener('click', async (e) => {
            if (e.target.closest('.project-card') || e.target.closest('.portfolio-item')) {
                const projectElement = e.target.closest('.project-card') || e.target.closest('.portfolio-item');
                const projectTitle = projectElement.querySelector('h3')?.textContent || 'Unknown Project';
                
                try {
                    await addDoc(collection(db, 'user-interactions'), {
                        type: 'project_click',
                        projectTitle,
                        timestamp: serverTimestamp(),
                        page: window.location.pathname
                    });
                } catch (error) {
                    console.error('Error tracking project click:', error);
                }
            }

            // Track photography album views
            if (e.target.closest('.album-card') || e.target.closest('[href*="photography"]')) {
                const albumElement = e.target.closest('.album-card');
                const albumName = albumElement?.querySelector('h3')?.textContent || 'Photography';
                
                try {
                    await addDoc(collection(db, 'user-interactions'), {
                        type: 'album_view',
                        albumName,
                        timestamp: serverTimestamp(),
                        page: window.location.pathname
                    });
                } catch (error) {
                    console.error('Error tracking album view:', error);
                }
            }
        });
    }

    trackSessionDuration() {
        window.addEventListener('beforeunload', async () => {
            const sessionDuration = Date.now() - this.sessionStartTime;
            
            try {
                await addDoc(collection(db, 'session-analytics'), {
                    duration: sessionDuration,
                    timestamp: serverTimestamp(),
                    page: window.location.pathname
                });
            } catch (error) {
                console.error('Error tracking session duration:', error);
            }
        });
    }

    // Method to get analytics data (for admin view)
    async getAnalytics() {
        try {
            const pageViewsQuery = query(
                collection(db, 'page-views'),
                orderBy('timestamp', 'desc'),
                limit(100)
            );
            const pageViewsSnapshot = await getDocs(pageViewsQuery);
            
            const interactionsQuery = query(
                collection(db, 'user-interactions'),
                orderBy('timestamp', 'desc'),
                limit(50)
            );
            const interactionsSnapshot = await getDocs(interactionsQuery);

            return {
                pageViews: pageViewsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })),
                interactions: interactionsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            };
        } catch (error) {
            console.error('Error getting analytics:', error);
            return null;
        }
    }
}

// Initialize Firebase services when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new ContactFormHandler();
    new PortfolioAnalytics();
});

export { db, analytics };
