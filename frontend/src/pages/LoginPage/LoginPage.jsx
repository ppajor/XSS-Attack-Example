import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target['username'].value;
    const password = e.target['password'].value;
    try {
      const result = await axios.post('http://127.0.0.1:8000/xss/token/', {
        username,
        password,
      });

      if (result) {
        const token = result.data.access;
        localStorage.setItem('token', token);
      }
      navigate('search');
    } catch (error) {
      if (error.response.request.status === 401)
        setError('Nieprawidłowe dane logowania');
      if (error.response.request.status === 404)
        setError('Nastąpiły problemy z serwerem, spróbuj ponownie później');
    }
  };

  return (
    <div className='mx-auto mt-24 max-w-[550px] py-10'>
      <h1 className='mb-20 text-center text-6xl font-semibold text-[#232323]'>
        Login
      </h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <Input name='username' type='text' placeholder='nazwa użytkownika' />
        <Input name='password' type='password' placeholder='hasło' />
        <div className='mt-8 w-full'>
          <Button>Zaloguj</Button>
        </div>
      </form>
      {error && <p className='mt-4 text-red-700'>{error}</p>}
    </div>
  );
};
export default LoginPage;
