import React, { createContext, useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";
import Order from "./Component/Order/Order";

import Login from "./Component/Login/Login";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";


export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
          
           
            </Route>
           
       
            <Route path="/login">
              <Login></Login>
            </Route>
           
            <PrivateRoute path="/order">
              <Order></Order>
             
            </PrivateRoute>
           
            <Route path="/">
              <Home></Home>
           
            </Route>
          </Switch>
        </Router>
      </div>
    </userContext.Provider>
  );
}

export default App;
