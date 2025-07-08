# 🔥 Firebase Setup Instructions

## Environment Variables Setup

To get your portfolio working with Firebase, you need to create a `.env` file in the portfolio directory with your Firebase configuration.

### 1. Get Your Firebase Config

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project (or create a new one)
3. Click the gear icon ⚙️ next to "Project Overview"
4. Select "Project settings"
5. Scroll down to "Your apps" section
6. Click on your web app (or create one if you don't have it)
7. Copy the config values

### 2. Create .env File

Create a file named `.env` in the portfolio directory with this content:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key_here
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

### 3. Example Configuration

Replace the values with your actual Firebase config:

```env
REACT_APP_FIREBASE_API_KEY=AIzaSyC1234567890abcdefghijklmnopqrstuvwxyz
REACT_APP_FIREBASE_AUTH_DOMAIN=my-portfolio-12345.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=my-portfolio-12345
REACT_APP_FIREBASE_STORAGE_BUCKET=my-portfolio-12345.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=123456789012
REACT_APP_FIREBASE_APP_ID=1:123456789012:web:abcdef1234567890
```

### 4. Firestore Database Setup

1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location close to your users
5. Create the database

### 5. Security Rules (Optional)

For production, you should set up proper security rules. For now, you can use test mode.

### 6. Restart Development Server

After creating the `.env` file:

```bash
npm start
```

## Troubleshooting

### Common Issues:

1. **"Firebase: Error (auth/invalid-api-key)"**
   - Check that your API key is correct
   - Make sure the `.env` file is in the right location

2. **"Firebase: Error (auth/unauthorized-domain)"**
   - Add `localhost` to authorized domains in Firebase Console
   - Go to Authentication > Settings > Authorized domains

3. **"Firebase: Error (firestore/permission-denied)"**
   - Check your Firestore security rules
   - Make sure you're in test mode for development

### Development vs Production

- **Development**: Use test mode for Firestore
- **Production**: Set up proper security rules
- **Environment Variables**: Never commit `.env` files to git

## Next Steps

Once Firebase is configured:

1. Test the TeamBuilder functionality
2. Add players and generate teams
3. Deploy to Firebase Hosting (optional)
4. Set up proper security rules for production

---

**Note**: The `.env` file should be in your `.gitignore` to keep your Firebase keys secure! 