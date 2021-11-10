import React, { useEffect, useState } from 'react';
import Car from '../car/Car';

const Cars = () => {
    const [homeCars,setHomeCars]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/homeCars')
        .then(res => res.json())
        .then(data=>setHomeCars(data));
    },[])
    return (
        <div className="mt-5 pt-5">
            <h2 className="mb-4">Our Best Cars</h2>
           <div className="row row-cols-1 row-cols-md-3 g-4 mb-5 me-0">
               {
                   homeCars.map(car => <Car
                   key={car._id}
                   car={car}
                   >
                   </Car>)
               }
           </div>
        </div>
    );
};

export default Cars;