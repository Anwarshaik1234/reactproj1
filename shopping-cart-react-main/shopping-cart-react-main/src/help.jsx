import React from "react";
// import Shop from "shop";
import { Link } from "react-router-dom";
// import { ShoppingCart } from "phosphor-react";
// import "./navbar.css";


export const Help = () => {
    return (
      <div className="shop">
        <div className="shopTitle">
          <h1>HELP</h1>
          <h3>if this page doesnt work pleze click on alternate link</h3>
          <Link to="/contact"> Contact </Link>
         
        </div>
      </div>
    );
  };
  