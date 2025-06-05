import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import Constants from 'expo-constants';

// Validate Firebase config before initialization
const validateFirebaseConfig = () => {
  const config = {
    apiKey: Constants.expoConfig?.extra?.firebaseApiKey,
    authDomain: Constants.expoConfig?.extra?.firebaseAuthDomain,
    projectId: Constants.expoConfig?.extra?.firebaseProjectId,
    storageBucket: Constants.expoConfig?.extra?.firebaseStorageBucket,
    messagingSenderId: Constants.expoConfig?.extra?.firebaseMessagingSenderId,
    appId: Constants.expoConfig?.extra?.firebaseAppId,
    databaseURL: Constants.expoConfig?.extra?.firebaseDatabaseUrl
  };

  const missingKeys = Object.entries(config)
    .filter(([_, value]) => !value)
    .map(([key]) => key);

  if (missingKeys.length > 0) {
    throw new Error(
      `Missing Firebase configuration keys: ${missingKeys.join(', ')}. ` +
      'Please ensure all Firebase configuration variables are set in your .env file.'
    );
  }

  return config;
};

let app;
let auth;
let database;

try {
  const firebaseConfig = validateFirebaseConfig();
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  database = getDatabase(app);
} catch (error) {
  console.error('Firebase initialization error:', error);
  // Provide fallback values to prevent complete app crash
  app = null;
  auth = null;
  database = null;
}

export { auth, database };