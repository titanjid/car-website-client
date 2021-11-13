import React,{useState,useEffect} from 'react';
import Reviews from './../Review/Reviews';

const HomeReview = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch("https://desolate-brushlands-79474.herokuapp.com/reviews")
        .then(res=>res.json())
        .then(data => setReviews(data));
    },[])
    return (
        <div className="mt-5 mb-5">
            <h2 className="mb-4 fs-1 fw-bolder">Customer Reviews</h2>
           <div className="row row-cols-1 row-cols-md-3 g-4 mb-5 me-0 container">
               {
                   reviews.map(review=> <Reviews
                   key={review._id}
                   review={review}
                   >
                   </Reviews>)
               }
           </div>
        </div>
    );
};

export default HomeReview;