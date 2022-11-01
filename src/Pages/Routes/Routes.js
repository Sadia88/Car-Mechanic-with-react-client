import Main from "../../layout/Main";
import Checkout from "../Checkout/Checkout";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";

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
           element: <Checkout></Checkout>,
           loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        }
      ]
    },
  ]);

  export default router;