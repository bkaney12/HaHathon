import { Grid, Paper, Button } from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useProducts } from "../../contexts/ItemsContext";
import "./AddNewItem.css";
import { blueGrey } from '@material-ui/core/colors';

const AddNewItem = () => {
  const { addItem } = useProducts();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    image: "",
    image2: "",
    image3: "",
    price: "",
    notes: "",
    category: "",
    notes: "",
  });
  const handleChange = (e) => {
    const values = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(values);
  };

  const AddNewItem = async () => {
    if (
      !form.title ||
      !form.image ||
      !form.price ||
      !form.notes ||
      !form.category ||
      !form.image2 ||
      !form.image3
    ) {
      alert("fill all blanks");
      return;
    }
    await addItem(form);
    navigate("/");
  };

  return (
    <>
      <div className="background">
        <h1 align="center">Add new product</h1>

        <Grid container className="main">
          <Grid item md={5}>
            <Paper className="paper">
              <form action="">
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  onChange={handleChange}
                  value={form.title}
                />
                <textarea
                  type="text"
                  placeholder="Notes"
                  name="notes"
                  onChange={handleChange}
                  value={form.notes}
                />
                <input
                  type="text"
                  placeholder="Image"
                  name="image"
                  onChange={handleChange}
                  value={form.image}
                />
                <input
                  type="text"
                  placeholder="Image2"
                  name="image2"
                  onChange={handleChange}
                  value={form.image2}
                />
                <input
                  type="text"
                  placeholder="Image3"
                  name="image3"
                  onChange={handleChange}
                  value={form.image3}
                />
                <input
                  type="text"
                  placeholder="Price"
                  name="price"
                  onChange={handleChange}
                  value={form.price}
                />
                <input
                  type="text"
                  placeholder="category"
                  name="category"
                  onChange={handleChange}
                  value={form.category}
                />
                <Button
                  variant="contained"
                  style={{backgroundColor: blueGrey[500]}}
                  className="btn-add"
                  onClick={AddNewItem}
                >
                  Add new item
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default AddNewItem;
