import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <NavLink exact to="/" activeClassName="nav-active">
        Info/pays
      </NavLink>
      <NavLink exact to="/About" activeClassName="nav-active">
        Info/projet
      </NavLink>
    </div>
  );
}

export default Navigation;
