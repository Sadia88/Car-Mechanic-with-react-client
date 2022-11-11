import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const[services,setServices]=useState([])
    const [isAsc,setAsc]=useState(true)
    const searchRef=useRef()
    const [search,setSearch]=useState('')
    useEffect(()=>{
        fetch(`https://car-mechanic-server-sadia88.vercel.app?search=${search}&order=${isAsc ? 'asc':'desc'}`)
        .then(res=>res.json())
        .then(data=>{
           
            setServices(data)})
    },[isAsc,search])


    const handleSearch=()=>{
        setSearch(searchRef.current.value)
    }
    return (
        <div>
            <div className='text-center mb-5'>
            <h1 className='my-5 text-2xl text-orange-600 font-bold'>Services</h1>
            <h1 className="text-5xl font-bold mb-5">Our Service Area</h1>
            <p>The majority have suffered alteration in some form, by injected humour, or Randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <button className='btn bg-orange-600 my-5 text-center border-none' onClick={()=>setAsc(!isAsc)}>{isAsc ? 'desc': 'asc'}</button>
            <input type="text"  className='input input-sm ml-10 border-stone-500 p-6' ref={searchRef}/> 
            <button onClick={handleSearch} className='btn ml-5'>Search</button>
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