import Main from "../../layout/Main";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";

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
      ]
    },
  ]);

  export default router;