import { createContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.init";
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        registerUser
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