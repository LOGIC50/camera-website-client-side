import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';

const Purchase = () => {
  const {productId} = useParams();
  const [product, setProduct] = useState({});
  // const {model, img, description, price, brand, type } = product;
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${productId}`)
    .then(res => res.json())
    .then(data => setProduct(data))
  }, [])
  return (
    <>
    <h2>This is booking: {productId}</h2>
    <h6>{product.model}</h6></>
    
  );
};

export default Purchase;