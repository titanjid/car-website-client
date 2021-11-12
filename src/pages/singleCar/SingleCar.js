import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import Footer from '../Home/Footer/Footer';
import Header from './../Home/Header/Header';
import useAuth from './../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

const SingleCar = () => {
    const {carId}=useParams()
    const [car,setCar]=useState({})
    const {user}=useAuth()


    const {
        register,
        handleSubmit,
      } = useForm();
      const alats=()=>{
        Swal.fire({
            title: 'your order has been successful',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }
      const onSubmit = (data) => {
        data.email = user?.email;
        data.status = "pending";
        fetch("https://desolate-brushlands-79474.herokuapp.com/addOrders", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => console.log(result));
        console.log(data);
        alats()
      };
    useEffect(()=>{
        fetch(`https://desolate-brushlands-79474.herokuapp.com/singleCar/${carId}`)
        .then(res => res.json())
        .then(data => setCar(data));
    },[])
    return (
        <div>
            <Header></Header>
            <h2>Details of:{car?.name}</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5 me-0">
            <div className="col ">
            <div className="card">
            <img src={car?.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Name: {car?.name}</h5>
                <p className="card-text">Price: {car?.price}</p>
                <p className="card-text">{car?.details}</p>
            </div>
            </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>

        <input
              {...register("email")}
              value={user?.email}
                placeholder="email"
                className="p-2 m-2 w-100 input-field"
              />
        <input
              {...register("userName", { required: true })}
              value={user?.name}
                placeholder="Use-name"
                className="p-2 m-2 w-100 input-field"
              />

              <input
                {...register("name", { required: true })}
                placeholder="Name"
                value={car.name}
                className="p-2 m-2 w-100 input-field"
              />
              <input
                {...register("price", { required: true })}
                placeholder="Price"
                value={car?.price}
                className="p-2 m-2 w-100 input-field"
              />

              <input
                type="submit"
                value="Order now"
                className="btn btn-info w-50"
              />
            </form>
        </div>
            <Footer></Footer>
        </div>
    );
};

export default SingleCar;