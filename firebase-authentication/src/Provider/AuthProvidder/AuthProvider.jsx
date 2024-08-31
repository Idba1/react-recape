import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.init";
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const[user,setUser]=useState('')

    const registerUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
            // .then(result => console.log(result.user))
    }

    const logInUser = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password)
            // .then(result => console.log(result.user))
    }

    const authInfo = {
        registerUser,
        logInUser,
        user,
        setUser
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