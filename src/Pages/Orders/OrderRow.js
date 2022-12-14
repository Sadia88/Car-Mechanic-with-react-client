import React, { useEffect, useState } from 'react';
import Services from '../Home/Services/Services';

const OrderRow = ({order,handleDelete,handleStatusUpdate}) => {
    // console.log(order)
    const {_id,serviceName,price,email,customer,phone,service,status}=order

    const[orderService,setOrderService]=useState({})

    useEffect(()=>{
        fetch(`https://car-mechanic-server-sadia88.vercel.app/services/${service}`)
        .then(res=>res.json())
        .then(data=>setOrderService(data))
    },[service])


   

    

    return (
        
       
    <tr>
      <th>
        <label>
         <button onClick={()=>handleDelete(_id)} className="btn btn-error">X</button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
             {
                orderService?.img && 
                
                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
             }
            </div>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
      {serviceName}
        <br/>
        <span className="badge badge-ghost badge-sm">Price : ${price}</span>
      </td>
      
      <th>
        <button onClick={()=>handleStatusUpdate(_id)} className="btn btn-ghost btn-xs">{status ? status : 'Pending'}</button>
      </th>
    </tr>
   
 
    );
};

export default OrderRow;