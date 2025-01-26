import React from 'react';
import ProductItem from '../../Componet/ProductItem/ProductItem';
import { Link } from 'react-router-dom';
import Productitem2 from '../../Componet/ProductItem/Productitem2';
import ProductItem3 from '../../Componet/ProductItem/ProductItem3';
import ProductItem4 from '../../Componet/ProductItem/ProductItem4';
import ProductItem5 from '../../Componet/ProductItem/ProductItem5';
import ProductItem6 from '../../Componet/ProductItem/ProductItem6';

const OurProduct = () => {
  return (
    <>
      <section className="product pb-16 bg-gray-700">
        <div className="container mx-auto px-4">
          
          {/* Heading */}
          <h2 className="text-center pt-5 lg:pt-10 md:pt-7 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Our Products
          </h2>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-5 pt-8">
            <ProductItem6 />
            <Productitem2/>
            <ProductItem />
            <ProductItem3/>
            <ProductItem />
            <ProductItem5 />
            <ProductItem3 />
            <ProductItem4 />
          </div>

          {/* Show More Button */}
          <div className="show flex justify-center mt-6 pt-6">
            <Link
              to="/shop"
              className="px-6 py-3 border border-yellow-200 text-lg font-semibold text-white rounded-lg hover:bg-yellow-200 hover:text-blue-800 active:scale-105 transition-transform"
            >
              Show More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurProduct;
