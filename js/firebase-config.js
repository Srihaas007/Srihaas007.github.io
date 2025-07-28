// Firebase Configuration
// For production deployment, these values should be set as environment variables
// GitHub Pages: Use repository secrets and build process
// Other platforms: Use their environment variable system

const firebaseConfig = {
  apiKey: window.FIREBASE_API_KEY || "AIzaSyBTTRHmhc8fJCdKaWHz9vX2lcc-2IgI7B8",
  authDomain: window.FIREBASE_AUTH_DOMAIN || "portfolio-1c345.firebaseapp.com",
  projectId: window.FIREBASE_PROJECT_ID || "portfolio-1c345",
  storageBucket: window.FIREBASE_STORAGE_BUCKET || "portfolio-1c345.firebasestorage.app",
  messagingSenderId: window.FIREBASE_MESSAGING_SENDER_ID || "680429963418",
  appId: window.FIREBASE_APP_ID || "1:680429963418:web:885277756180924d127723",
  measurementId: window.FIREBASE_MEASUREMENT_ID || "G-07QV72C4VP"
};

export default firebaseConfig;
