import React from "react";
import ItemsContext from "../../contexts/ItemsContext";
import Content from "../Content/Content";
// import ListOfItems from "../Items/ListOfItems";
import MainLayout from "../layouts/MainLayout";

const MainPage = () => {
  return (
    <ItemsContext>
      <MainLayout>
      {/* <ListOfItems /> */}
      <Content />
     </MainLayout>
    </ItemsContext>
  );
};

export default MainPage;
