import React, { Component } from "react";
import Form from './components/Form'
export default class App extends Component {


  handleChange = (e) => {
    this.setState({
      comment: e.target.value
    })
  }
  handleSubmit = (e) => {
  };
  render() {
    return (
      <div>
        <p>MoneyTarget</p>
      <Form />
      </div>
    );
  }
}
