import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";
import React, { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useProducts } from "../../contexts/ItemsContext";
import MyLink from "../../shared/MyLink";

const useStyles = makeStyles((theme) => ({
  itemCategory: {
    fontSize: "18px",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    // [theme.breakpoints.up("xs")]: {
    //   display: "block",
    // },
  },
  userId: {
    fontSize: "20px",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
    },
  },
  signInBtn: {
    color: blueGrey[500],
    width: "200px",
    height: "45px",
  },
  title: {
    [theme.breakpoints.up("md")]: {
      fontSize: "22px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
    },
  },
}));

const CustomerAccount = () => {
  const { fav, getFav } = useProducts();
  const { user, registerUser } = useAuth();
  const classes = useStyles();
  console.log(fav);
  useEffect(() => {
    getFav();
  }, []);

  return (
    <>
      {user ? (
        <>
          <h2 className={classes.title}>MY ACCOUNT</h2>
          <Grid container>
            <Grid item md={4} sm={8} xs={12}>
              <h2 className={classes.title}>Contact Information</h2>
              <p className={classes.userId}>{user.displayName}</p>
              <p className={classes.userId}>{user.email}</p>
            </Grid>
            <Grid item md={5} sm={8} xs={12}>
              <h2 className={classes.title}>Saved products</h2>
              {fav && fav.products ? (
                <Paper>
                  <table>
                    <tbody>
                      {fav.products.map((item) => (
                        <tr>
                          <MyLink to={`/product/${item.product.id}`}>
                            <td>
                              <img
                                src={item.product.image}
                                style={{ width: "50px" }}
                              />
                            </td>
                            <td>
                              <p>{item.product.title}</p>
                            </td>
                            <td>
                              <i className={classes.itemCategory}>
                                {item.product.category}
                              </i>
                            </td>
                            <td>
                              <i>{item.product.price}</i>
                            </td>
                          </MyLink>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Paper>
              ) : null}
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <p className={classes.userId}>Sign up to get more benefits</p>
          <Button
            onClick={() => registerUser()}
            variant="contained"
            className={classes.signInBtn}
          >
            Sign up
          </Button>
        </>
      )}
    </>
  );
};

export default CustomerAccount;
