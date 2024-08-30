import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const Main = () => {
    return (
        <div className="container  mx-auto">

            {/* <div className=" min-h-[calc(100vh-250px)] mt-20 " >
                <Outlet ></Outlet>
            </div> */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <div className="mt-4 md:mt-6 lg:mt-12">
            </div> */}

        </div>
    );
};

export default Main;