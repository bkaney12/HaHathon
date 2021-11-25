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

const useStyles = makeStyles({
  media: {
    height: 140,
    paddingTop: "56.25%",
  },
  card: {
    height: "100%",
  },
  cardGrid: {
    height: "100%",
  },
  cardContent: {
    minHeight: "140px",
  },
});

const ItemCards = ({ product }) => {
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
