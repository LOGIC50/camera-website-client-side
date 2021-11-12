import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
        const onSubmit = data => {
            console.log(data);
              axios.post('https://murmuring-depths-55393.herokuapp.com/products', data)
              .then(res => {
                  console.log(res);
        })
    }
    return (
        <div className='add-service'>
            <h1>Add a New Product</h1>
            <div className='input-portion'>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("brand", { required: true} ) } Placeholder='Camera Brand' />
            <br />
            <textarea {...register("description")} Placeholder='Camera Description'/>
            <br />
            <input type="number" {...register("price")} Placeholder='Camera Price'/>
            <br />
            <input {...register("img")} Placeholder='Camera img' />
            <br />
            <input {...register("type")} Placeholder='Camera Type'/>
            <br />
            <input {...register("model")} Placeholder='Camera Model'/>
            <br />
            <input type="submit" />
            </form>
            </div>
        </div>
    );
};
export default AddProduct;