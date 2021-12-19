import { Alert, Button, Card, CardContent, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';



const LogIn = () => {

    const [loginData, setLoginData] = useState({});
    const { loginUser, user, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }

    const handleLogIn = e => {

        loginUser(loginData.email, loginData.password, location, history);

        e.preventDefault();
    }
    return (
        <div style={{ backgroundColor: '#F7F7F7' }}>
            <Navigation></Navigation>

            <Box>
                <Card style={{ backgroundColor: '#fff', width: '65%', margin: '30px auto', height: '75vh' }}>
                    <CardContent>
                        <Container>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} md={12} style={{ textAlign: 'center', paddingTop: '100px' }}>
                                    <Typography variant="h4" gutterBottom sx={{}}>
                                        Login
                                    </Typography>
                                    <form onSubmit={handleLogIn}>
                                        <TextField
                                            onChange={handleOnChange}
                                            sx={{ width: '50%', m: 1 }}
                                            id="standard-basic"
                                            label="Email"
                                            name="email"
                                            type="email"
                                            variant="standard"
                                        />

                                        <TextField
                                            onChange={handleOnChange}
                                            sx={{ width: '50%', m: 1 }}
                                            id="standard-basic"
                                            label="Password"
                                            variant="standard"
                                            type="password"
                                            name="password"
                                        />
                                        <Button variant="contained" type="submit" sx={{ width: '50%', marginLeft: '8px', m: 1, borderRadius: '8%' }}>Login</Button>
                                        <br />
                                        <NavLink to="/register" style={{ textDecoration: 'none', marginLeft: '10px' }}>New user?Please Register.</NavLink>
                                    </form>
                                    {
                                        isLoading && <CircularProgress style={{ marginLeft: "200px", marginTop: '100px' }} />
                                    }
                                    {
                                        user?.email && <Alert severity="success">Congratulation you are login succesfully!</Alert>

                                    }
                                    {
                                        authError && <Alert variant="outlined" severity="error">
                                            {authError}
                                        </Alert>
                                    }
                                </Grid>


                            </Grid>
                        </Container>
                    </CardContent>

                </Card>
            </Box>

            <Footer></Footer>
        </div>
    );
};

export default LogIn;