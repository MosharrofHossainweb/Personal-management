import { useSelector } from 'react-redux';
import Footer from '../Componet/Footer/Footer';
import Navber2 from '../Componet/Navber/Navber2';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LayoutTwo = () => {
  const UserSlice = useSelector((state)=>state.currentUser.value)
  const navigate= useNavigate()
  useEffect(()=>{
    if(UserSlice==null){
      navigate('/login')
       // =================localStarage===================
    localStorage.removeItem('user')
    // =================localStarage===================
    }
  },[])
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
