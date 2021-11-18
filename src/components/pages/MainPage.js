import React from "react";
import ListOfItems from "../Items/ListOfItems";
import MainLayout from "../layouts/MainLayout";

const MainPage = () => {
  return (
    <MainLayout>
      <ListOfItems />
    </MainLayout>
  );
};

export default MainPage;
