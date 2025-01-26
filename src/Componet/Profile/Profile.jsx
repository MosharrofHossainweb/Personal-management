import { useSelector } from "react-redux";

const Profile = () => {
  // Redux data
  const sliceUser = useSelector((state) => state.currentUser.value);

  return (
    <div className="flex items-center justify-center lg:w-full min-h-screen bg-gradient-to-r from-gray-100 to-gray-800 px-4 sm:px-6 lg:px-8">
      <div className="w-[230px] md:w-[640px] lg:w-[1024px] xl:w-[1280px] max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white rounded-lg shadow-2xl p-5 sm:p-6 md:p-8 lg:p-10">
        {/* Profile Image & Name */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={sliceUser.photoURL}
            alt="Profile Avatar"
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full border-4 border-indigo-500 shadow-lg mb-4"
          />
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 text-center">
            {sliceUser.displayName || "User Name"}
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 text-center">
            Frontend Developer
          </p>
        </div>

        {/* Profile Details */}
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b pb-3">
            <span className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold">
              Email:
            </span>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 truncate">
              {sliceUser.email || "example@email.com"}
            </span>
          </div>
          <div className="flex justify-between items-center border-b pb-3">
            <span className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold">
              Phone:
            </span>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800">
              +1 (555) 123-4567
            </span>
          </div>
          <div className="flex justify-between items-center border-b pb-3">
            <span className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold">
              Location:
            </span>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 font-bold">
              New York, USA
            </span>
          </div>
        </div>

        {/* Edit Button */}
        <div className="mt-6 text-center">
          <button className="w-full sm:w-auto bg-indigo-500 text-white py-2 px-4 sm:px-6 md:px-8 rounded-lg shadow-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 transform transition-transform duration-300 hover:scale-105 text-sm sm:text-base md:text-lg lg:text-xl">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
