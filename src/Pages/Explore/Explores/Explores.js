import { Container, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import Explore from '../Explore/Explore';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';




const Explores = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://blooming-oasis-58661.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])






    return (
        <Box sx={{ flexGrow: 1 }}>
            <Navigation></Navigation>
            <Container>
                <Typography variant="h4" component="div" style={{ paddingTop: '60px', paddingBottom: '20px' }} sx={{ textAlign: 'center', fontWeight: '700', color: '#454545', m: 2 }}>
                    OUR PRODUCTS
                </Typography>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map(product => <Explore
                            key={product.name}
                            product={product}

                        ></Explore>)
                    }
                </Grid>
            </Container>
            <Box style={{ marginTop: '30px' }}>
                <Footer></Footer>
            </Box>

        </Box>
    );
};

export default Explores;