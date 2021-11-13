import React,{useState,useEffect} from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';


const ManageOrders = () => {
    const [manageOrders,setManageOrders]=useState([]);
    const[success,setSuccess]=useState(false);
    const alats=()=>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Successfuly TO Shipped Orders',
            showConfirmButton: false,
            timer: 1500
          })
    }
    const handleManageOrders=(id)=>{
        const {status}=manageOrders
        fetch(`http://localhost:5000/orders/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(status),
    })
      .then(res => res.json())
      .then(result => {
        if (result.modifiedCount) {
            console.log(result);
            setSuccess(true);
        }

        });
    }

    useEffect(()=>{
        fetch("http://localhost:5000/orders")
        .then(res => res.json())
        .then(data => setManageOrders(data))
    },[])
    return (
        <div>
            <div className="mt-5">
            <h2 className="mb-4">Manage All Orders</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5 me-0">
                {
                    manageOrders.map(
                        manageOrder=>
                        <div className="col ">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title fs-5 fw-bolder text-start">email: {manageOrder.email}</h5>
                            <h5 className="card-text fs-5 fw-bolder text-start">Orders-Name: {manageOrder.name}</h5>
                            <p className="card-text fs-5 fw-bolder text-start">Order-Price: {manageOrder.price}</p>
                            <p className="card-text fs-5 fw-bolder text-start">Order-Status: {manageOrder.status}</p>
                            <button onClick={()=>handleManageOrders(manageOrder._id)} type="button" className="btn btn-success d-grid">Shipped  Order</button>
                            {success && alats()}
                        </div>
                        </div>
                    </div>
                    )
                }
                </div>
                </div>
        </div>
    );
};

export default ManageOrders;