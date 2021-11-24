import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Card, CardMedia, CardContent, Typography, CardActions, CardActionArea, Button, Grid, IconButton } from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import MyLink from '../../shared/MyLink';
import { blueGrey } from '@material-ui/core/colors';
import { useProducts } from '../../contexts/ItemsContext';
import { checkItemInFavs } from '../../utils/check-cart';


const useStyles = makeStyles({
   media: {
      height: 140,
      paddingTop: "56.25%",
   },
   card: {
      height: '100%'
   },
   cardGrid: {
      height: '100%'
   },
   cardContent: {
      minHeight: '140px'
   },
   actionArea: {
      justifyContent: 'space-between'
   }
})

const ItemCards = ({ product, favs }) => {
   const classes = useStyles();

   const { addAndDeleteInFavs } = useProducts();

   const isProductInFavs = () => {
      if (favs) {
         return checkItemInFavs(favs.products, product.id)
      }
      return false;
   }

   const inFavs = isProductInFavs();

   return (
      <Container className={classes.cardGrid}>
         <Card className={classes.card}>
            <MyLink exact to={`/product/${product.id}`}>
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
                        Price: {product.price}
                     </Typography>
                        <i>
                           christmas {product.category}
                        </i>
                  </CardContent>
               </CardActionArea>
            </MyLink>
            <CardActions className={classes.actionArea}>
               <MyLink to={`/product/${product.id}`}>
                  <Button style={{backgroundColor: blueGrey[600]}} variant="contained">
                     View
                  </Button>
               </MyLink>
               <IconButton onClick={() => addAndDeleteInFavs(product)} color={inFavs ? "secondary" : "default"} >
                  <BookmarkBorderIcon />
               </IconButton>
            </CardActions>
         </Card>
      </Container>
   )
}

export default ItemCards;
