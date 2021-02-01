import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./content/Home";
export default class App extends Component {
  componentDidMount() {
    fetch("http://127.0.0.1:3000/api/v1/accounts")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Home />
        </Router>
      </div>
    );
  }
}
