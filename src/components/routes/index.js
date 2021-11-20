import React from "react";
import { Route, Routes } from "react-router";
import CartPage from "../pages/CartPage";
import ItemDetailsPage from "../pages/ItemDetailsPage";
import MainPage from "../pages/MainPage";

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
