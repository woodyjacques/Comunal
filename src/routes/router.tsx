import { createBrowserRouter } from "react-router-dom";
import Home from "../view/Home";
import Suscription from "../view/Suscripcion";
import SuscriptionDos from "../view/SuscripcionDos";
import SuscriptionTres from "../view/SuscripcionTres";
import Filtro1 from "../view/Filtro1";
import Filtro2 from "../view/Filtro2";
import Ficha from "../view/Ficha";


const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/suscripcion", element: <Suscription /> },
    { path: "/suscripcion-paso-dos", element: <SuscriptionDos /> },
    { path: "/suscripcion-paso-tres", element: <SuscriptionTres /> },
    { path: "/filtro-uno", element: <Filtro1 /> },
    { path: "/filtro-dos", element: <Filtro2 /> },
    { path: "/ficha", element: <Ficha /> }
]);

export default router;



