import React from 'react';
import { Link } from 'react-router-dom';

const Productitem2 = () => {


  return (
    <div className="product_item relative m-5 group max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto bg-white rounded-lg overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">
      {/* Product Image */}
      
      <img 
        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
        src="/vaccin1.png"
        alt="product"
        />
        

      {/* Product Details */}
      <div className="product_text bg-blue-200 p-4 sm:p-6">
        <h3 className="font-serif text-lg sm:text-xl font-semibold mb-2">
          Syltherine
        </h3>
        <p className="text-sm sm:text-base font-medium mb-4">
          Stylish cafe chair
        </p>
        <div className="price flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="text-lg sm:text-xl font-medium text-blue-800">
            BDT 2,500,000
          </p>
          <p className="text-sm sm:text-base font-medium text-gray-400 line-through">
            BDT 3,500,000
          </p>
        </div>
      </div>

      {/* Hover Button */}
      <div className="absolute inset-0 bg-blue-400 bg-opacity-0 flex items-center justify-center opacity-0 group-hover:bg-opacity-40 group-hover:opacity-100 transition-opacity duration-300">
        <Link to='/productdetailcard' className="px-6 py-3 border border-blue-300 font-semibold rounded-lg bg-white text-blue-800 hover:bg-blue-400 hover:text-black">
          Add to Cart
        </Link>
      </div>
    </div>
  );
};

export default Productitem2;
