import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router';
import TextField from '@mui/material/TextField';
import { Button, Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

export const Purchase = () => {
  const {productId} = useParams();
  const [product, setProduct] = useState({});
  const [order, setOrder] = useState({});
  const {user} = useAuth();
  useEffect(() => {
    fetch(`https://murmuring-depths-55393.herokuapp.com/products/${productId}`)
    .then(res => res.json())
    .then(data => setProduct(data))
  }, [])

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = {...order};
    newInfo[field] = value;
    // console.log(newInfo);
    setOrder(newInfo);
  }
  const handlePruchaseSubmit = e => {
    const orderData = {
      ...order,
      productName: product.model,
      productPrice: product.price,

    }
    console.log(orderData);
    // send data to server
    fetch('https://murmuring-depths-55393.herokuapp.com/order', {
      method: 'POST',
      headers: {
        "content-type": 'application/json'
      },
      body: JSON.stringify(orderData)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    e.preventDefault();
  }
    
  return (
     <Container>
       <Box sx={{ flexGrow: 1 }} style={{'width': '70%', 'margin': 'auto', 'marginTop': '50px'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div>
          <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={product.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{'color': 'lightCoral','fontWeight': '300', 'textAlign': 'right', 'fontSize': '18px'}}>
          {product.brand}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {product.model}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{'textAlign': 'justify','fontWeight': '300'}}>
          {product.description}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{'color': 'darkBlue','fontWeight': '400', 'textAlign': 'left', 'fontSize': '18px', 'marginTop': '5px'}}>
          Price: {product.price}$
        </Typography>
      </CardContent>
    
    </Card>
          </div>
        </Grid>
        <Grid item xs={12} md={6} style={{'margin': 'auto 0px'}}>
        <form onSubmit={handlePruchaseSubmit} >
    <TextField
        required
        sx={{width: '95%', m: 1}}
        id="outlined-size-small"
        name='displayName'
        onBlur={handleOnBlur}
        defaultValue='Your Name'
        size="small"
      />
    <TextField
        required
        sx={{width: '95%', m: 1}}
        id="outlined-size-small"
        name='email'
        onBlur={handleOnBlur}
        defaultValue='Your Email'
        size="small"
      />
    <TextField
        required
        sx={{width: '95%', m: 1}}
        id="outlined-size-small"
        name='contact'
        onBlur={handleOnBlur}
        defaultValue='Your Contact Number'
        size="small"
      />
      <Link to='/dashboard'><Button type="submit" variant="contained">Place Order</Button></Link>
      <br />
      <br />
      <Link style={{'textDecoration': 'none'}} to='/home'>Go to Home</Link>
    </form>
        </Grid>
      </Grid>
    </Box>
     </Container> 
  );
};

export default Purchase;