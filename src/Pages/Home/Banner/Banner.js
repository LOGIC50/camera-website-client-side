import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Banner.css'

const Banner = () => {
    return (
        <Box sx={{ flexGrow: 1 }} className="box">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} style={{'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center', 'justifyContent': 'center'}}>
            <h4 style={{'fontWeight': '400'}}>Capture Your Moment With</h4>
            <h1 style={{'fontSize': '3.5em', 'color': 'royalblue', 'fontWeight': '700'}}>LOGIC CAMERA STORE</h1>
          </Grid>
          <Grid item xs={12} md={6}>
            <img style={{'width': '80%'}} src="https://i.ibb.co/dPBN2vs/Photographer-occupation-vector-illustration-Flat-tiny-camera-picture-person-concept-Professional-dig.jpg" alt="" />
          </Grid>
        </Grid>
      </Box>
    );
};

export default Banner;