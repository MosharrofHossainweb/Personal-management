import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa6';

const BreadCu = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[1];

  return (
    <div>
      <ul className="flex justify-center items-center text-sm sm:text-base md:text-lg lg:text-xl">
        <li>
          <Link
            className="text-yellow-50 hover:text-blue-300 transition-all active:scale-[1.1] font-poppins font-semibold"
            to="/"
          >
            Home
          </Link>
        </li>

        <li>
          <FaChevronRight className="mx-2" />
        </li>

        <li>
          <p className="text-yellow-100 transition-all capitalize font-poppins font-normal">
            {path}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default BreadCu;
