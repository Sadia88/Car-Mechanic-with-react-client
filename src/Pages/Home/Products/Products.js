import React from 'react';

const Products = () => {
    return (
        <div>
        <div className='text-center mb-5'>
        <h1 className='my-5 text-2xl text-orange-600 font-bold'>Popular Products</h1>
        <h1 className="text-5xl font-bold mb-5">Browse Our Products</h1>
        <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.  </p>
        </div>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          
        </div>
        <div className='py-10 text-center'>
       
        <button className="btn btn-outline btn-error"> More Products</button>
        </div>
    </div>
    );
};

export default Products;