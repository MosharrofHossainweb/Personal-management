import React from 'react';
import ProductItem from '../../Componet/ProductItem/ProductItem';
import { Link } from 'react-router-dom';
import ShopBanner from '../../Componet/ShopComponent/ShopBanner';
import Filter from '../../Componet/ShopComponent/Filter';
import ShopPagination from '../../Componet/ShopComponent/ShopProduct';
import ShopProduct from '../../Componet/ShopComponent/ShopProduct';

const Shop = () => {
  return (
    <section className="product pb-16 bg-blue-950">
      <div className="container mx-auto px-4">
        <ShopBanner/>
        <Filter/>
        <ShopProduct itemsPerPage={16}/>
        
      </div>
    </section>
  );
};

export default Shop;
