import UseAuth from "../../Hooks/UseAuth/UseAuth";

const PrivateRoute = ({children}) => {
    const{user}=UseAuth()

    if(!user){
        return <h1>loading</h1>
    }
    return (
        <div>
            {/* <h1>this is private route</h1> */}
            {children}
        </div>
    );
};

export default PrivateRoute;