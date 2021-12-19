import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateOrders = () => {
    const { orderId } = useParams();
    const [orders, setOrders] = useState({});

    useEffect(() => {
        const url = `https://blooming-oasis-58661.herokuapp.com/orders/${orderId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);



    // update title
    const handletitleChange = e => {
        const updateTitle = e.target.value;
        const updateOrder = { title: updateTitle, price: orders.price };
        setOrders(updateOrder)
    }
    // update User Email 
    const handlePriceChange = e => {
        const updatePrice = e.target.value;
        const updateOrder = { title: orders.title, price: updatePrice };
        setOrders(updateOrder)
    }

    const handleUpdateOrders = e => {
        const url = `https://blooming-oasis-58661.herokuapp.com/orders/${orderId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated successfully')
                    setOrders({});
                }
            })
        e.preventDefault();
    }



    return (
        <div>
            <h2>This is Update Order {orderId}</h2>
            <h3>Title: {orders.title}</h3>
            <h3>Price: {orders.price}</h3>
            <form onSubmit={handleUpdateOrders}>


                <TextField
                    onChange={handletitleChange}
                    sx={{ width: '50%', m: 1 }}
                    id="standard-basic"
                    value={orders.title || ''}
                    type="text"
                    variant="standard"
                />
                <TextField
                    onChange={handlePriceChange}
                    sx={{ width: '50%', m: 1 }}
                    id="standard-basic"
                    value={orders.price || ''}
                    type="number"
                    variant="standard"
                />
                <Button variant="contained" type="submit" sx={{ width: '50%', marginLeft: '8px', m: 1 }}>Update</Button>


            </form>
        </div>
    );
};

export default UpdateOrders