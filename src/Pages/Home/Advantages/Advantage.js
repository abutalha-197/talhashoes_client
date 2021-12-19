import React from 'react';
import './Advantage.css'

const Advantage = () => {
    return (
        <section className="advantage-section  mb-5">
            <div className="text-center">
                <p className="ad-text">120+ SHOES TYPE & BRANDS
                </p>
                <h2 className="fs-1 fw-bold">Shome Shoes <span>Advantages</span>
                </h2>
            </div>
            <div className="container mb-3">
                <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                    <div className="col">
                        <div className="card d-block text-center card-hover">
                            <i className="fas fa-users icons pt-5"></i>
                            <div className="card-body pb-5">

                                <p className="fw-bold ad-text">24/7 Customer Online Support</p>
                                <small className="ad-text">Call us Anywhere Anytime</small>


                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card d-block text-center card-hover">
                            <i className="fas fa-hotel pt-5 icons"></i>
                            <div className="card-body pb-5">

                                <p className="fw-bold ad-text">Reservation Anytime You Wants</p>
                                <small className="ad-text">24/7 Online Reservation
                                </small>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card d-block text-center card-hover">
                            <i className="fas fa-map-marked-alt icons pt-5"></i>
                            <div className="card-body pb-5">

                                <p className="fw-bold ad-text">Lots of Picking Locations</p>
                                <small className="ad-text">250+ Locations</small>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advantage;