# Firebase Security Configuration

## Firestore Security Rules

For production deployment, configure these Firestore security rules in your Firebase Console:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Contact messages - allow write only, no read from client
    match /contact-messages/{document} {
      allow write: if request.auth == null && 
                   resource == null &&
                   isValidContactMessage(request.resource.data);
      allow read: if false; // Only admins can read via backend
    }
    
    // Page views and analytics - allow write only
    match /page-views/{document} {
      allow write: if request.auth == null && resource == null;
      allow read: if false;
    }
    
    match /user-interactions/{document} {
      allow write: if request.auth == null && resource == null;
      allow read: if false;
    }
    
    match /session-analytics/{document} {
      allow write: if request.auth == null && resource == null;
      allow read: if false;
    }
    
    // Helper function to validate contact message structure
    function isValidContactMessage(data) {
      return data.keys().hasAll(['name', 'email', 'subject', 'message', 'timestamp']) &&
             data.name is string && data.name.size() >= 2 && data.name.size() <= 100 &&
             data.email is string && data.email.matches('.*@.*\\..*') && data.email.size() <= 254 &&
             data.subject is string && data.subject.size() >= 3 && data.subject.size() <= 200 &&
             data.message is string && data.message.size() >= 10 && data.message.size() <= 2000 &&
             data.timestamp == request.time;
    }
  }
}
```

## Authentication Setup (Optional)

For enhanced security, you can set up Firebase Authentication:

1. Enable Email/Password authentication in Firebase Console
2. Create an admin user
3. Update security rules to require authentication for reads
4. Modify the admin dashboard to use Firebase Auth

## Storage Rules (if using Firebase Storage)

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true; // Public read for portfolio images
      allow write: if false; // No public writes
    }
  }
}
```

## Environment Variables

Create a `.env` file based on `.env.example` for local development.

## Security Best Practices

1. **Never expose sensitive data**: Firebase config values are safe to expose
2. **Use Security Rules**: Control data access at the database level
3. **Validate input**: Always validate data on both client and server
4. **Monitor usage**: Set up alerts for unusual activity
5. **Rate limiting**: Consider implementing rate limiting for contact forms
6. **HTTPS only**: Ensure all traffic uses HTTPS

## Admin Access

The admin dashboard (`admin.html`) uses a simple password for demo purposes.

For production:
- Implement proper Firebase Authentication
- Use role-based access control
- Add IP whitelisting if needed
- Enable audit logging

## Analytics Privacy

The analytics tracking:
- Does not collect personal data without consent
- Stores minimal technical information
- Complies with GDPR principles
- Can be disabled by users

## Backup Strategy

Regular backups of Firestore data should be set up:
1. Enable automatic backups in Firebase Console
2. Export data periodically
3. Test restore procedures

## Monitoring

Set up monitoring for:
- Failed form submissions
- Unusual traffic patterns
- Error rates
- Performance metrics
