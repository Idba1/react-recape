import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Components/Home/Home";
import LogIn from "../../Components/LogIn/LogIn";
import Register from "../../Components/Register/Register"

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <LogIn></LogIn>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
        ]
    },
]);

export default Router;
