import { Alert, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const {token} = useAuth();
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = {email};
        fetch('https://murmuring-depths-55393.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                console.log(data);
                setSuccess(true);
            }
            
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
            {success && <Alert severity="success">Make admin Successfully</Alert>}
        </div>
    );
};

export default MakeAdmin;