import React from 'react';

const About = () => {
    return (
        <div className="mt-5 mp-5 mb-5">
            <h1>About Our Car Bazar.com</h1>
        <div className="d-lg-flex container mb-5">
            <div className="text-start me-3">
                <h2>Car Bazar.com</h2>
                <p>
                    We have here the most popular cars in the world. You can buy the car according to your wishes.Our company is trustworthy enough you can buy your product without any doubt and on time delivery.Or you can see the car in front of our shop and buy it.
                </p>
            </div>
            <div>
                <img className="h-75 mb-5 w-100" src="https://img.freepik.com/free-photo/generic-brandless-modern-sport-car-with-fire-smoke_110488-1759.jpg?size=626&ext=jpg" alt="" />
            </div>
        </div>
        </div>
    );
};

export default About;