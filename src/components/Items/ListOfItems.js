import { Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import ItemCards from "./ItemCards";

const ListOfItems = ({ products }) => {

  return (
    <>
      <div style={{ alignItems: "center" }}>
        <Container maxWidth="md">
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
            fontFamily="Monospace"
          >
            CHRISTMAS DECORATIONS
          </Typography>
          <p style={{ fontSize: "24px"}}>
          Discover our magical Christmas décor collection of twinkling Christmas wreaths and Christmas garlands, delightful Christmas room decorations, and accessories that will bring out the excited child in us all. Centre your festive scheme around a fabulous faux Christmas tree, and finish with the understated elegance of glass decorations or the whimsical fancy of gold and silver Christmas decorations.
          </p>
          {/* <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
            fontFamily="Monospace"
          >
            Discover our magical Christmas décor collection of twinkling
            Christmas wreaths and Christmas garlands, delightful Christmas room
            decorations, and accessories that will bring out the excited child
            in us all. Centre your festive scheme around a fabulous faux
            Christmas tree, and finish with the understated elegance of glass
            decorations or the whimsical fancy of gold and silver Christmas
            decorations.
          </Typography> */}
        </Container>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={9} md={3} key={product.id}>
              <ItemCards product={product} />
            </Grid>
          ))}
        </Grid>
      </div> 
    </>
  );
};

export default ListOfItems;
