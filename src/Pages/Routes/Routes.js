import Main from "../../layout/Main";
import Checkout from "../Checkout/Checkout";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";
import Orders from "../Orders/Orders";
import SignUp from "../SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");

 const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
           path:'/' ,
           element: <Home></Home>
        },
        {
           path:'/home' ,
           element: <Home></Home>
        }
        ,
        {
           path:'/login' ,
           element: <Login></Login>
        }
        ,
        {
           path:'/signup' ,
           element: <SignUp></SignUp>
        }
        ,
        {
           path:'/checkout/:id' ,
           element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>,
           loader:({params})=>fetch(`https://car-mechanic-server-sadia88.vercel.app/services/${params.id}`)
        }
        ,
        {
           path:'/orders' ,
           element: <PrivateRoutes><Orders></Orders></PrivateRoutes>,
          
        }
      ]
    },
  ]);

  export default router;