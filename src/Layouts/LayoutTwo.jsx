import Footer from '../Componet/Footer/Footer';
import Navber2 from '../Componet/Navber/Navber2';
import { Outlet } from 'react-router-dom';

const LayoutTwo = () => {
  return (
    <>
    
      <div className="div flex">

        <Navber2 />
        <Outlet />
      </div>
        
      
    </>
  );
};

export default LayoutTwo;
