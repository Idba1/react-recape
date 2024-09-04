import UseAuth from "../../Hooks/UseAuth/UseAuth";

const SocialLogin = () => {
    const {googleLogIn}=UseAuth();
    console.log(googleLogIn);
    return (
        <>
            <div className="divider">continue with</div>
            <div className="">
                <button className="btn btn-primary btn-circle btn-outline">Accent</button>
            </div>
        </>
    );
};

export default SocialLogin;