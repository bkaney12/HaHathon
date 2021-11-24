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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Cart = () => {
  const { cart, getCart, cartData, deleteProductFromCart } = useProducts();
  useEffect(() => {
    getCart();
  }, [cartData]);
  // console.log(cart);
  const classes = useStyles();

  return (
    <>
      {cart && cart.decors && cartData ? (
        <>
          {
            <Grid container>
              <Grid item md={8}>
                <Paper elevation={4}>
                  <h1>You have {cartData} item(s) in your cart :</h1>
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
                              Chrismas tree
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
                                type="number"
                                style={{ width: "25px" }}
                                value={1}
                                // onChange={(e) =>
                                //   handleCountChange(e.target, item.product.id)
                                // }
                              />
                            </TableCell>

                            <TableCell align="center">
                              {item.subPrice}
                              {/* 2000 */}
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
              <Grid item md={4}>
                <Paper
                  elevation={6}
                  style={{ marginLeft: "50px", marginTop: "100px" }}
                >
                  <Typography
                    variant="h5"
                    align="left"
                    style={{ padding: "30px" }}
                  >
                    Total price: {cart.totalPrice}
                  </Typography>
                  {/* ))} */}
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
        <h1>Ваша корзина пуста</h1>
      )}
    </>
  );
};

export default Cart;
