import React from 'react';
import MassageSideBar from './MassageComponent/MassageSideBar';
import MassageBox from './MassageComponent/MassageBox';

const Massege = () => {
  return (
    <>
      <div className="massage ml-[80px] p-5 ">
        <MassageSideBar/>
        <MassageBox/>
      </div>
    </>
  );
};

export default Massege;
