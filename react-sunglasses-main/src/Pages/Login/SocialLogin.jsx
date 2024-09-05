import UseAuth from "../../Hooks/UseAuth/UseAuth";

const SocialLogin = () => {
    const { googleLogIn } = UseAuth();
    // console.log(googleLogIn);
    const { githubLogIn } = UseAuth()
    return (
        <>
            <div className="divider">continue with</div>
            <div className="flex gap-5">
                <div className="">
                    <button onClick={() => googleLogIn()} className="btn btn-primary btn-outline">Google</button>
                </div>
                <div className="">
                    <button onClick={() => githubLogIn()} className="btn btn-primary btn-outline">Github</button>
                </div>
            </div>
        </>
    );
};

export default SocialLogin;