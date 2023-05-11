import React from 'react';

const Button = (props) => {
  return (
    <button className='w-full rounded-md bg-blue-700 py-2 text-white'>
      {props.children}
    </button>
  );
};

export default Button;
