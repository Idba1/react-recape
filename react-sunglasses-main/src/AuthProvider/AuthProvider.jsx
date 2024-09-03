import { createContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const createUser=()=>{
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const allvalues={
       createUser
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