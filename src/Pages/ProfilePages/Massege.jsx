import { useState } from "react";
import MassageBox from "./MassageComponent/MassageBox";
import MassageSideBar from "./MassageComponent/MassageSideBar";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Massage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Sidebar */}
      <div
        className={`fixed lg:static ${
          isSidebarOpen ? "left-0" : "-left-full"
        } top-0 h-full w-64 bg-gradient-to-b from-blue-600 to-indigo-700 text-white shadow-lg transition-all duration-300 z-50`}
      >
        <MassageSideBar />
      </div>

      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden absolute top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded-full shadow-md focus:outline-none"
      >
        {isSidebarOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </button>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-4 lg:pl-0">
        <MassageBox />
      </div>
    </div>
  );
};

export default Massage;
