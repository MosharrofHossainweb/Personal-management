import React from "react";
import MassageSideBar from "./MassageComponent/MassageSideBar";
import MassageBox from "./MassageComponent/MassageBox";

const Massege = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-screen">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-gray-100">
        <MassageSideBar />
      </div>
      {/* Message Box */}
      <div className="flex-1">
        <MassageBox />
      </div>
    </div>
  );
};

export default Massege;
