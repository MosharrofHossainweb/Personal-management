import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa6';

const BreadCu = () => {
  const locztion = useLocation();
  const path = location.pathname.split('/')[1];
  return (
    <div>
      <ul className="flex justify-center items-center">
        <li>
          <Link
            className="text-2xl  text-yellow-50 hover:text-blue-300 transition-all active:scale-[1.1] font-poppin font-semibold"
            to="/"
          >
            Home
          </Link>
        </li>

        <li>
          <FaChevronRight />
        </li>
        <li>
          <p className="text-xl text-yellow-100 transition-all capitalize  font-poppin font-normal">
            {path}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default BreadCu;
