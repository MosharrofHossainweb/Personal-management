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
    <div className="fixed top-0 left-0 w-full bg-gradient-to-b from-blue-600 to-indigo-700 text-white lg:w-64 lg:fixed lg:h-screen lg:flex lg:flex-col">
      {/* Logo and Toggle */}
      <div className="flex justify-between items-center px-4 py-4 lg:py-6 lg:block">
        <Link to="/" className="text-yellow-400 text-2xl font-bold">
          M<span className="text-white">Dev</span>
        </Link>
        <button
          onClick={toggleMenu}
          className="text-white text-2xl lg:hidden"
          aria-label="Toggle Menu"
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Links */}
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } lg:block px-4 py-4 transition-all duration-300`}
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
          <span className="text-xs lg:text-lg">Profile</span>
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
        <button
          onClick={handleLogout}
          className="w-full mt-4 bg-red-600 py-2 rounded-md hover:bg-red-700"
        >
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Navber2;
