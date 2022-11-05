import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoutes = ({children}) => {

    const {loader,user}=useContext(AuthContext)
const location=useLocation()

if(loader){
    return <h1>Loading...</h1>
}
    if (user) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience

        return children;


    }
      // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace />;
      

     

    
};

export default PrivateRoutes;