import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Main from "./layout/Main";
import About from "./pages/about/About";
import DetailsPage from "./components/shared/DetailsPage";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
            },
            {
                path : '/about',
                element : <About></About>,
            },
            {
                path : '/details/:id',
                element : <DetailsPage></DetailsPage>,
                loader : ({params}) => fetch(`http://localhost:5173/details/${params.id}`)
            }
        ]
    }
])