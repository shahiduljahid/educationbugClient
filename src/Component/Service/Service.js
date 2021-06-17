import axios from 'axios';
import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { userContext } from '../../App';
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { Link } from 'react-router-dom';

const Service = ({service}) => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);

  const user = sessionStorage.getItem("token");

  const handleOrder=(service)=>{

    const orderData ={
      "user":user,
      "product":service
    }
    if(user && service){
      const url =`http://localhost:4000/order` ;
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      }).then((result) => {
        if (result) {
          
          alert("successfull");
        }
      });
      
    }
  

    // axios.post(`http://localhost:4000/order`,{
    //   body:JSON.stringify(orderData)
    // }).then(()=>{
    //     console.log("successfull");
    
    // });




  }
    return (
        <div className="col-md-3 mx-2 text-center mb-5">
        <img
          style={{ height: "100px" }}
          className="img-fluid"
          src={service.img}
          alt="biology"
        />
        <h3 className="mt-2" style={{ color: "tomato" }}>
          {service.name}
        </h3>
        <p>
        {service.des}
        </p>

        
          <Link to={"/order"}>
        <button onClick={()=>handleOrder(service)} className="btn btn-color bold button-color">Buy Now</button>
        </Link>
      
       
      </div>
    );
};

export default Service;