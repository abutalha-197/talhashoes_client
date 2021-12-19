import React from 'react';
import { useForm } from "react-hook-form";
// import './AddProducts.css';
import axios from 'axios';
const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://blooming-oasis-58661.herokuapp.com/reviews', data)
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
            <h2 className="pt-5 text-center">Add a new review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <textarea {...register("review")} placeholder="Write your opinion" />
                <input type="number" {...register("rating")} placeholder="Rating 1 to 5" />


                <input type="submit" />
            </form>
        </div>
    );
};

export default AddReview;