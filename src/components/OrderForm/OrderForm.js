import { Button, Grid, Paper } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';
import React, { useState, useEffect } from 'react';
import './OrderForm.css';
import MyLink from '../../shared/MyLink';
import { useProducts } from '../../contexts/ItemsContext';

const OrderForm = () => {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    address: "",
    country: "",
    city: "",
    number: "",
  });
  const { cart, getCart, cartData } = useProducts();
  useEffect(() => {
    getCart();
  }, [cart]);

  const handleChange = (e) => {
    const values = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(values);
  };

  const handleSubmit = () => {
    if (
      !form.name &&
      !form.lastName &&
      !form.address &&
      !form.country &&
      !form.city &&
      !form.number
    ) {
      alert("fill all blanks");
      return;
    }
  };

  return (
    <>
      {cart && cart.decors && cartData ? (
        <Grid container className="order-container" spacing={6}>
          <Grid item md={4} sm={9}>
            <p className="order-title">ORDER SUMMARY</p>
            <Paper>
              {cart.decors.map((item) => (
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src={item.product.image}
                          style={{ width: "50px" }}
                        />
                      </td>
                      <td>
                        <p className="order-summary">{item.product.title}</p>
                      </td>
                      <td>
                        <i>{item.product.price}</i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ))}
              <h1>Total to pay : {cart.totalPrice}</h1>
            </Paper>
          </Grid>
          <Grid item md={5} sm={9}>
            <p className="order-title">SHIPPING ADDRESS</p>
            <form>
              <label>
                First Name
                <input
                  className="order-inp"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
              </label>
              <label>
                Last Name
                <input
                  className="order-inp"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </label>
              <label>
                Address
                <input
                  className="order-inp"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                />
              </label>
              <label>
                City
                <input
                  className="order-inp"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                />
              </label>
              <label>
                Phone Number
                <input
                  className="order-inp"
                  name="number"
                  value={form.number}
                  onChange={handleChange}
                />
              </label>
              <MyLink to="/payment-page">
                <Button
                  style={{
                    backgroundColor: blueGrey[500],
                    width: "200px",
                    height: "45px",
                  }}
                  variant="contained"
                  onClick={handleSubmit}
                >
                  Next
                </Button>
              </MyLink>
            </form>
          </Grid>
        </Grid>
      ) : (
        <>
          <Grid container className="order-container" spacing={6}>
            <Grid item md={4} sm={9}>
              <p className="order-title">You havent ordered yet</p>
            </Grid>
            <Grid item md={5} sm={9}>
              <p className="order-title">SHIPPING ADDRESS</p>
              <form>
                <label>
                  First Name
                  <input
                    className="order-inp"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Last Name
                  <input
                    className="order-inp"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Address
                  <input
                    className="order-inp"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  City
                  <input
                    className="order-inp"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Phone Number
                  <input
                    className="order-inp"
                    name="number"
                    value={form.number}
                    onChange={handleChange}
                  />
                </label>
                <MyLink to="/payment-page">
                  <Button
                    style={{
                      backgroundColor: blueGrey[500],
                      width: "200px",
                      height: "45px",
                    }}
                    variant="contained"
                    onClick={handleSubmit}
                  >
                    Next
                  </Button>
                </MyLink>
              </form>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default OrderForm;
