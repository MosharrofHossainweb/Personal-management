import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navber2 = () => {
  const sliceUser = useSelector((state) => state.currentUser.value);
  const navigate = useNavigate();
  const handleLogout = () => navigate("/login");

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col fixed  w-[110px] lg:w-64 bg-gradient-to-b from-blue-600 to-indigo-700 text-white min-h-screen">
      {/* Logo and Toggle */}
      <div className="flex justify-between items-center px-2 md:px-2  py-2 md:py-4 lg:py-6">
        <Link to="/" className="text-yellow-400 text-2xl lg:text-3xl font-bold">
          M<span className="text-white">Dev</span>
        </Link>
        <button
          onClick={toggleMenu}
          className="text-white text-xl lg:hidden"
          aria-label="Toggle Menu"
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } lg:block flex flex-col space-y-4 px-4 transition-all duration-300`}
      >
        <Link
          to="/profile"
          className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-blue-500"
        >
          <img
            className="w-10 h-10 lg:w-12 lg:h-12 rounded-full"
            src={sliceUser?.photoURL}
            alt="Profile"
          />
          <span className="text-[8px] lg:text-lg">Profile</span>
        </Link>
        {[
          { path: "/alluserlist", label: "All Users" },
          { path: "/messages", label: "Messages" },
          { path: "/friendrequest", label: "Friend Requests" },
          { path: "/sentrequests", label: "Sent Requests" },
          { path: "/allfriendlist", label: "Friend List" },
          { path: "/blocked", label: "Blocked" },
        ].map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="block px-4 py-2 rounded-md hover:bg-blue-500"
          >
            <span className="text-sm lg:text-lg">{link.label}</span>
          </Link>
        ))}
      </nav>

      {/* Logout */}
      <div
        className={`px-4 py-4 ${
          isOpen ? "block" : "hidden"
        } lg:block transition-all duration-300`}
      >
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 py-2 rounded-md hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navber2;
