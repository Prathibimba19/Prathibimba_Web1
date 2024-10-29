// Importing the downlaoded libraries
import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom" // Library for redirecting the user based upon the links

//importing different components
import Header from "./components/Header"
import Body from "./components/Body"


//The main Structure of our App

const AppLayout = () =>
{
    
    return (
        <div className="app">
            <Header/>
            <Outlet/>   
        </div>
    )
}

// This will re-direct the user to the specified page based upon the url
const appRouter = createBrowserRouter([
    {
        path :"/", // Home link - Just when user opens the browser
        element : <AppLayout/>,
        children : [
            {
                path : "/",
                element : <Body/>
            }
        ]

    }
])





//Getting hold of the HTML space to render the React
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);




