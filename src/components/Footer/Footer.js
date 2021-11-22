import {
  BottomNavigation,
  BottomNavigationAction,
  Typography,
} from "@material-ui/core";
import React from "react";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    paddingTop: "30px",
    backgroundColor: "brown",
  },
  main: {
    backgroundColor: "brown",
  },
});

const Footer = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      {/* <Typography variant="h5" align="center">
        I love winter
      </Typography> */}
      <div className={classes.main}>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          className={classes.root}
        >
          <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<LocationOnIcon />}
          />
          <BottomNavigationAction
            label="Folder"
            value="folder"
            icon={<FolderIcon />}
          />
        </BottomNavigation>
        <br />
        <Typography
          align="center"
          color="textSecondary"
          component="p"
          variant="subtitle1"
          paddingTop="10px"
        >
          Winter Time <br /> HaHathon PROJECT <br />
          November 2021 @ll rights reserved
        </Typography>
      </div>
    </>
  );
};

export default Footer;
