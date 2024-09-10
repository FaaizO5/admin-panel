import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

const Form = ({ handleFormSubmit, handleCloseForm }) => {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [cost, setCost] = useState("");
  const [price, setPrice] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    handleFormSubmit({
      name: productName,
      Quantity: quantity,
      Cost: cost,
      Price: price,
    });

    setProductName("");
    setQuantity("");
    setCost("");
    setPrice("");
  };

  return (
    <Box>
      <form onSubmit={onSubmit}>
        <TextField
          fullWidth
          label="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Submit
        </Button>
        <Button onClick={handleCloseForm} sx={{ mt: 2, ml: 2 }}>
          Cancel
        </Button>
      </form>
    </Box>
  );
};

export default Form;
