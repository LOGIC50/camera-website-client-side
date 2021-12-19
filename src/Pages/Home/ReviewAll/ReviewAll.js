import React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Review from "../Review/Review";
import Navbar from "../../../Shared/Navbar/Navbar";

const ReviewAll = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://murmuring-depths-55393.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <Container maxWidth="md" style={{ marginBottom: "100px" }}>
        <Typography
          className="reviewHeader"
          gutterBottom
          variant="h4"
          component="div"
        >
          All Reviews from Customers
        </Typography>
        <hr />
        <br />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {reviews.map((review) => (
              <Grid item xs={12} md={12} style={{ marginBottom: "30px" }}>
                {" "}
                <Review review={review}></Review>{" "}
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default ReviewAll;
