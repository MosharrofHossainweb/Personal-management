import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ buttonTitle, path }) => {
  return (
    <Link
      className="mt-5 px-6 py-3 border border-white font-semibold rounded-lg hover:bg-white hover:text-black  inline-block"
      to={path}
    >
      {buttonTitle}
    </Link>
  );
};

export default Button;
