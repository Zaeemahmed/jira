import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SignUp } from './Pages/signup/SignUp';
import { UserMainPage } from './Pages/signup/UserMainPage/UserMainPage';
const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<UserMainPage />} />
      <Route path='/signup/*' element={<SignUp />} />
      <Route path='/test' element={<SignUp />} />
    </Routes>
  );
};
export default Main;
