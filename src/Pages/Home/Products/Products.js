import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://murmuring-depths-55393.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const size = 6;
  var productsSlice = products.slice(0, size);
  return (
    <Container maxWidth="md">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} style={{ marginBottom: "100px" }}>
          {productsSlice.map((product) => (
            <Grid item xs={12} md={4}>
              {" "}
              <Product product={product}></Product>{" "}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Products;
