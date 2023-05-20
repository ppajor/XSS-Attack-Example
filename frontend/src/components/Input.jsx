import React from 'react';
import { BsSearch } from 'react-icons/bs';

const Input = (props) => {
  return (
    <div
      className='border-grey-200 flex w-full  flex-row overflow-hidden rounded-md border-[1px] shadow-sm'
      style={{ borderBottomRightRadius: !props.borderRadiusBottom && 'none' }}
    >
      <input className='flex-1 rounded-md px-4 py-2 shadow-sm' {...props} />
      {props.searchIcon && (
        <button className='flex w-12 items-center justify-center bg-blue-700'>
          <BsSearch size={16} color='white' />
        </button>
      )}
    </div>
  );
};

export default Input;
