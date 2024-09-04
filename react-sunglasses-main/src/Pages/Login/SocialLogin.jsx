import UseAuth from "../../Hooks/UseAuth/UseAuth";

const SocialLogin = () => {
    const {googleLogIn}=UseAuth();
    console.log(googleLogIn);
    return (
        <>
            <div className="divider">continue with</div>
            <div className="">
                <button onClick={()=>googleLogIn()} className="btn btn-primary btn-outline">Google</button>
            </div>
        </>
    );
};

export default SocialLogin;