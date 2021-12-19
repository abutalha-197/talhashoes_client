import React, { useEffect, useState, useRef } from 'react';
import './PlaceOrder.css'
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';
const PlaceOrder = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { user } = useAuth();



    const idRef = useRef('');
    const titleRef = useRef('');
    const priceRef = useRef('');
    const userNameRef = useRef('');
    const emailRef = useRef('');
    const addressRef = useRef('');
    const mobileRef = useRef('');

    useEffect(() => {
        fetch(`https://blooming-oasis-58661.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);
    const handleOrder = e => {
        const id = idRef.current.value;
        const title = titleRef.current.value;
        const price = priceRef.current.value;
        const name = userNameRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;
        const mobile = mobileRef.current.value;

        const newOrder = { s_id: id, title: title, price: price, name: name, email: email, address: address, mobile: mobile, status: "pending" }

        fetch(`https://blooming-oasis-58661.herokuapp.com/orders`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.insertedId) {
                    alert('order processed successfully');
                    // reset();
                }
            })



        e.preventDefault();
    };

    console.log(product)

    return (
        <div>
            <Navigation></Navigation>
            <div className="place-order py-5 container">
                <div className="border p-3">
                    <h3>Order Description</h3>
                    <img className="img-fluid" src={product.img} alt="" />
                    <h3>Title: {product.title}</h3>
                    <p>Description: {product.description}</p>
                    <h5>Price: ${product.price}</h5>
                </div>
                <div className="border p-3 place-order-form">
                    <h2>Please Place Order</h2>
                    <form onSubmit={handleOrder} className="text-center mt-4">
                        <input type="text" className="form-control" defaultValue={product._id || ''} ref={idRef} />
                        <input type="text" className="form-control" defaultValue={product.title || ''} ref={titleRef} />
                        <input type="number" className="form-control" defaultValue={product.price || ''} ref={priceRef} />
                        <input type="text" className="form-control" defaultValue={user.displayName || ''} ref={userNameRef} />
                        <input type="email" className="form-control" defaultValue={user.email || ''} ref={emailRef} />
                        <input type="text" className="form-control" placeholder="Address" ref={addressRef} />
                        <input type="number" className="form-control" placeholder="Mobile" ref={mobileRef} />
                        <input className="btn btn-success py-2 px-5 d-block w-100 mt-4" type="submit" defaultValue="submit" />
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PlaceOrder;