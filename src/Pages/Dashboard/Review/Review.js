import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import './Review.css';

const Review = () => {
    const {user} = useAuth();
    const { register, handleSubmit } = useForm();
        const onSubmit = data => {
            console.log(data);
              axios.post('https://murmuring-depths-55393.herokuapp.com//reviews', data)
              .then(res => {
                  console.log(res);
        })
    }
    return (
        <div className='add-service'>
            <h1>Please Review Us</h1>
            <div className='input-portion'>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name") } Placeholder='Your Name' />
            <br />
            <textarea {...register("review")} Placeholder='Your review in word'/>
            <br />
            <input type="number" {...register("raing")} Placeholder='Rate us'/>
            <br />
            <input type="submit" />
            </form>
            </div>
        </div>
    );
};

export default Review;