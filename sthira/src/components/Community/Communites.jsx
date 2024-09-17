import React from 'react';
import wps from '../Community/wps.jpg'
import spw from '../Community/spw.jpg'
import sus from '../Community/sus.jpg'
import sp from '../Community/sp.jpg'

const ProductCard = ({ name, image }) => (

  <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-10 bg-orange-50">
    <img className="w-full h-20" src={image} alt={name} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{name}</div>
      <p className='text-lightText'>251 Chats | Serious</p>
      
    </div>
    
    <div className="px-6 pt-4 pb-2">
      <button className="bg-brightColor2 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded">
      <a href="/Botpage">Learn More </a>
      </button>
    </div>
  </div>
);

const ProductList = () => {
  const products = [
    { name: 'Working Professionals',  image:wps},
    { name: 'Postmortum Women',  image: spw },
    { name: 'University Students',  image: sus },
    { name: 'General Help',  image: sp },
    
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <h2 className="text-4xl text-gray-500 font-bold mb-2 pt-20">100+ People have benefitted</h2>

      <p className="text-sm text-gray-600 mb-4 bold">24 x 7 Assistance | 100% Chat Privacy | Ememrgency Help Available</p>
    

    <div className="flex flex-wrap justify-centre p-3">
      
    
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
        
      ))}

<div className="bg-white p-10 rounded-lg shadow-lg text-center hover:bg-brightColor2  w-full">
      <h2 className="text-3xl text-gray-500 font-bold align-middle hover:text-white">My Conversations</h2>


      </div>

      </div>
    </div>
  );
};

export default ProductList;
