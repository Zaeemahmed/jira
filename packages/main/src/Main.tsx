import React from "react";
import { Routes, Route } from "react-router-dom";

import { SignUp } from "./Pages/SignUp";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<>SDHJADAJDH</>} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  );
};
export default Main;
