import React, { useState } from 'react';
import { Alert, Button, Card, CardContent, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
// import login from '../../../images/login.png'
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { registerUser, isLoading, user, authError } = useAuth();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }

    const handleRegister = e => {
        if (loginData.password !== loginData.password2) {
            alert("Didn't matched the password")
            return;

        }
        registerUser(loginData.email, loginData.password, loginData.name, history);

        e.preventDefault();
    }
    return (
        <div>
            <Navigation></Navigation>
            <Card style={{ backgroundColor: '#fff', width: '65%', margin: '30px auto', height: '75vh' }}>
                <CardContent>
                    <Container>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12} style={{ textAlign: 'center' }}>
                                <Typography variant="h4" gutterBottom sx={{ mt: 6 }}>
                                    Register
                                </Typography>
                                {!isLoading && <form onSubmit={handleRegister}>
                                    <TextField
                                        onChange={handleOnChange}
                                        sx={{ width: '75%', m: 1 }}
                                        id="standard-basic"
                                        label="Your Name"
                                        name="name"
                                        type="text"
                                        variant="standard"
                                    />
                                    <TextField
                                        onChange={handleOnChange}
                                        sx={{ width: '75%', m: 1 }}
                                        id="standard-basic"
                                        label="Your Email"
                                        name="email"
                                        type="email"
                                        variant="standard"
                                    />

                                    <TextField
                                        onChange={handleOnChange}
                                        sx={{ width: '75%', m: 1 }}
                                        id="standard-basic"
                                        label="Your Password"
                                        variant="standard"
                                        type="password"
                                        name="password"
                                    />
                                    <TextField
                                        onChange={handleOnChange}
                                        sx={{ width: '75%', m: 1 }}
                                        id="standard-basic"
                                        label="ReType Your Password"
                                        variant="standard"
                                        type="password"
                                        name="password2"
                                    />
                                    <Button variant="contained" type="submit" sx={{ width: '75%', marginLeft: '8px', m: 1 }}>Register</Button>
                                    <br />
                                    <NavLink to="/login" style={{ textDecoration: 'none', marginLeft: '10px' }}>Already registerd?Please Login.</NavLink>
                                </form>}
                                {
                                    isLoading && <CircularProgress style={{ marginLeft: "200px", marginTop: '100px' }} />
                                }
                                {
                                    user?.email && <Alert severity="success">Congratulation you are added succesfully!</Alert>

                                }
                                {
                                    authError && <Alert variant="outlined" severity="error">
                                        {authError}
                                    </Alert>
                                }
                            </Grid>
                            <Grid item xs={12} md={6}>
                                {/* <img src={login} alt="" style={{ width: '100%' }} /> */}
                            </Grid>

                        </Grid>
                    </Container>
                </CardContent>

            </Card>
            <Footer></Footer>
        </div >
    );
};

export default Register;