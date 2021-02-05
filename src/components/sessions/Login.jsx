import React from "react";
import { connect } from "react-redux";
import { updateLoginForm } from "../../actions/handleLoginForm";
import { login } from "../../actions/currentAccount";
import { Link } from "react-router-dom";

const Login = ({ loginFormData, updateLoginForm, login, history }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedFormInfo = {
      ...loginFormData,
      [name]: value,
    };
    updateLoginForm(updatedFormInfo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(loginFormData, history);
  };
  return (
    <div
      className="section"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <div className="center">
        <div className="container">
          <h5 className="indigo-text">Log in to your account</h5>
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
                  <label htmlFor="email"></label>
                  <input
                    className="validate"
                    type="text"
                    name="email"
                    value={loginFormData.email}
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
                    value={loginFormData.password}
                    onChange={handleInputChange}
                    placeholder="Enter Password"
                    required
                  ></input>
                </div>
              </div>
              <div className="row col s12">
                <button type="submit" className="btn indigo col s12">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <Link to="/accounts/signup"> Don't have an account? sign up</Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loginFormData: state.loginReducer,
  };
};

export default connect(mapStateToProps, { updateLoginForm, login })(Login);
