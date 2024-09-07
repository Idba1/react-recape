import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth/UseAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = UseAuth()
    const location = useLocation()

    if(loading){
        return <h1 className="text-4xl">Loading</h1>
    }

    if (!user) {
        return <Navigate to={"/login"} state={location?.pathname||'/'}></Navigate>
    }
    return (
        <div>
            {/* <h1>this is private route</h1> */}
            {children}
        </div>
    );
};

export default PrivateRoute;