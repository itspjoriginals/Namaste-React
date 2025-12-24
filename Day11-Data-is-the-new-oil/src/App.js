import React, { useContext, useEffect, useState } from "react";
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
import userContext from "./utils/userContext";



const AppLayout = () => {

    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name: "Prashant Jha",
        };

        setUserName(data.name);
    }, []);

    return (
        <userContext.Provider value={{loggedInUser: userName, setUserName}}>
        <div className="app">
            <Header />
            <Outlet />
        </div>
        </userContext.Provider>
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
    }
        ],
        errorElement : <Error />
    }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}  />);