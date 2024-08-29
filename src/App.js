import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Checkout } from "./Components/Checkout/Checkout";

export const App = () => {
    const myRoute = createBrowserRouter([
        { path: "/", element: <Home /> },
        { path: "/checkout", element: <Checkout /> }
    ])
    return (
        <>
            <RouterProvider router={myRoute} />
        </>
    )
}