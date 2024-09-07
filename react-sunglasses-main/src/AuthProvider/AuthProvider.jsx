import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, FacebookAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, TwitterAuthProvider } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    console.log(loading);

    // social loinProvider
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const twitterProvider = new TwitterAuthProvider();
    const facebookProvider = new FacebookAuthProvider();


    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signin user
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // github login
    const githubLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // twiterLogIn
    const twitterLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, twitterProvider)
    }


    // twiterLogIn
    const facebookLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, facebookProvider)
    }

    // signout
    const signOut = () => {
        setUser(null)
        signOut(auth)
    }

    // obsever
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setLoading(false)
            }
        });
        return ()=>unSubscribe();
    }, [])
    console.log(user);


    const allvalues = {
        createUser,
        signIn,
        googleLogIn,
        githubLogIn,
        signOut,
        user,
        twitterLogIn,
        facebookLogIn
    };
    return (
        <div>
            <AuthContext.Provider value={allvalues}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;