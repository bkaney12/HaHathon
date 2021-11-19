import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useProducts } from '../../contexts/ItemsContext'
import ListOfItems from '../Items/ListOfItems';

const Content = () => {
   const { fetchProducts, loading, error, products } = useProducts();

   useEffect(() => {
      fetchProducts();
   }, [])

   return (
      <Grid item md={12}>
         {loading && <h2>loading...</h2>}
         {!loading && error && <h2>{error}</h2> }
         {!loading && products.length > 0 && <ListOfItems products={products} />}
      </Grid>
   )
}

export default Content
