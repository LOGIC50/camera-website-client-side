import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style={{ "background-color": "#e3f2fd" }}
    >
      <div class="container-fluid">
        <Link class="navbar-brand" to="/home">
          LOGIC CAMERA STORE
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/exploreCamera">
                Explore Camera
              </Link>
            </li>
            {user?.email ? (
              <Box>
                <Link
                  to="/home"
                  style={{
                    textDecoration: "none",
                    color: "brown",
                  }}
                >
                  <Button onClick={logout} color="inherit">
                    Logout
                  </Button>
                </Link>
                <Link
                  to="/dashboard"
                  style={{ textDecoration: "none", color: "brown" }}
                >
                  <Button color="inherit">Dashboard</Button>
                </Link>
                <span>User Name: {user.displayName}</span>
              </Box>
            ) : (
              <li class="nav-item">
                <Link class="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
