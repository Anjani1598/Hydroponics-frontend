import React from 'react'
import { Routes, Route } from "react-router-dom";
import ItemPage from '../Pages/ItemPage';
import HomePage from '../Pages/HomePage';
import CartPage from '../Pages/CartPage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';


const ApplicationRouts = () => {
  return (
    <Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/item" element={<ItemPage />}></Route>
    <Route path="/cart" element={<CartPage />}></Route>
    <Route path='/login' element={<LoginPage />}></Route>
    <Route path='/item' element ={<ItemPage />}></Route>
    <Route path='/register' element={<RegisterPage />}></Route>
  </Routes>
  )
}

export default ApplicationRouts