import React from 'react';
import { useState } from 'react';
import '../Register/Register.css'
import Swal from 'sweetalert2/dist/sweetalert2.all.js';
import useAuth from './../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';



const Register = () => {
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const location = useLocation();
    const history = useHistory();
    const {saveUser,updateName,createAccountWithEmailAndPassword,setError,error,setUser}=useAuth()


    const redirect_uri=location.state?.from ||'/home';

    const alats=()=>{
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Sign up successfully'
          })
          
    };

    const handelEmail= e =>{
        setEmail(e.target.value)
    }
    const handelPassword= e =>{
        setPassword(e.target.value)
    }
    const handelName= e =>{
        setName(e.target.value)
    }
    const handleOnSubmit= e =>{
        createAccountWithEmailAndPassword(email,password)
        .then((userCredential) => {
            updateName(name)
            const user = userCredential.user;
            setUser(user)
            saveUser(email,name)
            alats()
            history.push(redirect_uri)
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
          });

         setError('')
        e.preventDefault()

    }
    return (
        <div className="login-form">
            <div>
                <h2>Please Registration</h2>
                <form onSubmit={handleOnSubmit}>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                        <input onBlur={handelName} type="text" className="form-control"placeholder="Enter Your Name" id="inputEmail3"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                        <input onBlur={handelEmail} type="email" className="form-control"placeholder="Enter Your Email" id="inputEmail3"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password </label>
                        <div className="col-sm-10">
                        <input onBlur={handelPassword} type="password"  placeholder="Enter Your Password"className="form-control" id="inputPassword3"/>
                        </div>
                    </div>
                    <div className="text-danger">
                       {error}
                    </div>
                        <br />
                        <br />

                    <p>Do you already have an account?<a href="login">Login</a></p>
                    <button type="submit" className="btn btn-primary">Registration</button>
                    </form>
            </div>
        </div>
    );
};

export default Register;