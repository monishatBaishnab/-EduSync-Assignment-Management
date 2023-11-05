import { auth } from "../firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'

// Create a context to manage user authentication.
export const UserContext = createContext();

// Initialize authentication providers.
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
// const auth = auth();

// Authentication context component.
const AuthContext = ({ children }) => {
    // State for the currently authenticated user and loading status.
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Function to handle authentication actions.
    const handleAuth = (authAction, ...params) => {
        setLoading(true);
        return authAction(auth, ...params);
    }

    const updateUser =  (name, photo) => {
        setLoading(true);
        return   updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
    };

    // Unsubscribe from the authentication state changes when the component unmounts.
    useEffect(() => {
        // Effect to listen for changes in authentication state.
        const unSubscribe = () => onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })

        // Clean up the effect.
        return () => unSubscribe();
    }, [])

     // Authentication context information.
    const authInfo = {
        // Functions for authentication actions.
        signInWithGoogl: () => handleAuth(signInWithPopup, googleProvider),
        signInWitGithu: () => handleAuth(signInWithPopup, githubProvider),
        signInWithEmailPass: (email, passsword) => handleAuth(signInWithEmailAndPassword, email, passsword),
        signUpWithEmailPass: (email, passsword) => handleAuth(createUserWithEmailAndPassword, email, passsword),
        updateUser,
        signOutUse: () => handleAuth(signOut),

        // Current user and loading status.
        user,
        loading
    }

    // Provide authentication context to child components.
    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

AuthContext.propTypes = {
    children: PropTypes.node,
}

export default AuthContext;