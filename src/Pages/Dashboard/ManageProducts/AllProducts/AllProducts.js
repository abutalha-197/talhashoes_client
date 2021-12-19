import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const AllOrders = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        myFunction();
        fetch(`https://blooming-oasis-58661.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => {
                setAllProducts(data)
                setLoading(false)
            })
    }, []);
    const myFunction = () => {
        setLoading(true)
    };


    // Delete Order
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure want to delete');
        if (proceed) {
            const url = `https://blooming-oasis-58661.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('succesfully deleted');
                        const remainingOrders = allProducts.filter(product => product._id !== id);
                        setAllProducts(remainingOrders);
                    }
                })
        }

    }

    if (loading)
        return (<div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>)
    return (
        <div>

            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Action</th>

                        </tr>
                    </thead>

                    {
                        allProducts.map(products =>
                            <tbody key={products._id}>
                                <tr>
                                    <td data-label="Title">{products.title}</td>
                                    <td data-label="Price">{products.price}</td>
                                    <td data-label="Name">{products.description}</td>
                                    <td data-label="Action"><button onClick={() => handleDeleteOrder(products._id)} className="btn btn-danger">Delete</button><Link to={`/dashboard/updateProduct/${products._id}`}><Button>Update</Button></Link></td>


                                </tr>

                            </tbody>



                        )
                    }
                </table>

            </div>

        </div>
    );
};

export default AllOrders;