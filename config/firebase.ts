import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import Constants from 'expo-constants';

// Get Firebase config from Constants.expoConfig.extra
const firebaseConfig = {
  apiKey: Constants.expoConfig?.extra?.firebaseApiKey,
  authDomain: Constants.expoConfig?.extra?.firebaseAuthDomain,
  projectId: Constants.expoConfig?.extra?.firebaseProjectId,
  storageBucket: Constants.expoConfig?.extra?.firebaseStorageBucket,
  messagingSenderId: Constants.expoConfig?.extra?.firebaseMessagingSenderId,
  appId: Constants.expoConfig?.extra?.firebaseAppId,
  databaseURL: Constants.expoConfig?.extra?.firebaseDatabaseUrl
};

// Only initialize Firebase if all required config values are present
if (!firebaseConfig.apiKey || !firebaseConfig.authDomain || !firebaseConfig.projectId || !firebaseConfig.databaseURL) {
  throw new Error('Firebase configuration is incomplete. Please check your environment variables.');
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);