import React, { useContext, useReducer, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import login from '../../../src/assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { BsGoogle,BsFacebook } from "react-icons/bs";
import { current } from 'daisyui/src/colors';

const Login = () => {
const {signIn,googleSignin}=useContext(AuthContext)
const [error,setError]=useState('')
const navigate = useNavigate();
const location=useLocation()
let from = location.state?.from?.pathname || "/";
    const handleSubmit=event=>{
        event.preventDefault()
        const form=event.target
        const email=form.email.value
        const password=form.password.value
        signIn(email,password)
        .then((result) => {
            // Signed in 
            const user = result.user;
            const currentUser={
              email: user.email
            }

            fetch('https://car-mechanic-server-sadia88.vercel.app/jwt',{

            method: "POST",
            headers:{
              'content-type': 'application/json'
            },
            body : JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data=>{
              console.log(data)
            localStorage.setItem('token',data.token)
            setError('')
            form.reset()
            navigate(from, { replace: true });
            })






            
           
            
            // ...
          })
          .catch((error) => {
          
            const errorMessage = error.message;
            setError(errorMessage)
          });
        

    }

    const handleGoogleLogin=()=>{
        googleSignin()
        .then((result) => {
            
           
            const user = result.user;
           console.log(user)
           navigate(from, { replace: true });
          }).catch((error) => {
          
            const errorMessage = error.message;
          
            console.log(errorMessage)
          });

    }
    return (
        <div className="hero  w-full my-20">
  <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
    <div className="text-center lg:text-left">
     
     <img className='w-3/4' src={login} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-5xl font-bold text-center">Login </h1>
      <form onSubmit={handleSubmit} className="card-body py-20" >
        <div className="form-control">
        
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" />
          <label className="label">
            <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type='submit' className="btn bg-orange-600 border-none" value='Sign In' />
        </div>
        <div>
          {error}
        </div>
        <div className="form-control mt-6 text-center">
            <p>Or Sign In with</p>
      <div className='text-center flex justify-around'>
      <button onClick={handleGoogleLogin} ><BsGoogle></BsGoogle></button>
        <button><BsFacebook></BsFacebook></button>
      </div>
        </div>
        
      </form>
      <p className='text-center'>New to Car Mechanic <Link className=" text-orange-600 font-bold "  to='/signup'>Sign up</Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;