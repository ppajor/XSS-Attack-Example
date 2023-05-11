import React, { useEffect } from 'react';
import Input from '../../components/Input';

const SearchPage = () => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
  }, []);

  return (
    <div className='mx-auto mt-24 w-[550px]'>
      <Input name='search' type='text' placeholder='search...' searchIcon />
    </div>
  );
};

export default SearchPage;
