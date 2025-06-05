import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth, database } from '../config/firebase';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import { ref, set, get } from 'firebase/database';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => Promise<void>;
  userProfile: UserProfile | null;
  error: string | null;
  isAuthenticated: boolean;
}

interface UserProfile {
  name: string;
  points: number;
  quizHistory: any[];
  rewardHistory: any[];
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (!auth) {
      setError('Firebase authentication is not initialized');
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      setIsAuthenticated(!!user);
      
      if (user && database) {
        try {
          const profileRef = ref(database, `users/${user.uid}/profile`);
          const snapshot = await get(profileRef);
          if (snapshot.exists()) {
            setUserProfile(snapshot.val());
          }
        } catch (e) {
          console.error('Error fetching user profile:', e);
          setError('Failed to fetch user profile');
        }
      } else {
        setUserProfile(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signUp = async (email: string, password: string, name: string) => {
    try {
      setError(null);
      if (!auth || !database) {
        throw new Error('Firebase services are not initialized');
      }
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      const initialProfile: UserProfile = {
        name,
        points: 0,
        quizHistory: [],
        rewardHistory: []
      };

      await set(ref(database, `users/${user.uid}/profile`), initialProfile);
      setIsAuthenticated(true);
    } catch (e: any) {
      console.error('Sign up error:', e);
      setError(e.message || 'Failed to sign up');
      throw e;
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      setError(null);
      if (!auth) {
        throw new Error('Firebase authentication is not initialized');
      }
      await signInWithEmailAndPassword(auth, email, password);
      setIsAuthenticated(true);
    } catch (e: any) {
      console.error('Sign in error:', e);
      setError(e.message || 'Failed to sign in');
      throw e;
    }
  };

  const signOut = async () => {
    try {
      setError(null);
      if (!auth) {
        throw new Error('Firebase authentication is not initialized');
      }
      await firebaseSignOut(auth);
      setIsAuthenticated(false);
    } catch (e: any) {
      console.error('Sign out error:', e);
      setError(e.message || 'Failed to sign out');
      throw e;
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      signIn, 
      signUp, 
      signOut,
      userProfile,
      error,
      isAuthenticated
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);