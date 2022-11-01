import React from 'react';
import { GrSchedulePlay ,GrScheduleNew} from "react-icons/gr";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";

const Contact = () => {
    return (
        <div className='bg-black h-90 flex justify-around mb-11 text-white py-10 border rounded-xl'>
            <div className='flex'>
               <div className=' px-4 py-4 '>
               <GrSchedulePlay></GrSchedulePlay>
               
               </div>
                <div>
                    <p>We are open monday-friday</p>
                    <p className='text-xl font-semibold'>7:00 am - 9:00 pm</p>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className=' px-4 py-4'>
                <BsFillTelephoneOutboundFill ></BsFillTelephoneOutboundFill>
                </div>
               <div>
               <p>Have a question?</p>
                <p className='text-xl font-semibold'>+2546 251 2658</p>
               </div>
            </div>
            <div className='flex justify-center'>
                <div className=' px-4 py-4'>
                <HiLocationMarker></HiLocationMarker>
                </div>
                <div>
                    <p>Need a repair? our address</p>
                    <p className='text-xl font-semibold'>Liza Street, New York</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;