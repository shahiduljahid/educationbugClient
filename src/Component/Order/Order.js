import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from "../Service/Service";
import Navbar from '../Navbar/Navbar';


const Order = () => {

  const user = sessionStorage.getItem("token");

  const[order , setOrder]= useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/getOrder',
    {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: user })
    })
    .then(res=>res.json())
    .then(data=>setOrder(data))
},[user])

   const orderList =[];

   // eslint-disable-next-line array-callback-return
   order.map((service)=>{
     let count=1;
   

    const find = orderList.find((pd)=>service.product===pd.product);
    if(!find){
      orderList.push(service)
      service.quantity=1;
    
    }
  else{
    service.quantity=service.quantity+1;
    console.log(service.quantity)
  }

    console.log(count)
   
  
  
   })
   console.log(orderList)
   console.log(order)

 

    return (

        <div>
              <Navbar></Navbar>

        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h2 className="text-color text-center mt-5 pt-5 mb-5 pb-5 bold">orders</h2>
                </div>
                <div className="col-md-12">
                <div className="row justify-content-between">
          {orderList.map((service) => {
            return <Service key={service.key} service={service}></Service>;
          })}

          </div>



                </div>
            </div>
        </div>

            
        </div>
    );
};

export default Order;