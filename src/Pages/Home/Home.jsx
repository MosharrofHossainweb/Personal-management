import React from 'react';
import Banner from '../../Componet/Banner/Banner';
import Shop from '../PortfolioPage/Shop';
import Explore from './Explore/Explore';
import Portfolio from '../Porfolio/Portfolio';
import OurProduct from '../Shope/OurProduct';
import Video from '../../Componet/VideoComponent/Video';

const Home = () => {
  return (
    <>
      <Banner />
      <Explore />
      <Video/>
      <Portfolio />
      <OurProduct/>
      
    </>
  );
};

export default Home;
