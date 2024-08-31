import { createContext, useState } from "react";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const[user,setUser]=useState("User tw nai!")
    console.log(children);
    return (
        <div>
            <AuthContext.Provider value={user}> {children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;