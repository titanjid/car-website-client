import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Cars from '../cars/Cars';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeReview from '../HomeReview/HomeReview';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Cars></Cars>
            <HomeReview></HomeReview>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;