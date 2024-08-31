import { createContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.init";
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => console.log(result.user))
    }

    const logInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => console.log(result.user))
    }

    const authInfo = {
        registerUser,
        logInUser
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