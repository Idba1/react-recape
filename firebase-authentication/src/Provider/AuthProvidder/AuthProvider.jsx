import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,  FacebookAuthProvider } from "firebase/auth";
import auth from "../../Firebase/firebase.init";
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const[user,setUser]=useState('')
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

    const googleLogIn=()=>{
       return signInWithPopup(auth,googleProvider)
    }

    const facebookLogIn=()=>{
       return signInWithPopup(auth,facebookProvider)
    }

    const authInfo = {
        registerUser,
        logInUser,
        user,
        setUser,
        googleLogIn,
        facebookLogIn
    }

    // const [user, setUser] = useState("User tw nai!")
    // console.log(children);


    return (
        <div>
            <AuthContext.Provider value={authInfo}> {children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;