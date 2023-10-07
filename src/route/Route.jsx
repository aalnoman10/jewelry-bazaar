import { createBrowserRouter } from "react-router-dom";
import Main from "../Leyout/Main";
import Error from "../Leyout/Error";
import Login from "../login/login";
import Resister from "../login/Resister";

const Route = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/resister",
        element: <Resister />,
    },
    {
        path: "*",
        element: <Error />,
    },
]);

export default Route;