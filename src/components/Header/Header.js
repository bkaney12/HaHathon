import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from "@material-ui/icons";
import Badge from "@material-ui/core/Badge";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import {
  Box,
  Button,
  ClickAwayListener,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Link,
  Paper,
  TextField,
} from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';
import MyLink from "../../shared/MyLink";
import { useNavigate } from "react-router";
import { useProducts } from "../../contexts/ItemsContext";

import Search from "../Search/Search";
import { useAuth } from "../../contexts/AuthContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // [theme.breakpoints.down("md")]: {
    //   height: "60px",
    // },
  },

  colorPrimary: {
    backgroundColor: theme.palette.secondary,
  },

  menuButton: {
    color: "white",
    marginRight: theme.spacing(1),
  },

  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  featuresPost: {
    minHeight: "180px",
    position: "relative",
    color: theme.palette.common.white,
    // marginBottom: theme.spacing(1),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  featuresPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: "20px",
    //   display: "none",
    // },
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay: "rgba(0,0,0.3)",
  },
  searchBox: {
    position: "absolute",
    top: "35px",
    zIndex: 999,
  },
  contentTitle: {
      fontSize: '22px',
    [theme.breakpoints.down('md')]: {
      fontSize: '14px'
    }
  },
  paragraph: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  }
}));

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open1 = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const { fetchSearchProducts } = useProducts();
  const navigate = useNavigate();
  const { cartData } = useProducts();
  const { registerUser, user, logOut } = useAuth();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickAdd = () => {
    navigate("/add");
  };

  const handleSearch = (e) => {
    fetchSearchProducts(e.target.value);
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: "crimson" }}>
          <Toolbar className={classes.colorPrimary}>
            <Box mr={2} ml={2}>
              <IconButton
                  aria-controls="fade-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MenuIcon />
              </IconButton>
              <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open1}
                onClose={handleClose1}
                TransitionComponent={Fade}
              >
                {
                  user ? (
                    <MenuItem onClick={() => logOut()}>Log Out</MenuItem>
                  ) : (
                    <MenuItem onClick={() => registerUser()}>Sign up</MenuItem>
                  )
                }
              </Menu>
            </Box>
            <MyLink to="/">
              <Typography className={classes.title} variant="h6" noWrap>
                WINTER IS COMING
              </Typography>
            </MyLink>

            <MyLink to="/cart">
              <IconButton
                aria-label="show 2 new mails"
                color="inherit"
                align="right"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Badge badgeContent={cartData} color="secondary">
                  <ShoppingBasket />
                </Badge>
              </IconButton>
            </MyLink>
            <MyLink to="/customers-account">
              <IconButton>
                <PersonIcon />
              </IconButton>
            </MyLink>
            <ClickAwayListener onClickAway={() => setSearchActive(false)}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  />
                </div>
                <InputBase
                  onFocus={() => setSearchActive(true)}
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  onChange={handleSearch}
                  inputProps={{ "aria-label": "search" }}
                />
                {searchActive && (
                  <div className={classes.searchBox}>
                    <Search />
                  </div>
                )}
              </div>
            </ClickAwayListener>

          </Toolbar>
        </AppBar>
      </div>
      <Paper
        className={classes.featuresPost}
        style={{
          backgroundImage: `url(https://wallpaperaccess.com/full/477328.jpg)`,
        }}
      >
        <Container fixed>
          <div className={classes.overlay} />
          <Grid container>
            <Grid item md={9} sm={12} xs={12}>
              <div className={classes.featuresPostContent}>
                <div className={classes.contentTitle}>
                  <i>it's all about</i>
                  <MyLink to="/">
                    <h2>CHRISTMAS</h2>
                  </MyLink>
                </div>
                <Typography component="h5" color="inherit" paragraph className={classes.paragraph}>
                  Transform every corner of your home this festive season with our collection of enchanting Christmas decorations. From stylish wicker tree skirts and whimsical felt friends, to Christmas window stickers, quaint ornaments and snow globes, here is a collection to truly deliver the Christmas magic this year.
                </Typography>

                <Button
                  className={classes.btn}
                  variant="contained"
                  color="secondary"
                  onClick={handleClickAdd}
                >
                  add an item
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </>
  );
}
