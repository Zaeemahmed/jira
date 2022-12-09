import React from "react";
import { Routes, Route } from "react-router-dom";

import { SignUp } from "./Pages/signup/SignUp";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<>SDHJADAJDH</>} />
      <Route path="/signup/*" element={<SignUp />} />
      <Route path="/test" element={<SignUp />} />
    </Routes>
  );
};
export default Main;
