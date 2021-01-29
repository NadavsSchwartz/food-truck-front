import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super();
    this.state = {
      comment: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="comment"
            value={this.state.comment}
            onChange={this.handleChange}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
