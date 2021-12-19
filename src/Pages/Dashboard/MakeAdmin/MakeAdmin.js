import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };

        fetch('https://blooming-oasis-58661.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {

                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setEmail('')
                    setSuccess(true)
                }

            })



        e.preventDefault();
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField

                    sx={{ width: '75%', m: 1 }}
                    onBlur={handleOnBlur}
                    label="Email"
                    name="email"
                    type="email"
                    variant="standard"
                />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {
                success && <Alert severity="success">Made admin succesfully!</Alert>

            }
        </div>
    );
};

export default MakeAdmin;