import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth/UseAuth";

const Menus = () => {
    const links = ['products', 'about', 'contact', 'blog'];
    return (
        <>
            {
                links.map(link => <li key={link}>
                    <Link to={`/${link}`} className="btn btn-sm  btn-ghost">{link}</Link>
                </li>)
            }
        </>
    )
}
const NavBar = () => {
    const { signOut, user } = UseAuth();
    console.log(user);
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <Menus />
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost font-bold normal-case text-3xl">GLASSES</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Menus />
                    </ul>
                </div>



                <div className="navbar-end">

                    {
                        user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL || "https://i.ibb.co/ngW6qjg/pexels-photo-1081685.webp"} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost"> {user?.displayName || "user"}</button>

                                </li>
                                <li>
                                    <button onClick={signOut} className="btn btn-sm  btn-ghost">Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm  btn-ghost">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </>
    );
};

export default NavBar;