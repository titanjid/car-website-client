import React, { useState } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

const MakeAdmin = () => {
    const [email,setEmail]=useState('')
    const [success,setSuccess]=useState(false)
    const alats=()=>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Successfuly TO Make Admin',
            showConfirmButton: false,
            timer: 1500
          })
    }
    const handleSubmit = e => {
        const user = {email};
        fetch("https://desolate-brushlands-79474.herokuapp.com/user/admin", {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data=>{
            if (data.modifiedCount) {
                console.log(data);
                setSuccess(true);
            }
        })
        e.preventDefault()
    }
    const handleEmail=e=>{
        setEmail(e.target.value);
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>


        <input 
        type="email"
        placeholder="Enter Email To Make Admin"
        onBlur={handleEmail}
        className="form-control w-50"/>
        <br />
            <input
                type="submit"
                value="Make Admin"
                className="btn btn-success  d-grid w-25"
            />
        </form>
        {success && alats()}
        </div>
    );
};

export default MakeAdmin;