import React from 'react';
import tt from '../Community/tt.jpeg';
import it from '../Community/it.jpeg';
import ct from '../Community/ct.jpeg';
const ProductCard = ({ name, image }) => (

  <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-5  bg-backgroundColor hover:bg-hover cursor-pointer border-2 border-hover">
    
    <img className="w-full h-64" src={image} alt={name} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{name}</div>
      
    </div>
    
    <div className="px-6 pt-4 pb-2">
      <button className="bg-textcolor hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
        <a href="/Botpage">View Chat</a>
      </button>
    </div>
  </div>
);

const ProductList = () => {
  const products = [
    { name: 'Teens',  image:tt},
    { name: 'Individuals',  image: it },
    { name: 'Couples',  image: ct },
    { name: 'Couples',  image: ct },
    
  ];

  return (
    <div className="bg-backgroundColor2 p-6 rounded-lg shadow-lg text-center">
      <h2 className="text-4xl text-backgroundColor mb-2 pt-20">100+ People have benefitted</h2>

      <p className="text-sm text-backgroundColor mb-4 bold">24 x 7 Assistance | 100% Chat Privacy | Ememrgency Help Available</p>
    

    <div className="flex flex-wrap justify-centre p-3">
      
    
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
        
      ))}

<div className="bg-backgroundColor p-10 rounded-lg shadow-lg text-center hover:bg-hover  w-full">
      <h2 className="text-3xl font-bold align-middle text-backgroundColor2 cursor-pointer">My Conversations</h2>


      </div>

      </div>
    </div>
  );
};

export default ProductList;
