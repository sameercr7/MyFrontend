import React from "react";
import  ReactDOM  from "react-dom/client";

import RestaurantMenu from "./components/RestaurantMenu"
import Header from "./components/Header";
import Error from "./components/Error";
import Body from "./components/Body";
import About from "./components/About";
import Contacts from "./components/Contacts";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
const AppLayout=()=>{
    return (
        <div className="app">
   <Header/>
   <Outlet/>
   {/* <Body/> */}
        </div>
    );
}; 
const route=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[{
path:"/",
element:<Body/>,
        },{
            path:"/restaurant/:resId",
            element:<RestaurantMenu/>,
        },
            {
                path:"/About",
                element:<About/>,
            },
            {
                path:"/Contacts",
                element:<Contacts/>,
            }
        ],
        errorElement:<Error/>,
    },
    
])



const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)
root.render(<RouterProvider router={route}/>)

// class components
// Functional Components


