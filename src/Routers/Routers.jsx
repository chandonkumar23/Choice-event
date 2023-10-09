import { createBrowserRouter } from "react-router-dom";

import Login from "../Pages/Home/Login/Login";
import Register from "../Pages/Home/Register/Register";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import More from "../Pages/More/MOre";
import PrivetRoute from "../Pages/privetRoute/privetRoute";
import Detailes from "../Pages/Detailes/Detailes";
import Gallary from "../Pages/Garllary/Gallary";
import ErorPage from "../Pages/ErrorPage/ErorPage";


const routers = createBrowserRouter([
   
    {  path:'/',
       element:<Root></Root>,    
       errorElement:<ErorPage></ErorPage>,
        children:[  
            { path:'/',
            element:<Home></Home>,
            loader:() => fetch('/data.json'),

            },
            {
                path:'/more/:id',
                element:<PrivetRoute><More></More></PrivetRoute>,
                loader:async ()=> await fetch('/data.json'),

            },
            {
                path:'/detailes/:id',
                element:<PrivetRoute><Detailes></Detailes></PrivetRoute>,
                loader:()=> fetch('/data.json'),

            },
          
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/gallary',
                element:<PrivetRoute><Gallary></Gallary></PrivetRoute>
            }
        ]
    }
])
export default routers;