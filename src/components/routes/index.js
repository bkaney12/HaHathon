import React from "react";
import { Route, Routes } from "react-router";
import AddItem from "../pages/AddItem";
import MainPage from "../pages/MainPage";
import ItemDetailsPage from "../pages/ItemDetailsPage";

import CartPage from "../pages/CartPage";
import OrderPage from "../pages/OrderPage";
import PaymentPage from "../pages/PaymentPage";

import EditPage from "../pages/EditPage";
import CustomersPage from "../pages/CustomersPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route exact path="/product/:id" element={<ItemDetailsPage />} />
      <Route exact path="/cart" element={<CartPage />} />
      <Route path="/add" element={<AddItem />} />
      <Route exact path="/order" element={<OrderPage />} />
      <Route exact path="/payment-page" element={<PaymentPage />} />
      <Route path="/edit/:id" element={<EditPage />} />
      <Route path="/customer-account" element={<CustomersPage />} />
    </Routes>
  );
};

export default AppRoutes;
