import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log(user);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // User Loogin
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google Login
    const googleLogin = () => {
        setLoading(true);
      return signInWithPopup(auth, googleProvider)
    }

    // GitHub Login
    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
      }

    // User Registration
    const userRegistration = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sing Out User 
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // onAuthStateChange
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false);
            setUser(currentUser);
            // console.log('save user', currentUser);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    // Update Profile
    const profileUpdate = (name, photo) => {
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }


    const authInfo = { user, setUser, googleLogin, profileUpdate, loginUser, userRegistration, logOut, githubLogin, loading, }
        

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;