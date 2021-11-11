import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Product = (props) => {
    const {model, img, description, price, brand, type } = props.product;
    return (
        <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {brand}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {model}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href="/purchase"><Button size="small" color="primary">
          Buy Now
        </Button></a>
      </CardActions>
    </Card>
    );
};

export default Product;