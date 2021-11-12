import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';


const AddCar = () => {
    const {register,handleSubmit,} = useForm();
    const alats=()=>{
        Swal.fire({
            title: 'Product Add successful',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }
    const onSubmit = (data) => {
        fetch("http://localhost:5000/addCar", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((result) => console.log(result));
            alats()
    };
    return (
        <div>
            <h2 className="fs-2 fw-bolder">Plase Add A Car Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
        <input
              {...register("text")}
                placeholder="image url"
                className="p-2 m-2 w-50 input-field"
              />

              <input
                {...register("name", { required: true })}
                placeholder="Car Name"
                className="p-2 m-2 w-50 input-field"
              />
              <input
                {...register("price", { required: true })}
                placeholder="Car-Price"
                className="p-2 m-2 w-50 input-field"
              />

              <input
                {...register("text", { required: true })}
                placeholder="Car Description"
                className="p-2 m-2 w-50 input-field"
              />
              <br />
              <input
                type="submit"
                value="Add Car"
                className="btn btn-info w-25"
              />
            </form>
        </div>
    );
};

export default AddCar;