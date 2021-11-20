import React from "react";
import { Route, Routes } from "react-router";
import MainPage from "../pages/MainPage";
import ItemDetailsPage from "../pages/ItemDetailsPage";
import CartPage from '../pages/CartPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route exact path="/product/:id" element={<ItemDetailsPage />} />
      <Route exact path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default AppRoutes;
