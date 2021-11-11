import React, { useEffect, useState } from 'react';
// import Product from '../Product/Product';
// import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Product from '../Home/Product/Product';

const ExpolreProducts = () => {
    const [products, setProducts] = useState([]);



    useEffect(() => {
        fetch('https://murmuring-depths-55393.herokuapp.com/products')
    .then(res => res.json())
    .then(data => setProducts(data))
    }, []);

    return (
        <Container maxWidth="md">
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        
        {
                products.map(product =><Grid item xs={12} md={4}> <Product
                product={product}></Product> </Grid>)
            }
        
      </Grid>
    </Box>
    </Container>
    );
};

export default ExpolreProducts;