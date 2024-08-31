import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Main = () => {
    return (
        <div className="container  mx-auto">
            <Navbar></Navbar>
            <div className=" min-h-[calc(100vh-150px)] mt-5 " >
                <Outlet ></Outlet>
            </div>
            <div className="mt-1 md:mt-2 lg:mt-5">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;