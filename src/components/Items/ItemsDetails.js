import { Button, Card, CardActions, CardContent, CardHeader, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useProducts } from '../../contexts/ItemsContext';
import { blueGrey } from '@material-ui/core/colors';
// import { ButtonBack, ButtonNext, CarouselProvider, ImageWithZoom, Slide, Slider } from 'pure-react-carousel';
import CreateIcon from '@material-ui/icons/Create';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
   data_container: {
      margin: '60px',
   },
   text: {
      display: 'block',
      fontSize: '24px'
   },
   img: {
      width: '400px',
      marginLeft: '200px'
   },
   notes: {
      fontSize: '20px',
      margin: '10px 100px 10px 0',
      // boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
   },
   actions: {
      justifyContent: 'space-between'
   }
}));

const ItemsDetails = () => {
   const { fetchOneProduct, productDetails, deleteProduct } = useProducts()
   const { id } = useParams();

   const navigate = useNavigate();

   const classes = useStyles();

   useEffect(() => {
      fetchOneProduct(id)
   }, [id]);

   const handleReverse =() => {
      deleteProduct(id);
      navigate('/');
   }

   return (
      <Grid container>
         { productDetails ? (
            <Grid container className={classes.data_container}>
               <Grid item md={6} sm={10}>
                  <img src={productDetails.image} className={classes.img}/>
               </Grid>
            <Grid item md={4} sm={12}>
               <Card>
                  <CardContent>
                     <h1>
                        {productDetails.title}
                     </h1>
                     <i className={classes.text}>
                        Price: {productDetails.price}
                     </i>
                     <i className={classes.text}>
                        Category: christmas {productDetails.category}
                     </i>
                     <h2>Byuer's notes</h2>
                     <p className={classes.notes}>
                        {productDetails.notes}
                     </p>
                  <IconButton>
                     <Button style={{backgroundColor: blueGrey[500], marginBottom: 0}} variant="contained" >
                        Add to Basket
                     </Button>
                  </IconButton>
                  </CardContent>
                  <CardActions className={classes.actions}>
                     <IconButton aria-label="add to favorites" >
                        <FavoriteIcon />
                     </IconButton>
                     <IconButton>
                        <ChatBubbleOutlineIcon />
                     </IconButton>
                     <IconButton onClick={() => handleReverse(deleteProduct(id))}>
                        <DeleteIcon />
                     </IconButton>
                     <IconButton>
                        <CreateIcon />
                     </IconButton>
                  </CardActions>
               </Card>
            </Grid>
            </Grid>
         ) : null }
      </Grid>
   )
}

export default ItemsDetails
