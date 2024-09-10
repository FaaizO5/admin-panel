import React from "react";
import BasicTable from "./Table";
import { Box } from "@mui/material";
import NewProduct from "./NewProduct";

const Products = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <NewProduct />
      <BasicTable />
    </Box>
  );
};

export default Products;
