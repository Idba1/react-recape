import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="container  mx-auto">

            {/* <div className=" min-h-[calc(100vh-250px)] mt-20 " >
                <Outlet ></Outlet>
            </div> */}
            <Outlet></Outlet>
            {/* <div className="mt-4 md:mt-6 lg:mt-12">
            </div> */}

        </div>
    );
};

export default Main;