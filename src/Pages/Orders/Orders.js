import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {

    const {user,logOut}=useContext(AuthContext)

    const [orders,setOrders]=useState([])

    

    useEffect(() => {
      fetch(`https://car-mechanic-server-sadia88.vercel.app/orders?email=${user?.email}`, {
          headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`
          }
      })
          .then(res => {
              if (res.status === 401 || res.status === 403) {
                  return logOut();
              }
              return res.json();
          })
          .then(data => {
              setOrders(data);
          })
  }, [user?.email, logOut])


    const handleDelete=id=>{
        const proceed=window.confirm("Are sure ,you want to delete the order")
        if(proceed){
          fetch(`https://car-mechanic-server-sadia88.vercel.app/orders/${id}`,{
              method: "DELETE",
              headers: {
                  authorization: `Bearer ${localStorage.getItem('token')}`
              }
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
          if (data.deletedCount >0) {
            alert("Successfully deleted one document.");

            const remaining=orders.filter(order=>order._id !==id);
            setOrders(remaining)
          }})
          
        }
  } 


  const handleStatusUpdate=id=>{

    fetch(`https://car-mechanic-server-sadia88.vercel.app/orders/${id}`,{
        method: "PATCH",
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({status: 'Approved'})
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)

        if(data.modifiedCount>0){
            const remaining=orders.filter(orders=>orders._id!==id)
            const approving=orders.find(order=>order._id===id)
            approving.status="Approved"

            const newOrders=[approving,...remaining]
            setOrders(newOrders)
        }
    })
  }

    return (
        <div className=' text-center'>
            <h1 className='text-5xl my-10'>You have <span className='text-orange-600'>{orders.length}</span> orders</h1>

            <div className="overflow-x-auto w-full">
  <table className="table w-full">
  
    <thead>
      <tr>
        <th>
          <label>
           
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Status</th>
      
        <th></th>
      </tr>
    </thead>
    <tbody>
    
    {


        orders.map(order=><OrderRow key={order._id} order={order} handleDelete={handleDelete} handleStatusUpdate={handleStatusUpdate}></OrderRow>)
    }
     
    </tbody>
    
   
    
  </table>
</div>
        </div>
    );
};

export default Orders;