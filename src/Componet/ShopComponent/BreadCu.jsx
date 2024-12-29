import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa6';

const BreadCu = () => {
  return (
    <div>
      <ul className="flex justify-center items-center">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <FaChevronRight />
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
    </div>
  );
};

export default BreadCu;
