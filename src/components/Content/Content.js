import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useLocation } from "react-router";
import { useProducts } from "../../contexts/ItemsContext";
import FilterPart from "../FilterPart/FilterPart";
import ListOfItems from "../Items/ListOfItems";
import "./content.css";

const Content = () => {
  const { fetchProducts, loading, error, products } = useProducts();

  const [page, setPage] = useState(0);

  const productPerPage = 8;

  const pageCount = Math.ceil(products.length / productPerPage);

  const pageVisited = page * productPerPage;

  const paginateProducts = products.slice(
    pageVisited,
    pageVisited + productPerPage
  );

  const changePage = ({ selected }) => {
    setPage(selected);
  };
  const location = useLocation();

  useEffect(() => {
    fetchProducts();
  }, [location.search]);

  return (
    <>
      <FilterPart />
      <Grid item md={12}>
        {loading && <h2>loading...</h2>}
        {!loading && error && <h2>{error}</h2>}
        {!loading && products.length > 0 && (
          <ListOfItems products={paginateProducts} />
        )}
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName="pagination"
          previousLinkClassName="previousBtn"
          nextLinkClassName="nextBtn"
          activeClassName="activeBtn"
          disabledClassName="disabledBtn"
        />
      </Grid>
    </>
  );
};

export default Content;
