import React from 'react';
import { useForm } from "react-hook-form";
import './AddProducts.css';
import axios from 'axios';
const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://blooming-oasis-58661.herokuapp.com/products', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('Successfully added');
                    reset();
                }
            })
    };
    return (
        <div className="add-product">
            <h2 className="pt-5 text-center">Add a new product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title")} placeholder="Title" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Image" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;