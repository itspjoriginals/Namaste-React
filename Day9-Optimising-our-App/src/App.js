import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {
    Outlet,
  createBrowserRouter as Router,
  RouterProvider,
} from "react-router";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";


const Grocery = lazy(() => import("./components/Grocery"));



const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )

}

const appRouter = Router([
    {
        "path": "/",
        "element" : <AppLayout />,
        "children" : [
            {
                "path": '/',
                "element": <Body />
            },
            {
        "path": "/about",
        "element" : <About />
    },
    {
        "path": "/contact",
        "element": <Contact />
    },
    {
        "path": "/restaurants/:resId",
        "element": <RestaurantMenu />
    },
    {
        "path": '/grocery',
        "element": <Suspense fallback= {<Shimmer/>} ><Grocery /></Suspense>
    }
        ],
        errorElement : <Error />
    }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}  />);