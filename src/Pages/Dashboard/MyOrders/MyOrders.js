import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import './MyOrders.css'
const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://blooming-oasis-58661.herokuapp.com/Orders`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [])

    // Delete Order
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure want to delete');
        if (proceed) {
            const url = `https://blooming-oasis-58661.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('succesfully deleted');
                        const remainingOrders = myOrders.filter(order => order._id !== id);
                        setMyOrders(remainingOrders);
                    }
                })
        }

    }

    return (
        <div className="py-5">
            <h1>This is my ordered list</h1>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    {
                        myOrders.filter(order => order.email === user.email).map(orders =>
                            <tbody key={orders._id}>
                                <tr>
                                    <td data-label="Title">{orders.title}</td>
                                    <td data-label="Price">{orders.price}</td>
                                    <td data-label="Name">{orders.name}</td>
                                    <td data-label="Email">{orders.email}</td>
                                    <td data-label="Mobile">{orders.mobile}</td>
                                    <td data-label="Staus">{orders.status}</td>
                                    <td data-label="Action"><button onClick={() => handleDeleteOrder(orders._id)} className="btn btn-danger">Delete</button></td>
                                </tr>

                            </tbody>



                        )
                    }
                </table>

            </div>

        </div>
    );
};

export default MyOrders;