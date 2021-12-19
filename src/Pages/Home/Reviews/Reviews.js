import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Review from "../Review/Review";
import "./Reviews.css";
import { Link } from "react-router-dom";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://murmuring-depths-55393.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container maxWidth="md" style={{ marginBottom: "100px" }}>
      <Typography
        className="reviewHeader"
        gutterBottom
        variant="h4"
        component="div"
      >
        Recent Reviews from Customers
      </Typography>
      <hr />
      <br />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {reviews.slice(-3).map((review) => (
            <Grid item xs={12} md={4} style={{ marginBottom: "30px" }}>
              {" "}
              <Review review={review}></Review>{" "}
            </Grid>
          ))}
        </Grid>
      </Box>
      <button class="button-29" role="button">
        <Link
          to="/reviewAll"
          style={{ textDecoration: "none", color: "white" }}
        >
          View All Reviews
        </Link>
      </button>
    </Container>
  );
};

export default Reviews;
