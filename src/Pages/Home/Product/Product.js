import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {model, img, description, price, brand, _id } = product;
    return (
        <Card  style={{'margin': '10px', 'height': '100%', 'display': 'flex', 'flexDirection': 'column'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          // height="200"
        
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{'color': 'lightCoral','fontWeight': '300', 'textAlign': 'right', 'fontSize': '18px'}}>
            {brand}
          </Typography>
          <Typography gutterBottom variant="h5" component="div" style={{'color': 'blue','fontWeight': '400'}}>
            {model}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{'textAlign': 'justify','fontWeight': '300'}}>
            {description}
          </Typography>
          <Typography gutterBottom variant="h5" component="div" style={{'color': 'darkBlue','fontWeight': '400', 'textAlign': 'left', 'fontSize': '18px', 'marginTop': '5px'}}>
            Price: {price}$
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
        <Link style={{'alignItems': 'center', 'textDecoration': 'none', 'backgroundColor': 'lightBlue', 'margin': 'auto', 'padding': '5px 20px', 'borderRadius': '5px', 'color': 'darkblue'}} to={`/purchase/${_id}`}>Purchase</Link>
      </CardActions>
    </Card>
    );
};

export default Product;