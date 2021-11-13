import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navbar from '../../../Shared/Navbar/Navbar';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {registerUser, isLoading, user, authError} = useAuth();
    const history = useHistory();

    // const {registerUser, isLoading, user, authError} = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert ('Your password did not match')
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
        
    }

    return (
        <>
        <Navbar></Navbar>
        <Container>
        <Grid container spacing={2}>
        <Grid sx={{mt:8}} item xs={12} md={6}>
        <Typography variant="body1" gutterBottom>Register</Typography>
      {!isLoading && <form onSubmit={handleLoginSubmit}>
        <TextField 
        required
            sx={{width:'75%', m:1}}
            id="standard-basic" 
            label="Your Name"
            name="name"
            type="text"
            onBlur={handleOnBlur} 
            variant="standard" />
        <TextField 
        required
            sx={{width:'75%', m:1}}
            id="standard-basic" 
            label="Your Email"
            name="email"
            type="email"
            onBlur={handleOnBlur} 
            variant="standard" />
        <TextField 
        required
            sx={{width:'75%', m:1}}
            type="password"
            id="standard-basic" 
            label="Your Password" 
            name="password"
            onBlur={handleOnBlur} 
            variant="standard" />
        <TextField 
        required
            sx={{width:'75%', m:1}}
            type="password"
            id="standard-basic" 
            label="Confirm Password" 
            name="password2"
            onBlur={handleOnBlur} 
            variant="standard" />
            <Button type='submit' sx={{width:'75%', m:1}} variant='contained'>Register</Button>
            <NavLink style={{textDecoration:"none"}} to="/login"><Button sx={{width:'75%', m:1}} variant='text'>Already Registered? Please Login</Button></NavLink>
        </form>}
        {isLoading && <CircularProgress />}
        {user?.email && <Alert severity="success">User Created successfully</Alert>}
        {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
            <img  style={{width: "100%"}} src='https://imgs.bharatmatrimony.com/bmimgs/login/login-otp-banner.png' alt="" />
        </Grid>
        </Grid>
    </Container>
        </>
    );
};

export default Register;
