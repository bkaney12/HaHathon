import {
  Button,
  Card,
  ClickAwayListener,
  Grid,
  Paper,
  Slide,
} from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./PaymentForm.css";
import { useNavigate } from "react-router";
import { blueGrey } from "@material-ui/core/colors";

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

const PaymentForm = () => {
  const [form, setForm] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  });
  const [focus, setFocus] = useState("");
  const [open, setOpen] = useState(false);
  const [transition, setTransition] = useState(undefined);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const values = {
      ...form,
      [e.target.name]: e.target.value,
    };

    setForm(values);
  };

  const handleClick = (Transition) => () => {
    if (!form.number && !form.name && !form.expiry && !form.cvc) {
      alert("fill all blanks");
      return;
    }
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    // setOpen(false);
    navigate("/");
  };

  return (
    <>
      <Grid container spacing={4} className="main">
        <Grid item md={5} xs={12}>
          <Paper>
            <h1>Enter your payment details</h1>
            <div className="card-wrapper">
              <Cards
                id="PaymentForm"
                cvc={form.cvc}
                expiry={form.expiry}
                focused={focus}
                name={form.name}
                number={form.number}
                className="card"
              />
            </div>
            <form>
              <input
                className="number form-inp"
                type="tel"
                name="number"
                placeholder="Card Number"
                value={form.number}
                onChange={handleChange}
                onFocus={(e) => setFocus(e.target.name)}
              />
              <input
                className="number form-inp"
                type="text"
                name="name"
                placeholder="Card Holder's Name"
                value={form.name}
                onChange={handleChange}
                onFocus={(e) => setFocus(e.target.name)}
              />
              <input
                className="form-inp"
                width="60px"
                type="tel"
                name="expiry"
                placeholder="Valid Thru"
                value={form.expiry}
                onChange={handleChange}
                onFocus={(e) => setFocus(e.target.name)}
              />
              <input
                className="cvc inp"
                type="tel"
                name="cvc"
                placeholder="CVC"
                value={form.cvc}
                onChange={handleChange}
                onFocus={(e) => setFocus(e.target.name)}
              />
            </form>

            <Button
              variant="contained"
              style={{ backgroundColor: blueGrey[500], width: "100%" }}
              onClick={handleClick(TransitionUp)}
            >
              PAY
            </Button>
            <Snackbar
              open={open}
              onClose={handleClose}
              TransitionComponent={transition}
              message="Payment ✅"
              key={transition ? transition.name : ""}
            />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default PaymentForm;
