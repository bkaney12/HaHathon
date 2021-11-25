import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { useProducts } from "../../contexts/ItemsContext";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles({
  root: {
    width: 200,
    paddingLeft: "100px",
  },
  main: {
    marginTop: "20px",
    padding: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

function valuetext(value) {
  return `${value}°C`;
}

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },

  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const FilterPart = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  const [value, setValue] = useState([500, 10000]);

  const { fetchByParams } = useProducts();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFilterPrice = () => {
    fetchByParams("price_lte", value);
  };

  const [category, setCategory] = useState("");
  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <div className={classes.main}>
        <FormControl className={classes.margin}>
          {" "}
          <label
            for="demo-customized-select"
            style={{ fontSize: "20px", marginRight: "10px" }}
          >
            FILTER BY:
          </label>{" "}
        </FormControl>
        <FormControl className={classes.margin}>
          <Select
            style={{ width: "120px" }}
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={category}
            onChange={handleChangeCategory}
            onClick={(e) => fetchByParams("category", e.target.value)}
            input={<BootstrapInput />}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="trees">Trees</MenuItem>
            <MenuItem value="tree decorations">Tree decorations</MenuItem>
            <MenuItem value="lighting">Lighting</MenuItem>
            <MenuItem value="accessories">Accessories</MenuItem>
          </Select>
        </FormControl>

        <div className={classes.root}>
          <Typography id="range-slider" gutterBottom>
            Price range
          </Typography>
          <Slider
            min={200}
            max={20000}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
            onChangeCommitted={handleFilterPrice}
          />
        </div>
      </div>
    </>
  );
};

export default FilterPart;
