import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  CardActionArea,
  Button,
  Grid,
  IconButton,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MyLink from "../../shared/MyLink";
import { blueGrey } from "@material-ui/core/colors";
import { TrainOutlined } from "@material-ui/icons";
import { useProducts } from "../../contexts/ItemsContext";
import { Navigate, useNavigate, useParams } from "react-router";


import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

import { checkItemInFavs } from '../../utils/check-cart';

const useStyles = makeStyles((theme) => ({
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
      minHeight: '140px',
      [theme.breakpoints.down('md')]: {
         minHeight: '80px',
      }
   },
   actionArea: {
      justifyContent: 'space-between'
   },
   cardTitle: {
      fontSize: '26px',
      [theme.breakpoints.down('md')]: {
         fontSize: '18px'
      }
   }
}))


const ItemCards = ({ product ,favs}) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const { changeLike, editItem, fetchProducts } = useProducts();
  const [like, setLike] = useState(product.like);

  const handleLike = async () => {
    const newProduct = {
      ...product,
      like: !product.like,
    };
    let res = await editItem(newProduct, product.id);
    if (res.status === 200) {
      setLike(!like);
    }
  };
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
              <Typography variant="h5" gutterBottom className={classes.cardTitle}>
                {product.title}
              </Typography>
              <Typography>Price: {product.price}</Typography>
              {/* <Typography> */}
              <i>christmas {product.category}</i>
              {/* </Typography> */}
            </CardContent>
          </CardActionArea>
        </MyLink>
        <CardActions className={classes.actionArea}>
          <MyLink to={`/product/${product.id}`}>
            <Button
              style={{ backgroundColor: blueGrey[600] }}
              variant="contained"
            >
              View
            </Button>
          </MyLink>
            <IconButton onClick={() => addAndDeleteInFavs(product)} color={inFavs ? "secondary" : "default"} >
                  <BookmarkBorderIcon />
               </IconButton>
          <IconButton>
            <FavoriteIcon
              onClick={() => handleLike()}
           
              style={{ color: !like ? "black" : "red" }}
           
            />
          </IconButton>
        </CardActions>
      </Card>
    </Container>
  );
};



export default ItemCards;
