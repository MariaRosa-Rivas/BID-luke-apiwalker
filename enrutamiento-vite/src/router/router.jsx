import { createBrowserRouter } from "react-router-dom"
import Acerca from "../components/Acerca";
import Contacto from "../components/Contacto";
import Hola from "../components/Hola";
import Home from "../components/Home";



export const router = createBrowserRouter([
    {
        path:"/home",
        element: <Home />
    },
    {
        path:"/4",
        element: <Contacto />
    },
    {
        path:"/hello",
        element: <Acerca />
    },
    {
        path:"/hello/blue/red",
        element: <Hola />
    },
]);