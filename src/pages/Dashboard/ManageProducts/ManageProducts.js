import React,{useEffect, useState} from 'react';

const ManageProducts = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/exploreCar')
        .then(res=> res.json())
        .then(data => setProducts(data));
    },[])
    const handleDeleteProduct=(id)=>{
        const cancleConfirm =window.confirm("Can you Delete your Product?")
         if(cancleConfirm){
             fetch(`http://localhost:5000/exploreCar/${id}`, {
             method: "DELETE"
         })
         
         .then(res => res.json())
           .then(data => {
             if (data.deletedCount > 0) {
                 alert("Your Product has been successfully to delete");
                 const Allproducts = products.filter(product => product._id !== id);
                 setProducts(Allproducts);
             }
         
         })};
     }
    return (
        <div className="mt-5">
            <h2 className="mb-4">Manage All Products</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5 me-0">
                {
                    products.map(
                        product=><div className="col ">
                        <div className="card home-cars">
                        <img src={product.img} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Name: {product.name}</h5>
                            <p className="card-text">Price: {product.price}</p>
                            <p className="card-text">{product.details}</p>
                            <button onClick={()=>handleDeleteProduct(product._id)} type="button" className="btn btn-danger mt-2">Delete Product</button>
                        </div>
                        </div>
                    </div>
                    )
                }
                </div>
                </div>
    );
};

export default ManageProducts;