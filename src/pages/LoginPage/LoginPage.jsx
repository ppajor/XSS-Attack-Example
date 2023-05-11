import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    localStorage.setItem('token', 'abcdefga');
    navigate('search');
  };

  return (
    <div className='mt-24'>
      <h1 className='mb-20 text-center text-6xl font-semibold text-[#232323]'>
        Login
      </h1>
      <form
        onSubmit={handleSubmit}
        className='mx-auto flex max-w-[550px] flex-col gap-4'
      >
        <Input name='username' type='text' placeholder='nazwa użytkownika' />
        <Input name='password' type='password' placeholder='hasło' />
        <div className='mt-8 w-full'>
          <Button>Zaloguj</Button>
        </div>
      </form>
    </div>
  );
};
export default LoginPage;
