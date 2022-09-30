import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import Customers from "../Pages/Customers";
import HomePage from "../Pages/HomePage"
import Login from "../Pages/Login";
import Pricing from "../Pages/Pricing";
import SignUp from "../Pages/SignUp";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/customers" element={<Customers />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
};
export default AllRoutes;
