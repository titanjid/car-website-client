import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from './../../Hooks/useAuth';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

const Review = () => {
    const {user}=useAuth()
    const {register,handleSubmit,} = useForm();
    const alats=()=>{
        Swal.fire({
            title: 'your review has been successful',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }
    const onSubmit = (data) => {
        fetch("http://localhost:5000/reviews", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => console.log(result));
        alats()
    }
    return (
        <div>
            <h2>This Is review page</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("email")}
                value={user?.email}
                placeholder="Description"
                className="p-2 m-2 w-50 input-field"
              />
              <input
              {...register("userName", { required: true })}
              value={user?.displayName}
                placeholder="Use-name"
                className="p-2 m-2 w-50 input-field"
              />
              <input
              {...register("Comments", { required: true })}
                placeholder="Comments"
                className="p-2 m-2 w-50 input-field"
              />

             <br />
              <input
                type="submit"
                value="Review now"
                className="btn btn-info w-25"
              />
            </form>
        </div>
    );
};

export default Review;