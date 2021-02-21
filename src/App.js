import React, { Component } from "react";
import Navbar from "./components/Navbar";
import NewFoodtruck from "./components/NewFoodtruck";
import Delete from "./components/DeleteFoodtruck";
import Login from "./components/sessions/Login";
import Home from "./containers/Home";
import AccountPage from "./containers/AccountPage";

import Signup from "./components/sessions/Signup";
import { connect } from "react-redux";
import { getCurrentAccount } from "./actions/currentAccount";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import FoodtruckCard from "./components/FoodtruckCard";

import {
  createFoodtruck,
  getAllFoodtrucks,
  updateFoodtruck,
  removeFoodtruck,
} from "./actions/foodTruck";
import LookupFoodtruck from "./components/LookupFoodtruck";

class App extends Component {
  componentDidMount() {
    this.props.getCurrentAccount();
    this.props.getAllFoodtrucks();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/login" component={Login} />

          <Route
            exact
            path="/accounts/:id"
            render={() => (
              <AccountPage
                account={this.props.currentAccount}
                alltrucks={this.props.allFoodtrucks}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={({ history }) => <Signup history={history} />}
          />
          {/* <Route
            exact
            path="/accounts/:id/foodtrucks/lookup"
            render={() => (
              <LookupFoodtruck
                account={this.props.currentAccount}
                alltrucks={this.props.allFoodtrucks}
              />
            )}
          /> */}
          <Route
            exact
            path="/accounts/:id/foodtrucks/new"
            render={(props) => (
              <NewFoodtruck
                onSubmit={this.props.createFoodtruck}
                {...props}
                account={this.props.currentAccount}
                buttonText="Create A New Foodtruck"
              />
            )}
          />
          <Route
            exact
            path="/accounts/:id/foodtrucks/:id"
            render={(props) => {
              const foodtruckId = this.props.match.params.id;

              return <FoodtruckCard truck_id={foodtruckId} {...props} />;
            }}
          />

          <Route
            exact
            path="/accounts/:id/foodtrucks/:id/edit"
            render={(props) => {
              return (
                <NewFoodtruck
                  onSubmit={this.props.updateFoodtruck}
                  allFoodtrucks={this.props.allFoodtrucks}
                  account={this.props.currentAccount}
                  {...props}
                  buttonText="Update Foodtruck"
                  ftId={props.match.params.id}
                />
              );
            }}
          />
          <Route
            exact
            path="/accounts/:id/foodtrucks/:id/delete"
            render={(props) => {
              return <Delete {...props} delete={this.props.removeFoodtruck} />;
            }}
          />
          <Redirect to="/no-match" />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    allFoodtrucks: state.foodtruckReducer.allFoodtrucks,
    currentAccount: state.currentAccount,
  };
};

export default withRouter(
  connect(mapStateToProps, {
    getCurrentAccount,
    getAllFoodtrucks,
    createFoodtruck,
    updateFoodtruck,
    removeFoodtruck,
  })(App)
);
