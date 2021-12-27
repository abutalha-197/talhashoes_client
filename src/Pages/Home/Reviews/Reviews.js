import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Review from '../Review/Review';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews } from '../../../redux/slices/poductSlice'





const Reviews = () => {
    // const [reviews, setReviews] = useState([]);

    // useEffect(() => {
    //     fetch('https://blooming-oasis-58661.herokuapp.com/reviews')
    //         .then(res => res.json())
    //         .then(data => setReviews(data))
    // }, [])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchReviews());
    }, [])


    const reviews = useSelector((state) => state.products.allReviews)
    return (
        <Box sx={{ flexGrow: 1 }} style={{ marginBottom: '30px' }}>
            <Container>
                <Typography variant="h4" component="div" style={{ paddingTop: '60px', paddingBottom: '30px' }} sx={{ textAlign: 'center', fontWeight: '700', color: '#454545', m: 2 }}>
                    Customers Reviews
                </Typography>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}

                        ></Review>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Reviews;