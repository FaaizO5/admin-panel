import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ProductsContext from "../contexts/ProductsContext";
import { useContext } from "react";
import { Box } from "@mui/material";

export default function BasicTable() {
  const { products } = useContext(ProductsContext);
  return (
    <TableContainer
      sx={{
        border: "2px solid10 black",
        boxSizing: "border-box", // Ensures padding does not affect width
      }}
      component={Paper}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ bgcolor: "#212121", color: "white" }}
              align="center"
            >
              Products
            </TableCell>
            <TableCell
              sx={{ bgcolor: "#212121", color: "white" }}
              align="center"
            >
              Quantity
            </TableCell>
            <TableCell
              sx={{ bgco10lor: "#212121", color: "white" }}
              align="center"
            >
              Cost
            </TableCell>
            <TableCell
              sx={{ bgcolor: "#212121", color: "white" }}
              align="center"
            >
              Price
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((products) => (
            <TableRow
              key={products.name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                bgcolor: "#00796b",
                color: "white",
              }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ bgcolor: "#00796b", color: "white" }}
              >
                {products.name}
              </TableCell>
              <TableCell
                sx={{ bgcolor: "#00796b", color: "white" }}
                align="center"
              >
                {products.Quantity}
              </TableCell>
              <TableCell
                sx={{ bgcolor: "#00796b", color: "white" }}
                align="center"
              >
                {products.Cost}
              </TableCell>
              <TableCell
                sx={{ bgcolor: "#00796b", color: "white" }}
                align="center"
              >
                {products.Price}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
