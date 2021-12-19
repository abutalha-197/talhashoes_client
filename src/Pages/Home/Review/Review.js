import React from 'react';
import { Card, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material';

const Review = (props) => {
    const { review, rating } = props.review;
    return (
        <Grid item xs={4} sm={4} md={3}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0, textAlign: 'center', backgroundColor: '#006400' }}>

                <CardContent>

                    <Typography variant="h5" component="div" style={{ color: '#c0c0c0' }}>
                        {review}
                    </Typography>

                    <Rating name="half-rating-read" defaultValue={rating} readOnly />


                </CardContent>

            </Card>
        </Grid >
    );
};

export default Review;