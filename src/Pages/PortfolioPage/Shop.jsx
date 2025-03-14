import React from 'react';

import ShopBanner from '../../Componet/ShopComponent/ShopBanner';
import Filter from '../../Componet/ShopComponent/Filter';

import ShopProduct from '../../Componet/ShopComponent/ShopProduct';

const Shop = () => {
  return (
    <section className="product pb-16 bg-gray-700">
      <div className="container mx-auto px-4">
        <ShopBanner />
        <Filter />
        <ShopProduct itemsPerPage={16} />
      </div>
    </section>
  );
};

export default Shop;
