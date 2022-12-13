import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SignUp } from './Pages/signup/SignUp';
import { SignUpScreen4 } from './Pages/signup/SignUpScreen4';
const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<SignUpScreen4 />} />
      <Route path='/signup/*' element={<SignUp />} />
      <Route path='/test' element={<SignUp />} />
    </Routes>
  );
};
export default Main;
