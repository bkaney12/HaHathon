import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import React from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import TagFacesIcon from "@material-ui/icons/TagFaces";
import { makeStyles } from "@material-ui/core/styles";

import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  media: {
    height: 140,
    paddingTop: "56.25%",
  },
});

const cards = [1, 2, 3, 4, 5, 6, 7, 8];

const ItemCard = () => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={8} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image="https://ix-www.imgix.net/hp/snowshoe.jpg?q=70&w=1800&auto=compress%2Cenhance&fm=jpeg"
                  title="Image Title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" gutterBottom>
                    Item Title
                  </Typography>
                  <Typography>
                    Decription: Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Nisi, tempore?
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button>View</Button>
                  <IconButton>
                    <AddShoppingCartIcon />
                  </IconButton>
                  <IconButton>
                    <TagFacesIcon />
                  </IconButton>

                  <IconButton>
                    <GitHubIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ItemCard;
