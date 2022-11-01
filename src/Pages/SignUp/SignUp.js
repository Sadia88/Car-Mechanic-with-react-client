import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import login from '../../../src/assets/images/login/login.svg'
import AuthProvider, { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
const {createUser}=useContext(AuthContext)


    const handleLogin=event=>{
        event.preventDefault()
        const form=event.target
        const email=form.email.value
        const password=form.password.value

        createUser(email,password)
        .then((result) => {
            // Signed in 
            const user = result.user;
           console.log(user)
          })
          .catch((error) => {
            
            const errorMessage = error.message;
            console.log(errorMessage)
            // ..
          });
    }
    return (
        <div className="hero  w-full my-20">
  <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
    <div className="text-center lg:text-left">
     
     <img className='w-3/4' src={login} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-5xl font-bold text-center">Sign Up </h1>
      <form onSubmit={handleLogin} className="card-body py-20" >
        <div className="form-control">
        
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your name" name='name' className="input input-bordered" />
        </div>
        <div className="form-control">
        
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" placeholder="Your password" name='password' className="input input-bordered" />
         
        </div>
        <div className="form-control mt-6">
          <input type='submit' className="btn bg-orange-600 border-none" value='Sign up' />
        </div>
      </form>
      <p className='text-center'>Already have an account <Link className=" text-orange-600 font-bold pb-5 "  to='/login'>Login</Link></p>
    </div>
  </div>
</div>
    );
};

export default SignUp;