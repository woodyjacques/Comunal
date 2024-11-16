import { createBrowserRouter } from "react-router-dom";
import Home from "../view/Home";
import Register from "../view/Register";
import Login from "../view/Login";
import VerEmail from "../view/VerEmail";
import UpEmail from "../view/UpEmail";


const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    // { path: "/register", element: <Register /> },
    // { path: "/login", element: <Login /> },
    // { path: "/verificacion-cuenta", element: <VerEmail /> },
    // { path: "/actualizacion-contraseña", element: <UpEmail /> }
]);

export default router;



