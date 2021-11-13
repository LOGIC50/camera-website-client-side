import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    const {user, logout} = useAuth();
    return (
        <nav class="navbar navbar-expand-lg navbar-light" style={{"background-color": "#e3f2fd"}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="/home">LOGIC CAMERA STORE</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/exploreCamera">Explore Camera</a>
        </li>
        {
            user?.email ?
        <Box>
                
                <a href="/home"><Button onClick={logout} color='inherit'>Logout</Button></a>
                <a href="/dashboard"><Button color='inherit'>Dashboard</Button></a>
                <span>{user.displayName}</span>
</Box>
            :
            <li class="nav-item">
          <a class="nav-link" href="/login">Login</a>
        </li>

        }
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Navbar;