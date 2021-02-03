import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import fetchAccounts from "../actions/fetchAccounts";
import Accounts from "../components/Accounts";
import Account from "../components/Account";
import signUpForm from "../components/signUpForm";
import signInForm from "../components/signInForm";
import AccountInput from "../components/AccountInput";
class AccountsContainer extends Component {
  componentDidMount() {
    this.props.fetchAccounts();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/accounts/new" component={signUpForm} />
          <Route path="/accounts/login" component={signInForm} />
          <Route
            path="/accounts/:id"
            render={(routerProps) => (
              <Account {...routerProps} accounts={this.props.accounts} />
            )}
          />
          <Route
            exact
            path="/accounts"
            render={(routerProps) => (
              <Accounts {...routerProps} accounts={this.props.accounts} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts,
  };
};
export default connect(mapStateToProps, { fetchAccounts })(AccountsContainer);
