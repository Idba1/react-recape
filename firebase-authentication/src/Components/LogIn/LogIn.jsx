import { Link } from "react-router-dom";
import SocialLogIn from "../SocialLogIn/SocialLogIn";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvidder/AuthProvider";

const LogIn = () => {
    const user=useContext(AuthContext);
    console.log(user);
    const handleLogIn = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }
    return (
        <div>
            <div className="w-full mx-auto max-w-md p-4 rounded-md shadow sm:p-8 ">
                <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                <p className="text-sm text-center text-gray-400">Dont have account?
                    <Link to={"/register"} rel="noopener noreferrer" className="focus:underline hover:underline">Sign up here</Link>
                </p>
                <SocialLogIn></SocialLogIn>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full text-gray-400" />
                    <p className="px-3 text-gray-400">OR</p>
                    <hr className="w-full text-gray-400" />
                </div>
                <form onSubmit={handleLogIn} noValidate="" action="" className="space-y-8">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-700  " />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-400">Forgot password?</a>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700  " />
                        </div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-blue-400 text-gray-900">Sign in</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default LogIn;