import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const[services,setServices]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <div className='text-center mb-5'>
            <h1 className='my-5 text-2xl text-orange-600 font-bold'>Services</h1>
            <h1 className="text-5xl font-bold mb-5">Our Service Area</h1>
            <p>The majority have suffered alteration in some form, by injected humour, or Randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
               {
                services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
               }
            </div>
            <div className='py-10 text-center'>
           
            <button className="btn btn-outline btn-error"> More Services</button>
            </div>
        </div>
    );
};

export default Services;