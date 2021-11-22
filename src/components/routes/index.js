import React from "react";
import { Route, Routes } from "react-router";
import AddItem from "../pages/AddItem";
import MainPage from "../pages/MainPage";
import ItemDetailsPage from "../pages/ItemDetailsPage";
import CartPage from "../pages/CartPage";
import EditPage from "../pages/EditPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route exact path="/product/:id" element={<ItemDetailsPage />} />
      <Route exact path="/cart" element={<CartPage />} />

      <Route path="/add" element={<AddItem />} />
      <Route path="/edit/:id" element={<EditPage />} />
    </Routes>
  );
};

export default AppRoutes;
