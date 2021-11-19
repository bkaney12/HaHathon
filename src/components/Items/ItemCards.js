import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Container, Card, CardMedia, CardContent, Typography, CardActions, CardActionArea, Button, Grid } from '@material-ui/core';
import { ShoppingBasket } from '@material-ui/icons';


const useStyles = makeStyles({
   media: {
      height: 140,
      paddingTop: "56.25%",
   }
})

const ItemCards = ({ product }) => {
   const classes = useStyles();


   return (
      <Container className={classes.cardGrid} maxWidth="md">
         <Card className={classes.card}>
            <CardActionArea>
               <CardMedia
                  className={classes.media}
                  image={product.image}
                  title={product.title}
               />
               <CardContent className={classes.cardContent}>
                  <Typography variant="h5" gutterBottom>
                     {product.title}
                  </Typography>
                  <Typography>
                     {product.price}
                  </Typography>
                  <Typography>
                     {product.category}
                  </Typography>
               </CardContent>
            </CardActionArea>
            <CardActions>
               <Button color="secondary" variant="contained">
                  View
               </Button>
            </CardActions>
         </Card>
      </Container>
   )
}

export default ItemCards
