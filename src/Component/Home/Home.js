import React, { useContext } from "react";
import { Link } from "react-router-dom";
import biology from "../../photos/biology.png";
import Chemistry from "../../photos/biochemist.png";
import math from "../../photos/mathematics.png";
import physics from "../../photos/physics.png";
import Ict from "../../photos/telecommunication.png";
import Finance from "../../photos/calculator.png";
import headerCover from "../../photos/Student guy studying on internet.jpg";
import firebase from "firebase/app";
import Service from "../Service/Service";
import "firebase/auth";
import { firebaseConfig } from "../Login/firebaseConfig";
import { userContext } from "../../App";

const Home = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const [loggedInUser, setLoggedInUser] = useContext(userContext);

  const user = sessionStorage.getItem("token");

  const hangleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        const userSignOut = {
          name: "",
          email: "",
        };
        setLoggedInUser(userSignOut);
      })
      .catch((error) => {
        // An error happened.
      });
    sessionStorage.removeItem("token");
  };
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
        <nav
          style={{ backgroundColor: "tomato" }}
          className="navbar navbar-expand-lg navbar-light"
        >
          <div className="container-fluid">
          <div className="align-items-center d-flex">
         
          <span style={{ fontWeight: "bold", fontSize: "20px" }} className="">
          EducationBug
          </span>
        </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse text-center navbar-collapse justify-content-end"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav ms-auto text-center d-flex align-items-center  mb-2 mb-lg-0">
                <li className="nav-item ">
                  <Link
                    to={"/home"}
                    className="nav-link active bold "
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link to={"/order"} className="nav-link bold ">
                    Order
                  </Link>
                </li>

                <li className="nav-item ">
                  <Link to={"/services"} className="nav-link bold">
                    Services
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link bold  navigation ">Contact us</Link>
                </li>
                <li className="nav-item ">
                  {loggedInUser.email || user ? (
                    <button
                      onClick={hangleSignOut}
                      className="btn btn-secondary btn-color text-white text-bold"
                    >
                      Log Out
                    </button>
                  ) : (
                    <Link to={"/login"} className="nav-link navigation  ">
                      <button className="btn bold btn-success btn-color text-white text-bold">
                        Log In
                      </button>
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>

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
