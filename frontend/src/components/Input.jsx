import React from 'react';
import { BsSearch } from 'react-icons/bs';

const Input = (props) => {
  return (
    <div className='border-grey-200 flex w-full  flex-row overflow-hidden rounded-md border-[1px] shadow-sm'>
      <input className='flex-1 rounded-md px-4 py-2 shadow-sm' {...props} />
      {props.searchIcon &&
      <div className='w-12 bg-blue-700 flex items-center justify-center'>
        <BsSearch size={16} color='white' />
      </div>
      }
    </div>
  );
};

export default Input;
