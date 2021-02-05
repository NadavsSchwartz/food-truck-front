import React from "react";
import { connect } from "react-redux";
import { updateSignupForm } from "../../actions/handleSignupForm";
import { signup } from "../../actions/currentAccount";
import { Link } from "react-router-dom";

const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value,
    };
    updateSignupForm(updatedFormInfo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(signupFormData, history);
  };

  return (
    <div
      className="section"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <div className="center">
        <div className="container">
          <h5 className="indigo-text">Sign up for a new account</h5>
          <div
            className="z-depth-1 grey lighten-4 row"
            style={{
              display: "inline-block",
              padding: "32px 48px 0px 48px",
              border: "1px solid #EEE",
            }}
          >
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col s12">
                  <label htmlFor="name"></label>
                  <input
                    className="validate"
                    type="text"
                    name="name"
                    value={signupFormData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <label htmlFor="email"></label>
                  <input
                    className="validate"
                    type="email"
                    name="email"
                    value={signupFormData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email
"
                    required
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <label htmlFor="Enter your password"></label>
                  <input
                    className="validate"
                    type="password"
                    name="password"
                    value={signupFormData.password}
                    onChange={handleInputChange}
                    placeholder="Enter Password"
                    required
                  ></input>
                </div>
              </div>
              <div className="row col s12">
                <button type="submit" className="btn indigo col s12">
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
        <Link to="/login"> Have an account? Log in</Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    signupFormData: state.signupReducer,
  };
};

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup);
