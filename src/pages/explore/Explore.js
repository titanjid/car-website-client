import React, { useEffect, useState } from 'react';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import SingleExplore from './SingleExplore';

const Explore = () => {
    const [exploreCars,setExploreCars]=useState([]);
    useEffect(()=>{
        fetch('https://desolate-brushlands-79474.herokuapp.com/exploreCars')
        .then(res => res.json())
        .then(data=>setExploreCars(data));
    },[])
    return (
     <>
      <Header></Header>
        <div className="mt-5">
            <h2 className="mb-4">Our Cars</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5 me-0">
               {
                   exploreCars.map(explorecar => <SingleExplore
                   key={explorecar._id}
                   explorecar={explorecar}
                   >
                   </SingleExplore>)
               }
           </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Explore;