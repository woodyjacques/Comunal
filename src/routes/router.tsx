import { createBrowserRouter } from "react-router-dom";
import Home from "../view/Home";
import Suscription from "../view/Suscripcion";
import SuscriptionDos from "../view/SuscripcionDos";
import SuscriptionTres from "../view/SuscripcionTres";


const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/suscripcion", element: <Suscription /> },
    { path: "/suscripcion-paso-dos", element: <SuscriptionDos /> },
    {path: "/suscripcion-paso-tres", element: <SuscriptionTres/>}
]);

export default router;



