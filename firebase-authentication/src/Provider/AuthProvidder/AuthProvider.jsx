import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import auth from "../../Firebase/firebase.init";
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
        // .then(result => console.log(result.user))
    }

    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        // .then(result => console.log(result.user))
    }

    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const facebookLogIn = () => {
        return signInWithPopup(auth, facebookProvider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const authInfo = {
        registerUser,
        logInUser,
        user,
        setUser,
        googleLogIn,
        facebookLogIn,
        logOut
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log(currentUser);                
            } else {
                console.log("logout");
            }
        });

    })

    // const [user, setUser] = useState("User tw nai!")
    // console.log(children);


    return (
        <div>
            <AuthContext.Provider value={authInfo}> {children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;