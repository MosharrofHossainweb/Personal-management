
import { useSelector } from 'react-redux';


// import Navber2 from '../Navber/Navber2';

const Profile = () => {
  
// ===================Redux data======================
  const sliceUser = useSelector((state) => state.currentUser.value);
  // ===================Redux data======================
  return (
    <>
      <div className=" flex lg:w-full flex-col items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200">
        <div className=" max-w-lg bg-white rounded-lg shadow-2xl p-8">
          <div className="flex flex-col items-center mb-6">
            <img
              src={sliceUser.photoURL}
              alt="Profile Avatar"
              className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-lg mb-4"
            />
            <h1 className="text-2xl font-bold text-gray-800">
              {sliceUser.displayName}
            </h1>
            <p className="text-gray-500">Frontend Developer</p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <span className="text-gray-600 px-1 font-bold"> Email:</span>
              <span className="text-gray-800 p-1"> {sliceUser.email}</span>
            </div>
            <div className="flex justify-between items-center border-b pb-3">
              <span className="text-gray-600 font-bold">Phone:</span>
              <span className="text-gray-800">+1 (555) 123-4567</span>
            </div>
            <div className="flex justify-between items-center border-b pb-3">
              <span className="text-gray-600 font-bold">Location:</span>
              <span className="text-gray-800 font-bold">New York, USA</span>
            </div>
          </div>
          <div className="mt-6 text-center">
            <button className="bg-indigo-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 transform transition-transform duration-300 hover:scale-105">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
