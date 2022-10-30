import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../../src/assets/images/login/login.svg'

const Login = () => {


    const handlesubmit=event=>{
        event.preventDefault()
        const form=event.target
        const email=form.email.value
        const password=form.password.value
    }
    return (
        <div className="hero  w-full my-20">
  <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
    <div className="text-center lg:text-left">
     
     <img className='w-3/4' src={login} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-5xl font-bold text-center">Login </h1>
      <form onSubmit={handlesubmit} className="card-body">
        <div className="form-control">
        
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type='submit' className="btn bg-orange-600 border-none" value='Sign In' />
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;