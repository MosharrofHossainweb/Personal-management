import React from 'react';
import ProductItem from '../../Componet/ProductItem/ProductItem';
import { Link } from 'react-router-dom';

const OurProduct = () => {
  return (
    <>
      <section className="product pb-16 bg-blue-950">
        <div className="container mx-auto px-4">
          
          {/* Heading */}
          <h2 className="text-center pt-5 lg:pt-10 md:pt-7 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Our Products
          </h2>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-5 pt-8">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
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
