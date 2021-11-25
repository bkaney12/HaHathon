import { Paper, Grid, Typography, Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useProducts } from "../../contexts/ItemsContext";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import MyLink from "../../shared/MyLink";

const useStyles = makeStyles((theme) => ({
  table: {

    [theme.breakpoints.down("md")]: {
      width: "300px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
  },
  paper: {
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
    [theme.breakpoints.down("md")]: {
      width: "350px",
    },
  },

  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
    },
  },

  paper1: {
    marginLeft: "50px",
    marginTop: "100px",
    [theme.breakpoints.down("sm")]: {
      width: "300px",
      padding: "10px",
      marginTop: "10px",
      marginLeft: "0px",
    },
  },
}));



const Cart = () => {
  const { cart, getCart, cartData, deleteProductFromCart,changeProductCount }  = useProducts();


  useEffect(() => {
    getCart();
  }, [cartData]);
  const classes = useStyles();
  const handleCountChange = ({ value }, id) => {
    changeProductCount(value, id);
  };

  return (
    <>
      {cart && cart.decors && cartData ? (
        <>
          {
            <Grid container>

              <Grid item md={8} sm={12} xs={12}>
                <Paper elevation={4} className={classes.paper}>
                  <h1 className={classes.title}>
                    You have {cartData} item(s) in your cart :
                  </h1>

                  <TableContainer>
                    <Table className={classes.table} aria-label="caption table">
                      <TableHead>
                        <TableRow>
                          <TableCell>
                            <h4>Title</h4>
                          </TableCell>
                          <TableCell align="center">Image</TableCell>
                          <TableCell align="center">Price</TableCell>
                          <TableCell align="center">Count</TableCell>
                          <TableCell align="center">SubTotal</TableCell>
                          <TableCell align="center"></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {cart.decors.map((item) => (
                          <TableRow>
                            <TableCell component="th" scope="">
                              {item.product.title}
                            </TableCell>
                            <TableCell align="center">
                              <img
                                src={item.product.image}
                                alt=""
                                style={{ width: "80px" }}
                              />
                            </TableCell>

                            <TableCell align="center">
                              {item.product.price}
                            </TableCell>
                            <TableCell align="center">
                              <input
                                min="1"
                                type="number"
                                style={{ width: "25px" }}

                                value={item.count}
                                onChange={(e) =>
                                  handleCountChange(e.target, item.product.id)
                                }

                              />
                            </TableCell>
                            <TableCell align="center">
                              {item.subPrice}
                            </TableCell>
                            <TableCell align="center">
                              <IconButton
                                align="center"
                                onClick={() =>
                                  deleteProductFromCart(item.product)
                                }
                              >
                                <DeleteIcon />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Grid>
              <Grid item md={4} sm={12}>

               <Paper elevation={6} className={classes.paper1}>

                  <Typography
                    variant="h5"
                    align="left"
                    style={{ padding: "30px" }}
                  >
                    Total price: {cart.totalPrice}
                  </Typography>
                  <br />
                  <MyLink to="/order">
                    <Button
                      style={{ width: "100%" }}
                      align="right"
                      variant="contained"
                      color="primary"
                    >
                      ORDER
                    </Button>
                  </MyLink>
                </Paper>
              </Grid>
            </Grid>
          }
        </>
      ) : (
        <h1>Cart is empty</h1>
      )}
    </>
  );
};

export default Cart;
