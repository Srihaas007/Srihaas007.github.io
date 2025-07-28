// Environment Configuration Loader
// This script loads environment variables for production deployment

(function() {
    // For GitHub Pages deployment with secrets
    if (typeof GITHUB_ACTIONS !== 'undefined') {
        window.FIREBASE_API_KEY = process.env.FIREBASE_API_KEY;
        window.FIREBASE_AUTH_DOMAIN = process.env.FIREBASE_AUTH_DOMAIN;
        window.FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID;
        window.FIREBASE_STORAGE_BUCKET = process.env.FIREBASE_STORAGE_BUCKET;
        window.FIREBASE_MESSAGING_SENDER_ID = process.env.FIREBASE_MESSAGING_SENDER_ID;
        window.FIREBASE_APP_ID = process.env.FIREBASE_APP_ID;
        window.FIREBASE_MEASUREMENT_ID = process.env.FIREBASE_MEASUREMENT_ID;
    }
    
    // For Netlify, Vercel, or other platforms
    if (typeof process !== 'undefined' && process.env) {
        window.FIREBASE_API_KEY = process.env.FIREBASE_API_KEY;
        window.FIREBASE_AUTH_DOMAIN = process.env.FIREBASE_AUTH_DOMAIN;
        window.FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID;
        window.FIREBASE_STORAGE_BUCKET = process.env.FIREBASE_STORAGE_BUCKET;
        window.FIREBASE_MESSAGING_SENDER_ID = process.env.FIREBASE_MESSAGING_SENDER_ID;
        window.FIREBASE_APP_ID = process.env.FIREBASE_APP_ID;
        window.FIREBASE_MEASUREMENT_ID = process.env.FIREBASE_MEASUREMENT_ID;
    }
})();
