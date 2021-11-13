import React from 'react';

const Reviews = ({review}) => {
    const {email,userName,Comments}=review;
    return (
        <div className="col ">
        <div className="card">
        <div className="card-body">
            <h5 className="card-title fs-5 fw-bolder text-start">User-email: {email}</h5>
            <h5 className="card-text fs-5 fw-bolder text-start">User-Name: {userName}</h5>
            <p className="card-text fs-5 fw-bolder text-start">User-Comment: {Comments}</p>
        </div>
        </div>
    </div>
    );
};

export default Reviews;