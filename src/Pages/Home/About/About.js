import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero my-20">
        <div className="hero-content flex-col lg:flex-row">
         <div className='w-1/2 relative'>
         <img src={person} alt='' className="rounded-lg shadow-2xl h-full w-4/5" />
         <img src={parts} alt='' className="rounded-lg w-3/5 absolute border-8 right-7 top-1/2 shadow-2xl" />
         </div>
          <div className='w-1/2'>
            <h1 className='my-5 text-2xl text-orange-600 font-bold'>About Us</h1>
            <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
            <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <p className="py-6 ">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <button className="btn bg-orange-600 border-none">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About; 