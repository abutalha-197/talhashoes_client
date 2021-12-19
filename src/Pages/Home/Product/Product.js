import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { title, description, img, price, _id } = props.product;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, boxShadow: 0, textAlign: 'center' }} style={{ border: '1px solid #E1E1E1', borderRadius: '13px' }}>
                <Typography variant="h5" component="div" style={{ marginRight: '290px', backgroundColor: '#EB3E32', color: 'white' }}>
                    ${price}
                </Typography>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '180px', margin: '0 auto', paddingTop: '50px' }}
                    image={img}
                    alt="Paella dish"
                />
                <CardContent>


                </CardContent>



            </Card>
            <Typography variant="h5" component="div">
                {title}
            </Typography>

            <Typography variant="body2" color="text.secondary">
                {description}

            </Typography>

            <Link to={`/products/${_id}`}><Button variant="contained">add to cart</Button></Link>
            {/* <Button variant="outlined">add to cart</Button> */}
        </Grid>
    );
};

export default Product;