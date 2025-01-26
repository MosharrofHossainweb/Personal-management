import React from 'react';
import MassageSideBar from './MassageComponent/MassageSideBar';
import MassageBox from './MassageComponent/MassageBox';

const Massege = () => {
  return (
    <>
      <div className="massage w-[250px]">
        <MassageSideBar/>
        <MassageBox/>
      </div>
    </>
  );
};

export default Massege;
