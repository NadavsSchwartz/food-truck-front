import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Form from "./components/Form";
export default class App extends Component {
  handleChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };
  handleSubmit = (e) => {};
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Form />
        </div>
      </Router>
    );
  }
}
