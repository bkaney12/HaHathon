import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useProducts } from '../../contexts/ItemsContext';
import { blueGrey } from '@material-ui/core/colors';
import CreateIcon from '@material-ui/icons/Create';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import MyLink from "../../shared/MyLink";
import { checkItemInCart } from "../../utils/check-cart";
import {
  ImageWithZoom,
  Slider,
  CarouselProvider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { Badge } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
  data_container: {
    [theme.breakpoints.up('md')]: {
      margin: "60px",
    },
  },
  text: {
    display: "block",
    fontSize: "24px",
  },
  img: {
    width: "400px",
    marginLeft: "200px",
  },
  notes: {
    fontSize: "20px",
    margin: "10px 100px 10px 0",
  },
  actions: {
    justifyContent: "space-between",
  },
  carousel: {
    position: 'relative'
  },
  sliderBtn: {
    position: 'absolute',
    bottom: 0,
    left: '350px',
    opacity: '0.5',
  }
}));

const ItemsDetails = () => {
  // const [like, setLike] = useState(0);
  // const [isLiked, setIsLiked] = useState(false);
  const { fetchOneProduct, productDetails, deleteProduct, addToCart } = useProducts();
  const { id } = useParams();


  const cart = JSON.parse(localStorage.getItem("cart")) ?? false;
    // console.log(cart.decors);

  const isItemInCart = () => {
    if (cart) {
      return checkItemInCart(cart.decors, cart.decors.product.id);
    }
    return false;
  };

  const navigate = useNavigate();

  useEffect(() => {
      fetchOneProduct(id)
  }, [id]);

  const classes = useStyles();

  const handleReverse = () => {
    deleteProduct(id);
    navigate("/");
  };

  // const handleLike = () => {
  //   setLike(isLiked ? like - 1 : like + 1)
  //   setIsLiked(!isLiked)
  // }


  return (
    <Grid container>
      {productDetails ? (
        <Grid container className={classes.data_container}>
          <Grid item md={6} >
            <CarouselProvider
              naturalSlideWidth={100} 
              naturalSlideHeight={135} 
              totalSlides={3}
              className={classes.carousel}
            >
              <Slider className={classes.img}>
                <Slide index={0}>
                  <ImageWithZoom src={productDetails.image} />
                </Slide>
                <Slide index={1}>
                  <ImageWithZoom src={productDetails.image2} />
                </Slide>
                <Slide index={2}>
                  <ImageWithZoom src={productDetails.image3} />
                </Slide>
              </Slider>
              <div className={classes.sliderBtn}>
                <ButtonBack> <KeyboardArrowLeftIcon/> </ButtonBack>
                <ButtonNext> <KeyboardArrowRightIcon/> </ButtonNext>
              </div>
            </CarouselProvider>
          </Grid>

          <Grid item md={4}>
            <Card>
              <CardContent>
                <h1>{productDetails.title}</h1>
                <i className={classes.text}>Price: {productDetails.price}</i>
                <i className={classes.text}>
                  Category: christmas {productDetails.category}
                </i>
                <h2>Byuer's notes</h2>
                <p className={classes.notes}>{productDetails.notes}</p>
                <MyLink to="/cart">
                  <IconButton>
                    <Button
                      style={{ color: blueGrey[500], marginBottom: 0 }}
                      variant="contained"
                      onClick={() => addToCart(productDetails)}
                    >
                      Add to Basket
                    </Button>
                  </IconButton>
                </MyLink>
              </CardContent>
              <CardActions className={classes.actions}>
                <IconButton aria-label="add to favorites">
                  <Badge badgeContent={7} color="primary">
                    <FavoriteIcon />
                  </Badge>
                </IconButton>
                <IconButton>
                  <ChatBubbleOutlineIcon />
                </IconButton>
                <IconButton onClick={() => handleReverse(deleteProduct(id))}>
                  <DeleteIcon />
                </IconButton>
                <IconButton>
                  <MyLink to={`/edit/${productDetails.id}`}>
                    <CreateIcon />
                  </MyLink>
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      ) : null}
    </Grid>
  );
};


export default ItemsDetails;
