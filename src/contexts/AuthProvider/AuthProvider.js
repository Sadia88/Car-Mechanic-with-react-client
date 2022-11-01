import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext=createContext()
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
   const [user,setUser]=useState(null)
   const [loader,setLoader]=useState(true)


useEffect(()=>{

    const unsubscribe=onAuthStateChanged(auth,currentUser=>{
        console.log(currentUser)
        setUser(currentUser)
    })

    return ()=>{
        return unsubscribe()
    }

},
[])
  
    

   const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
   }
    

   const signIn=( email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
   }



   const googleSignin=()=>{
    return signInWithPopup(auth, googleProvider)
   }
const authInfo={user,loader,createUser, signIn,googleSignin}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;