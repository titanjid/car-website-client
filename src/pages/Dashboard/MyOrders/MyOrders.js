import React, { useEffect, useState } from 'react';
import useAuth from './../../Hooks/useAuth';


const MyOrders = () => {
    const {user}=useAuth();
    const [orderCars,setOrderCars]=useState([]);


    const handleCancelOrders=(id)=>{
       const cancleConfirm =window.confirm("Can you cancle your order?")
        if(cancleConfirm){
            fetch(`https://desolate-brushlands-79474.herokuapp.com/orders/${id}`, {
            method: "DELETE"
        })
        
        .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
                alert("Your order has been successfully cancle");
                const car = orderCars.filter(orderCar => orderCar._id !== id);
                setOrderCars(car);
            }
        
        })};
    }
    useEffect(()=>{
        fetch(`https://desolate-brushlands-79474.herokuapp.com/orders/${user.email}`)
        .then(res => res.json())
        .then(data => setOrderCars(data))
    },[user.email])
    return (
        <div className="mt-5 pt-5">
        <h2 className="mb-4 fs-1 fw-bolder">My Orders: {orderCars.length}</h2>
       <div className="row row-cols-1 row-cols-md-2 g-4 mb-5 me-0">
           {
               orderCars.map(orderCar =>
                <div className="col ">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title fs-5 fw-bolder text-start">email: {orderCar.email}</h5>
                    <h5 className="card-text fs-5 fw-bolder text-start">Orders-Name: {orderCar.name}</h5>
                    <p className="card-text fs-5 fw-bolder text-start">Order-Price: {orderCar.price}</p>
                    <p className="card-text fs-5 fw-bolder text-start">Order-Status: {orderCar.status}</p>
                    <button onClick={()=>handleCancelOrders(orderCar._id)} type="button" className="btn btn-danger d-grid">Cancel Order</button>
                </div>
                </div>
            </div>
                )
           }
       </div>
    </div>
    );
};

export default MyOrders;