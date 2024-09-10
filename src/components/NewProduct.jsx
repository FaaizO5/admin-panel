import React, { useState, useContext } from "react";
import { Box, Button, Modal } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ProductsContext from "../contexts/ProductsContext";
import Form from "./Form";

function NewProduct() {
  const [showForm, setShowForm] = useState(false);
  const { products, setProducts } = useContext(ProductsContext);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleFormSubmit = (newProduct) => {
    setProducts([...products, newProduct]);
    setShowForm(false);
  };

  return (
    <>
      <Button
        startIcon={<AddShoppingCartIcon fontSize="small" />}
        variant="contained"
        onClick={handleOpenForm}
      >
        Add Product
      </Button>

      <Modal
        open={showForm}
        onClose={handleCloseForm}
        aria-labelledby="add-product-modal"
        aria-describedby="add-product-form"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Form
            handleFormSubmit={handleFormSubmit}
            handleCloseForm={handleCloseForm}
          />
        </Box>
      </Modal>
    </>
  );
}

export default NewProduct;
