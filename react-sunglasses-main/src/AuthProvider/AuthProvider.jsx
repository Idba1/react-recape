import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, TwitterAuthProvider } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    // social loinProvider
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const twitterProvider = new TwitterAuthProvider();



    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signin user
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // github login
    const githubLogIn = () => {
        return signInWithPopup(auth, githubProvider)
    }

    // twiterLogIn
    const twitterLogIn=()=>{
        return signInWithPopup(auth, twitterProvider)
    }

    // signout
    const signOut = () => {
        setUser(null)
        signOut(auth)
    }

    // obsever
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [])
    console.log(user);


    const allvalues = {
        createUser,
        signIn,
        googleLogIn,
        githubLogIn,
        signOut,
        user,
        twitterLogIn
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