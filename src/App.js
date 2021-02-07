import React, { Component } from "react";
import Navbar from "./components/NavBar";
import NewFoodtruck from "./components/NewFoodtruck";
import Delete from "./components/Delete";
import Login from "./components/sessions/Login";
import Home from "./containers/Home";
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
          <Route
            exact
            path="/signup"
            render={({ history }) => <Signup history={history} />}
          />
          <Route
            exact
            path="/accounts/:id/foodtrucks/new"
            render={(props) => (
              <NewFoodtruck
                onSubmit={this.props.createFoodtruck}
                {...props}
                account_id={this.props.match.params.id}
                buttonText="Create A Foodtruck"
              />
            )}
          />
          <Route
            exact
            path="/accounts/:id/foodtrucks/:id"
            render={(props) => (
              // const foodtruckId = this.props.match.params.id;
              // const foodTruck = this.props.allFoodtrucks.find(
              //   (foodTruck) => foodTruck.id == foodtruckId
              // );
              <FoodtruckCard {...props} />
            )}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/accounts/:id/foodtrucks/:id/edit"
            render={(props) => {
              const foodtruckId = this.props.match.params.id;
              const foodTruck = this.props.allFoodtrucks.find(
                (foodTruck) => foodTruck.id == foodtruckId
              );
              return (
                <NewFoodtruck
                  onSubmit={this.props.updateFoodtruck}
                  foodtruck={foodTruck}
                  account_id={this.props.currentAccount.account.action.id}
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
              const foodtruckId = this.props.match.params.id;
              const foodTruck = this.props.allFoodtrucks.find(
                (foodTruck) => foodTruck.id == foodtruckId
              );
              debugger;
              return <Delete {...props} />;
            }}
          />
          {/* <Redirect to="/no-match" /> */}
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
