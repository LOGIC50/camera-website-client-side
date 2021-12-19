import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./Review.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const Review = (props) => {
  const { name, review, rating } = props.review;
  return (
    <Card className="review-card" style={{ height: "100%", margin: "auto" }}>
      <CardContent className="review-part">
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ color: "coral" }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ textAlign: "justify" }}
        >
          {review}
        </Typography>
        <Box
          style={{ margin: "auto" }}
          sx={{
            "& > legend": { mt: 2 },
          }}
        >
          <Typography component="legend">Rating</Typography>
          <Rating name="read-only" value={rating} readOnly />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Review;
