import React from 'react';

const SingleExplore = ({explorecar}) => {
    const {name,price,img,details}=explorecar;
    return (
        <div className="col ">
        <div className="card home-cars">
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Name: {name}</h5>
            <p className="card-text">Price: {price}</p>
            <p className="card-text">{details}</p>
            <button type="button" className="btn btn-primary mt-2">Buy Now</button>
        </div>
        </div>
    </div>
    );
};

export default SingleExplore;