import React from "react";
import { logout } from "../actions/currentAccount";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const logoutRedirect = () => {
    props.logout();
    alert("You have successfully logged out. Have a nice day!");
  };

  const render = () => {
    if (props.loggedIn && props.currentAccount.account.action) {
      return (
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            FoodTrucks
          </Link>
          <ul id="nav-mobile" className="right center-on-med-and-down">
            <li>
              <Link
                to={`/accounts/${props.currentAccount.account.action.id}/foodtrucks/new`}
              >
                New Foodtruck
              </Link>
            </li>
            <li>
              <a href={`/accounts/${props.currentAccount.account.action.id}`}>
                My Foodtrucks
              </a>
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
            <Link to="/" className="brand-logo left indigo-text">
              FoodTrucks
            </Link>
            <ul id="nav-mobile" className="right center-on-med-and-down">
              <li>
                <Link to="/signup" className="indigo-text">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/login" className="indigo-text">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="navbar">
      <nav>
        <div className="navbar-container indigo">{render()}</div>
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
export default connect(mapStateToProps, { logout })(Navbar);
