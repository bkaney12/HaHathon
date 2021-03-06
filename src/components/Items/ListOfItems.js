import { Button, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ItemCards from "./ItemCards";


const useStyles = makeStyles((theme) => ({
  title: {
    [theme.breakpoints.down('md')]: {
      fontSize: '28px'
    }
  },
  text: {
    [theme.breakpoints.up('md')]: {
      fontSize: '22px'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '18px',
      margin: '10px'
    },
  }
}));

const ListOfItems = ({ products }) => {

  const classes = useStyles()

 


  return (
    <>
      <div style={{ alignItems: "center", paddingTop: "30px" }}>
        <Container maxWidth="md">

          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
            fontFamily="Monospace"
            className={classes.title}
          >
            CHRISTMAS DECORATIONS
          </Typography>

         <p style={{fontSize: '28px'}} sclassName={classes.text}>
          Discover our magical Christmas décor collection of twinkling Christmas wreaths and Christmas garlands, delightful Christmas room decorations, and accessories that will bring out the excited child in us all. Centre your festive scheme around a fabulous faux Christmas tree, and finish with the understated elegance of glass decorations or the whimsical fancy of gold and silver Christmas decorations.
          </p>

        </Container>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ItemCards product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default ListOfItems;
