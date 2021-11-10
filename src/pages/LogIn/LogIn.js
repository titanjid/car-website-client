import React, { useState } from 'react';
import useAuth from './../Hooks/useAuth';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';
import { useHistory, useLocation } from 'react-router';

const LogIn = () => {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const location = useLocation();
    const history = useHistory();
    const {setError,error,setUser,singIn}=useAuth()


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
            title: 'Sign in successfully'
          })
          
    };
    const handelEmail= e =>{
        setEmail(e.target.value)
    }
    const handelPassword= e =>{
        setPassword(e.target.value)
    }
    const handleOnSubmit= e =>{
        singIn(email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(user)
            history.push(redirect_uri);
            alats()
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
                <h2>Please LogIn</h2>
                <form onSubmit={handleOnSubmit}>
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

                    <p>New User?<a href="register">Register</a></p>
                    <button  type="submit" className="btn btn-primary">Login</button>
                    </form>
            </div>
        </div>
    );
};

export default LogIn;