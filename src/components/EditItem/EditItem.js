import { Grid, Paper, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useProducts } from "../../contexts/ItemsContext";

const EditItem = () => {
  const { productDetails, fetchOneProduct, editItem } = useProducts();
  console.log(productDetails);
  const [form, setForm] = useState({
    title: productDetails.title,
    image: productDetails.image,
    image2: productDetails.image2,
    image3: productDetails.image3,
    price: productDetails.price,
    description: productDetails.description,
    notes: productDetails.notes,
    category: productDetails.category,
  });

  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetchOneProduct(id);
  }, []);

  useEffect(() => {
    setForm({
      title: productDetails.title,
      image: productDetails.image,
      image2: productDetails.image2,
      image3: productDetails.image3,
      price: productDetails.price,
      description: productDetails.description,
      notes: productDetails.notes,
      category: productDetails.category,
    });
  }, [productDetails]);

  const handleChange = (e) => {
    const values = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(values);
  };

  const handleEdit = () => {
    editItem({ ...form, id });
    navigate(`/product/${id}`);
  };
  return (
    <>
      <h1 align="center">Edit my product</h1>

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
              {/* <textarea
                type="text"
                placeholder="Description"
                name="description"
                onChange={handleChange}
                value={form.description}
              /> */}
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
                color="secondary"
                className="btn-add"
                onClick={handleEdit}
              >
                Save changes
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default EditItem;
