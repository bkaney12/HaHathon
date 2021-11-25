import React from "react";
import CommentsContext from "../../contexts/CommentsContext";
import ItemsDetails from "../Items/ItemsDetails";
import MainLayout from "../layouts/MainLayout";

const ItemDetailsPage = () => {
  return (
    <MainLayout>
      <CommentsContext>
        <ItemsDetails />
      </CommentsContext>
    </MainLayout>
  );
};

export default ItemDetailsPage;
