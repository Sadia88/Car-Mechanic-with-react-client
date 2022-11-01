import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id,img,price,title}=service
    console.log(service)
   
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="" /></figure>
  <div className="card-body">
    <h1 className="card-title text-2xl font-bold">
      {title}
      
    </h1>
    <p className='my-5 text-2xl text-orange-600 font-bold'>Price: ${price}</p>
    
  </div>
 <div className='text-center pb-5'> <Link to={`/checkout/${_id}`} ><button className="btn  btn-error">Book Now</button></Link>

 </div>
</div>
    );
};

export default ServiceCard;