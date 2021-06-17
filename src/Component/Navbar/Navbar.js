import React, { useContext } from "react";
import { Link } from "react-router-dom";

import firebase from "firebase/app";

import "firebase/auth";
import { firebaseConfig } from "../Login/firebaseConfig";
import { userContext } from "../../App";


const Navbar = () => {
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
    return (
        <div>
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
            
        </div>
    );
};

export default Navbar;