import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const googleUser = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, LoggedInUser => {
            setUser(LoggedInUser);
            setLoading(false);
        });
        return ()=> {
            return unSubscribe();
        }
    },[]);
    const userLogOut = () => {
        return signOut(auth);
    }
    const updateProfileInfo = (name, photo) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
      };

    const authInfo = {
        user,
        createUser,
        googleUser,
        userLogin,
        userLogOut,
        updateProfileInfo,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProviders;