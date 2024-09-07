import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth/UseAuth";

const SocialLogin = () => {
    const { googleLogIn, twitterLogIn, facebookLogIn } = UseAuth();
    // console.log(googleLogIn);
    const navigate=useNavigate()
    const location=useLocation()
    const from= location?.state||'/'

    const handleSocialLogIn = socialProvider => {
        socialProvider()
            .then(result => {
                if(result.user)
                    navigate(from)
                // console.log(result);
            })
    }
    const { githubLogIn } = UseAuth()
    return (
        <>
            <div className="divider">continue with</div>
            <div className="flex gap-5">
                <div className="">
                    <button onClick={() => handleSocialLogIn(googleLogIn)} className="btn btn-primary btn-outline">Google</button>
                </div>
                <div className="">
                    <button onClick={() => handleSocialLogIn(githubLogIn)} className="btn btn-primary btn-outline">Github</button>
                </div>
                <div className="">
                    <button onClick={() => handleSocialLogIn(twitterLogIn)} className="btn btn-primary btn-outline">Twitter</button>
                </div>

                <div className="">
                    <button onClick={() => handleSocialLogIn(facebookLogIn)} className="btn btn-primary btn-outline">Facebook</button>
                </div>
            </div>
        </>
    );
};

export default SocialLogin;