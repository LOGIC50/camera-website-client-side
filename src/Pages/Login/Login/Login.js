import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory, Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Navbar from "../../../Shared/Navbar/Navbar";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { isLoading, loginUser, authError, user, signInWithGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  return (
    <>
      <Navbar></Navbar>
      <Container>
        <Grid container spacing={2}>
          <Grid sx={{ mt: 4 }} item xs={12} md={6}>
            <Typography variant="body1" gutterBottom>
              Login
            </Typography>
            {!isLoading && (
              <form onSubmit={handleLoginSubmit}>
                <TextField
                  // required
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Email"
                  name="email"
                  onBlur={handleOnChange}
                  variant="standard"
                />
                <TextField
                  // required
                  sx={{ width: "75%", m: 1 }}
                  type="password"
                  id="standard-basic"
                  label="Your Password"
                  name="password"
                  onBlur={handleOnChange}
                  variant="standard"
                />
                <Button
                  type="submit"
                  sx={{ width: "75%", m: 1 }}
                  variant="contained"
                >
                  Login
                </Button>
                <NavLink style={{ textDecoration: "none" }} to="/register">
                  <Button sx={{ width: "75%", m: 1 }} variant="text">
                    New User? Please Register
                  </Button>
                </NavLink>
              </form>
            )}
            <p>------------------------------------------</p>
            <Button
              onClick={handleGoogleSignIn}
              sx={{ width: "75%", m: 1 }}
              variant="contained"
            >
              Google Sign In
            </Button>
            <br />
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">Login successfully</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              style={{ width: "100%" }}
              src="https://imgs.bharatmatrimony.com/bmimgs/login/login-otp-banner.png"
              alt=""
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Login;
