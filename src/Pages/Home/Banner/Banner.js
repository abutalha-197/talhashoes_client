import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import banner from '../../../images/banner1.webp'
import './Banner.css';


const shoesBanner = {
    background: `url(${banner})`,
    backgroundColor: 'rgba(45,58,74,0.8)',
    backgroundBlendMode: 'darken, luminosity',
    width: '100%',
    // height: '500px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',




}

const Banner = () => {
    return (
        <Box sx={{ width: 1 }}>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)">
                <Box gridColumn="span 12" style={shoesBanner}>
                    <Typography variant="h2" style={{ color: 'white', textAlign: 'center', marginTop: '100px', fontSize: '50px', fontWeight: '700', marginBottom: '30px' }}>
                        Talha Shoes
                    </Typography>
                    <Typography variant="h2" style={{ color: 'white', textAlign: 'center', fontSize: '36px', fontWeight: '500' }}>
                        Welcome to Online Shop Talha Shoes - Shoes
                    </Typography>

                    <Typography variant="h1" style={{ color: 'white', textAlign: 'center', fontSize: '16px', fontWeight: '400', lineHeight: '26px', marginTop: '20px' }}>
                        Talha Shoes – Shoes have very qualityfull shoes.
                    </Typography>
                    <Box style={{ textAlign: 'center', marginTop: '30px', paddingBottom: '50px' }}>
                        <Button className="banner-btn" style={{ fontSize: '14px', padding: '8px 13px', height: '34px', border: '2px solid #ffffff', borderRadius: '50px', color: 'white', fontWeight: '500', lineHeight: '24px', textTransform: 'uppercase' }}>view more</Button>
                    </Box>

                </Box>


            </Box>
        </Box>
    );
};

export default Banner;