import React from "react";
import { Route, Routes } from "react-router";
import AddItem from "../pages/AddItem";
import MainPage from "../pages/MainPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/add" element={<AddItem />} />
    </Routes>
  );
};

export default AppRoutes;
