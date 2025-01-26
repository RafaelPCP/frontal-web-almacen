import React from "react";
import { NavLink } from "react-router-dom";

export const Product = () => {
  return (
    <nav>
      <h1>product</h1>;
      <ul>
        {}
        {}
        {}
        <li>
          <NavLink to={"/product/" + "1"}>primer producto</NavLink>
        </li>
        <li>
          <NavLink to="/product/2">segundo producto</NavLink>
        </li>
        <li>
          <NavLink to="/product/3">tercer producto</NavLink>
        </li>
      </ul>
    </nav>
  );
};
