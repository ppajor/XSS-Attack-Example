import React, { useEffect, useState, createRef } from 'react';
import Input from '../../components/Input';
import axios from 'axios';

const SearchPage = () => {
  const [results, setResults] = useState(null);

  const [myName, setMyName] = useState('');

  const onChangeHandler = (event) => {
    setMyName(event.target.value);
  };
  const divRef = createRef();
  const scriptCode = `
  console.log("Hello, world!");
`;
  const handleSubmit = async (e) => {
    e.preventDefault();

    const searchText = e.target['name'].value;
    divRef.current.innerHTML = `${searchText}`;
    // get the innerHTML of the div element
    setResults(searchText);
    fetch(`http://127.0.0.1:8000/xss/unsafe/search/?search=${searchText}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then((res) => console.log('wykonalo sie!', res));

    // if (results) {
    //   setResults(results.data);
    // }
  };

  return (
    <div className='mx-auto mt-24 w-[550px] py-10'>
      <form onSubmit={handleSubmit}>
        <Input
          name='name'
          type='text'
          placeholder='search...'
          onChange={onChangeHandler}
          value={myName}
          searchIcon
          borderRadiusBottom={results ? false : true}
        />
      </form>

      <div ref={divRef}>elo</div>
      <div className='border-grey-200  rounded-md border-[1px] shadow-sm'>
        {/* {results.map((row) => {
        //     return (
        //       <div className=' w-full bg-white px-4 py-2 '>
        //         <p className='text-silver-700'>{row.content}</p>
        //       </div>
        //     );
        //   })} */}
      </div>
      <script dangerouslySetInnerHTML={{ __html: scriptCode }}></script>
    </div>
  );
};

export default SearchPage;
