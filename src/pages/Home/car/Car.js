import React from 'react';
import { Link } from 'react-router-dom';
import './car.css'

const Car = ({car}) => {
    const {name,price,img,details,_id}=car;
    return (
        <div className="col ">
            <div className="card home-cars">
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Name: {name}</h5>
                <p className="card-text">Price: {price}</p>
                <p className="card-text">{details}</p>
                <Link to={`/singleCar/${_id}`}>
                <button type="button" className="btn btn-primary mt-2">Buy Now</button>
                </Link>
            </div>
            </div>
        </div>
    );
};

export default Car;