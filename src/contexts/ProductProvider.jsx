import React from "react";
import ProductsContext from "./ProductsContext";
function createData(name, Quantity, Cost, Price) {
  return { name, Quantity, Cost, Price };
}
const ProductProvider = ({ children }) => {
  const [products, setProducts] = React.useState([
    createData("Organic Almond Butter", 120, 8.5, 15),
    createData("Blueberry Muffins", 250, 7.5, 10),
    createData("Eclair", 262, 16.0, 24),
    createData("Cupcake", 305, 3.7, 67),
    createData("Dark Chocolate Bars", 356, 16.0, 49),
    createData("Herbal Green Tea", 130, 8.9, 19.99),
    createData("Vegan Protein Powder", 85, 10.0, 30),
    createData("Coconut Yogurt", 110, 12.5, 25),
    createData("Quinoa Chips", 500, 25.5, 50),
  ]);
  return (
    <>
      <ProductsContext.Provider value={{ products, setProducts }}>
        {children}
      </ProductsContext.Provider>
    </>
  );
};
export default ProductProvider;
