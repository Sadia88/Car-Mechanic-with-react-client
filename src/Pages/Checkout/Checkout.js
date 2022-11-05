import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {

    const {user}=useContext(AuthContext)
    const service=useLoaderData()
    const {_id,title,price}=service


    const handlePlaceOrder=event=>{
        event.preventDefault()
        const form=event.target
        const name=`${form.firstName.value} ${form.lastName.value}`
        const email=user?.email || "unregistered"
        const message=form.message.value;
        const phone=form.phone.value

// console.log(name,email,phone, message)
        const order={
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }
        // if(phone.length>10){
        //     alert("Phone number should be 10 character")
        // }
        // else{

        // }

        // https://car-mechanic-server-sadia88.vercel.app

        fetch('https://car-mechanic-server-sadia88.vercel.app/orders',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('Order placed successfully')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));


    }
    return (
        <div className='py-10 text-center'>
            
          <form  onSubmit={handlePlaceOrder}>
          <h2 className='text-5xl'>Your are about to order <span className='text-orange-600'>{title}</span></h2>
            <h3 className='text-3xl'>Price : <span className='text-orange-600'>{price}</span></h3>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
              <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full " /> 
              <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered w-full " /> 
              <input name="phone" type="text" placeholder="Your Phone" className="input input-bordered w-full " required /> 
              <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-bordered w-full "  readOnly/> 
              </div>
             <textarea className='textarea textarea-bordered h-24 w-full my-6' name='message' placeholder='Your Message'></textarea> 
             <input type="submit" value='Place Your order'  className='btn  bg-orange-600 border-none'/>
          </form>
        </div>
    );
};

export default Checkout;