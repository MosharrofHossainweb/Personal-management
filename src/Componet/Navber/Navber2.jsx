import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Navber2 = () => {
  // ============================Redux data================================
  const sliceUser = useSelector((state) => state.currentUser.value);
  // ============================Redux data================================
  // ==========================Logout============================
  const navigate = useNavigate();
  const handelLogout = () => {
    // ==============navigat==============
    navigate('/login');
   
  };
  // ======================================================
  return (
    <>
      <div className="min-h-screen w-64 bg-gradient-to-b from-blue-600 to-indigo-700 text-white flex flex-col py-6 shadow-lg">
        {/* Logo */}

        <nav className="flex-1 space-y-4">
          <div className="text-yellow-400 text-3xl font-bold tracking-wide mb-10 m-3">
            <Link className="text-5xl" to="/">
              M<span className="text-white text-3xl">Dev</span>
            </Link>
          </div>
          <Link
            to="/profile"
            className="block px-4 py-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <div className="profie flex items-center text-2xl gap-3">
              <img
                className="w-[55px] h-[55px]  rounded-full"
                src={sliceUser?.photoURL}
                alt="Profie"
              />
              Profile
            </div>
          </Link>
          <Link
            to="/friendlist"
            className="block px-4 py-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            All Users
          </Link>
          <Link
            to="/messages"
            className="block px-4 py-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Messages
          </Link>
          <Link
            to="/friendrequest"
            className="block px-4 py-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Friend Requests
          </Link>
          <Link
            to="/sentrequests"
            className="block px-4 py-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Sent Requests
          </Link>
          <Link
            to="/allfriendlist"
            className="block px-4 py-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Friend List
          </Link>
          <Link
            to="/blocked"
            className="block px-4 py-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Blocked
          </Link>
        </nav>
        <div className="mt-6 px-4">
          <button
            onClick={handelLogout}
            className="w-full bg-red-600 text-white py-2 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Navber2;
