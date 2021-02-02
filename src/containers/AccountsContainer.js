import React, { Component } from "react";
import { connect } from "react-redux";
import Accounts from "../components/Accounts";
import AccountInput from "../components/AccountInput";
import fetchAccounts from "../actions/fetchAccounts";

class AccountsContainer extends Component {
  componentDidMount() {
    this.props.fetchAccounts();
  }

  render() {
    return (
      <div>
            <Accounts accounts={this.props.accounts}/> <AccountInput />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts
  };
};
export default connect(mapStateToProps, { fetchAccounts })(AccountsContainer);
