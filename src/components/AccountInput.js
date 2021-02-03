import React, { Component } from "react";
import { connect } from "react-redux";
import {addAccount} from "../actions/addAccount";
import Form from "../components/Form";

class AccountInput extends Component {
  render() {
    return (
      <div>
        <Form onSubmit={this.props.addAccount} />
      </div>
    );
  }
}

export default connect(null, { addAccount })(AccountInput);
