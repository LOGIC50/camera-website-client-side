import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Product from '../Home/Product/Product';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';

const ExpolreProducts = () => {
    const [products, setProducts] = useState([]);



    useEffect(() => {
        fetch('https://murmuring-depths-55393.herokuapp.com/products')
    .then(res => res.json())
    .then(data => setProducts(data))
    }, []);

    return (
        <>
        <Navbar></Navbar>
        <Container maxWidth="md" style={{'margin': '50px auto'}}>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        
        {
                products.map(product =><Grid item xs={12} md={4}> <Product
                product={product}></Product> </Grid>)
            }
        
      </Grid>
    </Box>
    </Container>
    <Footer></Footer>
    </>
    );
};

export default ExpolreProducts;