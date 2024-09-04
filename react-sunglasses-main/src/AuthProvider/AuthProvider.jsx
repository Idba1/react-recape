import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();


    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signin user
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogIn=()=>{
        return signInWithPopup(auth,googleProvider)
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
        googleLogIn
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