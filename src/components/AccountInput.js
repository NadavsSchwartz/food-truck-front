import React, { Component } from "react";
import { connect } from "react-redux";
import { addAccount } from "../actions/addAccount";
import signUpForm from "../components/signUpForm";
import signInForm from "../components/signUpForm";

class AccountInput extends Component {
  render() {
    return (
      <div>
        <signUpForm onSubmit={this.props.addAccount} />
      </div>
    );
  }
}

export default connect(null, { addAccount })(AccountInput);
