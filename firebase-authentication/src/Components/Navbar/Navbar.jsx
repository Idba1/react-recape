import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvidder/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <Link to={"/"}>Home</Link>
                            <Link to={"/login"}>LogIn</Link>
                            <Link to={"/register"}>Register</Link>

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Link className="mr-5" to={"/"}>Home</Link>
                        <Link className="mr-5" to={"/login"}>LogIn</Link>
                        <Link className="mr-5" to={"/register"}>Register</Link>
                        {
                            user && <Link className="mr-5" to={"/about"}>About</Link>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? <div>
                        <button onClick={() => logOut()}>Log out</button>
                        {user.email}

                    </div> : ""}

                </div>
            </div>
        </div>
    );
};

export default Navbar;