import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://murmuring-depths-55393.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])

    const handleDelete = id => {
        const url = `https://murmuring-depths-55393.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('Successfully Deleted');
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining)
            }
        })
    }
    return (
        <div>
            <h1>Manage Products List</h1>
            {
                products.map(product => <div key={products._id}>
                    <h5>{product.model}</h5>
                    <button onClick={() => handleDelete(product._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageProducts;