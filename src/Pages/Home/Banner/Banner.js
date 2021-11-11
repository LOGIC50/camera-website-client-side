// import React from 'react';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Banner = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <h1>Capture Your Moment</h1>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src="https://w7.pngwing.com/pngs/327/609/png-transparent-canon-eos-7d-camera-designer-banner-digital-data-jd-com-creative-digital-camera-ad-element-electronics-lens-camera-lens-thumbnail.png" alt="" />
          </Grid>
        </Grid>
      </Box>
    );
};

export default Banner;