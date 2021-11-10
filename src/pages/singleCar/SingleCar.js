import React from 'react';
import { useParams } from 'react-router';
import Footer from '../Home/Footer/Footer';
import Header from './../Home/Header/Header';

const SingleCar = () => {
    const {carId}=useParams()
    return (
        <div>
            <Header></Header>
            <h2>This is single car {carId}</h2>
            <Footer></Footer>
        </div>
    );
};

export default SingleCar;