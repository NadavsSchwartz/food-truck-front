import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper grey lighten-5 ">
        <a href="#" className="brand-logo blue-text text-darken-3">
          MoneyTarget
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <Link to="/login">
              <span className="blue-text text-darken-3 flow-text">Login</span>
            </Link>
          </li>
          <li>
            <Link to="/transactions">
              <span className="blue-text text-darken-3 flow-text">
                Transaction
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
