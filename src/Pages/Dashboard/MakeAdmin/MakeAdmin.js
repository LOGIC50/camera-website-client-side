import { TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = {email};
        fetch('https://murmuring-depths-55393.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        e.preventDefault()
    }
    return (
        <div>
            <h1>Make an admin</h1>
            <form onSubmit={handleAdminSubmit}>
            <TextField 
            label="Email"
            type='email' 
            onBlur={handleOnBlur}
            variant="outlined" />
            <br />
            <button variant='contained' 
            type='submit'>Make Admin</button>
            </form>
        </div>
    );
};

export default MakeAdmin;