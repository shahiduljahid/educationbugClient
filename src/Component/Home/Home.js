import React from "react";
import Navbar from "../Navbar/Navbar";

import biology from "../../photos/biology.png";
import Chemistry from "../../photos/biochemist.png";
import math from "../../photos/mathematics.png";
import physics from "../../photos/physics.png";
import Ict from "../../photos/telecommunication.png";
import Finance from "../../photos/calculator.png";
import headerCover from "../../photos/Student guy studying on internet.jpg";

import Service from "../Service/Service";
import "firebase/auth";


const Home = () => {
 
  const services = [
    {
      key: "1",
      img: biology,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit Ipsum assumenda quas deleniti quo nobis reiciendis suscipit temporibu eaque magni ut",
      name: "biology",
    },
    {
      key: "2",
      img: Finance,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit Ipsum assumenda quas deleniti quo nobis reiciendis suscipit temporibu eaque magni ut",
      name: "Finance",
    },
    {
      key: "3",
      img: math,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit Ipsum assumenda quas deleniti quo nobis reiciendis suscipit temporibu eaque magni ut",
      name: "Mathmatics",
    },
    {
      key: "4",
      img: physics,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit Ipsum assumenda quas deleniti quo nobis reiciendis suscipit temporibu eaque magni ut",
      name: "physics",
    },
    {
      key: "5",
      img: Chemistry,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit Ipsum assumenda quas deleniti quo nobis reiciendis suscipit temporibu eaque magni ut",
      name: "Chemistry",
    },
    {
      key: "6",
      img: Ict,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit Ipsum assumenda quas deleniti quo nobis reiciendis suscipit temporibu eaque magni ut",
      name: "ICT",
    },
  ];

  return (
    <div>
      <header>
        <Navbar></Navbar>
        

        <div className="container">
          <div className="row mt-5 pt-5 justify-content-between">
            <div className="col-md-6  my-auto">
              <h1 style={{ color: "tomato" }}>Welcome to EducationBug</h1>

              <p className="h4 pt-3">
                We care for your Children . we provide high quality education
                with friendly environment
              </p>
              <button class="btn mt-2 pt-1 btn-color button-color bold">
                Contact Us
              </button>
            </div>
            <div className="col-md-5">
              <img src={headerCover} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </header>

      <section className="container">
        <h2 className="text-center mt-5 mb-5" style={{ color: "tomato" }}>
          Our features
        </h2>

        <div className="row justify-content-between">
          {services.map((service) => {
            return <Service key={service.key} service={service}></Service>;
          })}

          </div>
      </section>

      <div className="container mt-5 pt-5  mb-5 pb-5">
        <div className="row text-center justify-content-center footer-container">
          <div className="col-md-3 mb-5">
            <ul className="navbar-nav">
              <li className="nav-item text-color">
                <h5>Services</h5>
              </li>
              <li className="nav-item">Physics with shihab sir</li>
              <li className="nav-item">Chemistry with misra sir</li>
              <li className="nav-item">Math with Kiron sir</li>
              <li className="nav-item">Finance with Sk sir</li>
              <li className="nav-item">Biology with Rita madam</li>
            </ul>
          </div>
          <div className="col-md-3 mb-5">
            <ul className="navbar-nav">
              <li className="nav-item text-color">
                <h5>Courses</h5>
              </li>
              <li className="nav-item">Yearly</li>
              <li className="nav-item">6 month</li>
              <li className="nav-item">3 month</li>
              <li className="nav-item">monthly</li>
              <li className="nav-item">Hourly</li>
            </ul>
          </div>
          <div className="col-md-3 mb-5">
            <ul className="navbar-nav">
              <li className="nav-item text-color">
                <h5>fetures</h5>
              </li>
              <li className="nav-item">Mathematics olympiad</li>
              <li className="nav-item">Physics olympiad</li>
              <li className="nav-item">Biology olympiad</li>
              <li className="nav-item">Chemistry olympiad</li>
              <li className="nav-item">ICT olympiad</li>
            </ul>
          </div>
          <div className="col-md-3 mb-5">
            <ul className="navbar-nav">
              <li className="nav-item text-color">
                <h5>Our address</h5>
              </li>
              <li className="nav-item mb-3 ">NewYork-101010 huson yard</li>

              <li className="nav-item mb-1 mt-5">call now</li>
              <li className="nav-item">
                <button className="btn  btn-color bold button-color">
                  +861765808
                </button>
              </li>
            </ul>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            Copyright ©2021 jahid. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
