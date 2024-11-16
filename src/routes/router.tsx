import { createBrowserRouter } from "react-router-dom";
import Home from "../view/Home";
import Suscription from "../view/Suscripcion";
import SuscriptionDos from "../view/SuscripcionDos";


const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/suscripcion", element: <Suscription /> },
    { path: "/suscripcion-paso-dos", element: <SuscriptionDos /> }
]);

export default router;



