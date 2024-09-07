import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth/UseAuth";

const PrivateRoute = ({ children }) => {
    const { user } = UseAuth()
    const location = useLocation()

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