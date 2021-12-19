import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Button } from '@mui/material';

const Navigation = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { user, logOut } = useAuth()


    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box sx={{ flexGrow: 1 }} >

            <AppBar position="static" style={{ backgroundColor: '#5d4037' }}>
                <Toolbar>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Talha Shoes
                    </Typography>

                    <div>
                        {isMobile ? (
                            <>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2, }}
                                    onClick={handleMenu}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}><NavLink style={{ textDecoration: 'none' }} to="/home">Home</NavLink></MenuItem>

                                    <MenuItem onClick={handleClose}> <NavLink style={{ textDecoration: 'none' }} to="/explore">Explore</NavLink></MenuItem>
                                    <MenuItem onClick={handleClose}> <NavLink style={{ textDecoration: 'none' }} to="/dashboard">Dashboard</NavLink></MenuItem>
                                    {user?.email ?
                                        <Button onClick={logOut} color="inherit" >Logout</Button>
                                        :
                                        <MenuItem onClick={handleClose}> <NavLink style={{ textDecoration: 'none' }} to="/login" >Login</NavLink></MenuItem>
                                    }
                                </Menu> </>)
                            : (
                                <div>
                                    <NavLink style={{ textDecoration: 'none', color: 'white', marginRight: '10px' }} to="/home">Home</NavLink>

                                    <NavLink style={{ textDecoration: 'none', color: 'white', marginRight: '10px' }} to="/explore">Explore</NavLink>
                                    <NavLink style={{ textDecoration: 'none', color: 'white', marginRight: '10px' }} to="/dashboard">Dashboard</NavLink>
                                    {user?.email ?
                                        <Button onClick={logOut} color="inherit" >Logout</Button>
                                        :
                                        <NavLink style={{ textDecoration: 'none', color: 'white', marginRight: '10px' }} to="/login" >Login</NavLink>
                                    }
                                </div>

                            )

                        }

                    </div>

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;