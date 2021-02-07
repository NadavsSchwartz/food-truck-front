import React from "react";
import { logout } from "../actions/currentAccount";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const logoutRedirect = () => {
    props.logout();
    alert("You have successfully logged out. Have a nice day!");
  };

  const renderNavbar = () => {
    if (props.loggedIn && props.currentAccount.account.action) {
      return (
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            FoodTrucks
          </Link>
          <ul id="nav-mobile" className="right center-on-med-and-down">
            <li>
              <Link
                to={`/accounts/${props.currentAccount.account.action.id}/food_trucks/new`}
              >
                New Foodtruck
              </Link>
            </li>
            <li onClick={logoutRedirect}>
              <Link to="/">Log out</Link>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <div className="nav-wrapper ">
            <Link to="/" className="brand-logo left">
              FoodTrucks
            </Link>

            <ul id="nav-mobile" className="right center-on-med-and-down">
              <li>
                <Link to="/" className="strongxf">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      );
    }
  };
  return (
    <div>
      <nav>
        <div className="nav-wrapper indigo">{renderNavbar()}</div>
      </nav>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    currentAccount: state.currentAccount,
    loggedIn: !!state.currentAccount,
  };
};
export default connect(mapStateToProps, { logout })(NavBar);
