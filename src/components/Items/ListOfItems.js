import { Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import ItemCard from "./ItemCard";

const ListOfItems = () => {
  return (
    <>
      <div>
        <Container maxWidth="md">
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Ваш ждет сказочная зима
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            nisi iusto architecto mollitia, totam culpa officiis qui placeat
            natus dignissimos reiciendis quae praesentium maxime, cum non
            molestiae voluptatem, ducimus nobis!
          </Typography>
        </Container>
      </div>
      <div>
        <Grid container spacing={5} justify="center">
          <Grid item>
            <Button variant="contained" color="inherit">
              Start now
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">Learn more</Button>
          </Grid>
        </Grid>
      </div>
      <ItemCard />
    </>
  );
};

export default ListOfItems;
