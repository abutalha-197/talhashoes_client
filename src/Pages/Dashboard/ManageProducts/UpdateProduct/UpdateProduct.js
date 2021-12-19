import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateProduct = () => {
    const { productId } = useParams();
    const [products, setProducts] = useState({});

    useEffect(() => {
        const url = `https://blooming-oasis-58661.herokuapp.com/products/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);



    // update title
    const handletitleChange = e => {
        const updateTitle = e.target.value;
        const updateProduct = { title: updateTitle, price: products.price, description: products.description };
        setProducts(updateProduct)
    }
    // update User Email 
    const handlePriceChange = e => {
        const updatePrice = e.target.value;
        const updateProduct = { title: products.title, price: updatePrice, description: products.description };
        setProducts(updateProduct)
    }
    const handleDescriptionChange = e => {
        const updateDescription = e.target.value;
        const updateProduct = { title: products.title, price: products.price, description: updateDescription };
        setProducts(updateProduct)
    }

    const handleUpdateProduct = e => {
        const url = `https://blooming-oasis-58661.herokuapp.com/products/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated successfully')
                    setProducts({});
                }
            })
        e.preventDefault();
    }



    return (
        <div>
            <h2>This is Update Product {productId}</h2>
            <h3>Title: {products.title}</h3>
            <h3>Price: {products.price}</h3>
            <form onSubmit={handleUpdateProduct}>
                {/* <input type="text" onChange={handletitleChange} value={products.title || ''} />
                <input type="text" onChange={handlePriceChange} value={products.price || ''} />
                <textarea type="text" onChange={handleDescriptionChange} value={products.description || ''} /> */}

                <TextField
                    onChange={handletitleChange}
                    sx={{ width: '50%', m: 1 }}
                    id="standard-basic"
                    value={products.title || ''}
                    type="text"
                    variant="standard"
                />
                <TextField
                    onChange={handlePriceChange}
                    sx={{ width: '50%', m: 1 }}
                    id="standard-basic"
                    value={products.price || ''}
                    type="number"
                    variant="standard"
                />
                <TextField
                    onChange={handleDescriptionChange}
                    sx={{ width: '50%', m: 1 }}
                    id="standard-basic"
                    value={products.description || ''}
                    type="text"
                    variant="standard"
                />

                <Button variant="contained" type="submit" sx={{ width: '50%', marginLeft: '8px', m: 1 }}>Update</Button>
            </form>
        </div>
    );
};

export default UpdateProduct;