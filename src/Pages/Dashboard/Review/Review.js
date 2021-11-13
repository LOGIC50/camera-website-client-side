import axios from 'axios';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useForm } from 'react-hook-form';
import './Review.css';
import { Alert } from '@mui/material';

const Review = () => {
    const { register, handleSubmit } = useForm();
    const [success, setSuccess] = useState(false);
        const onSubmit = data => {
            console.log(data);
              axios.post('https://murmuring-depths-55393.herokuapp.com/reviews', data)
              .then(res => {
                  if(data.rating){
                    console.log(data);
                    setSuccess(true);
                  }
        })
    }
    return (
        <Box sx={{ flexGrow: 1 }} style={{'width': '100%', 'margin': 'auto'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} className="admin-form">
        <div className='review-us'>
            <h2>Please Review Us</h2>
            <div className='input-portion'>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name") } Placeholder='Your Name' />
            <br />
            <textarea {...register("review")} Placeholder='Your review in word'/>
            <br />
            <input type="number" {...register("rating")} Placeholder='Rate us out of 5'/>
            <br />
            <input type="submit" />
            </form>
            
            </div>
            {success && <Alert severity="success">Thanks for review us</Alert>}
        </div>
        
        </Grid>
        <Grid item xs={12} md={6} className='add-product-image'>
          <img style={{'width': '70%'}} src="https://i.ibb.co/0ZXvwfP/review.jpg" alt="" />
        </Grid>
      </Grid>
    </Box>
        
    );
};

export default Review;