import Footer from '../Componet/Footer/Footer';
import Navber2 from '../Componet/Navber/Navber2';
import { Outlet } from 'react-router-dom';

const LayoutTwo = () => {
  return (
    <>
      <div className="mass">
        <Navber2 />
        <Outlet />
        <Footer/>
      </div>
    </>
  );
};

export default LayoutTwo;
