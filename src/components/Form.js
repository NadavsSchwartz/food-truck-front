import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };
  render() {
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
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col s12">
                    <label htmlFor="name"></label>
                    <input
                      className="validate"
                      type="text"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
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
                      value={this.state.email}
                      onChange={this.handleChange}
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
                      value={this.state.password}
                      onChange={this.handleChange}
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
          <a href="/login"> Have an account? Log in</a>
        </div>
      </div>
    );
  }
}

export default Form;
