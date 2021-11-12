// import React from 'react';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './Banner.css'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Banner = () => {
    return (
        <Box sx={{ flexGrow: 1 }} className="box">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} className='banner-text'>
            <h3>Capture Your Moment With</h3>
            <h1>LOGIC CAMERA STORE</h1>
          </Grid>
          <Grid item xs={12} md={6}>
            <img style={{'width': '80%'}} src="https://www.pngkey.com/png/full/801-8013177_image-canon-5d-dslr-camera-png.png" alt="" />
          </Grid>
        </Grid>
      </Box>
    );
};

export default Banner;