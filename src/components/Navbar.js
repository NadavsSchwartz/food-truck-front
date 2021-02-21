import React from "react";
import { logout } from "../actions/currentAccount";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const logoutRedirect = () => {
    props.logout();
  };

  const render = () => {
    if (props.loggedIn && props.currentAccount.account.action) {
      const { id } = props.currentAccount.account.action;
      return (
        <>
          <Link to="/" className="brand-logo left indigo-text">
            FoodTrucks
          </Link>
          <ul id="nav" className="right ">
            {/* <li>
              <Link
                to={`/accounts/${id}/foodtrucks/lookup`}
                className="indigo-text"
              >
                Lookup a New truck
              </Link>
            </li> */}
            <li>
              <Link
                to={`/accounts/${id}/foodtrucks/new`}
                className="indigo-text"
              >
                New truck
              </Link>
            </li>
            <li>
              <Link to={`/accounts/${id}`} className="indigo-text">
                My Foodtrucks
              </Link>
            </li>
            <li onClick={logoutRedirect}>
              <Link to="/logout" className="indigo-text">
                Log out
              </Link>
            </li>
          </ul>
        </>
      );
    } else {
      return (
        <>
          <div>
            <div className="nav-wrapper ">
              <Link to="/" className="brand-logo left">
                FoodTrucks
              </Link>
              <ul id="nav-mobile" className="right center-on-med-and-down">
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      );
    }
  };
  return (
    <div>
      <nav className="white">
        {render()}
        {/* <div className="right show-on-small">
          <Sidenav />
        </div> */}
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
