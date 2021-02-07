import React, { Component } from "react";
import Navbar from "./components/NavBar";
import NewFoodtruck from "./components/sessions/NewFoodtruck";
import Login from "./components/sessions/Login";
import Home from "./containers/Home";
import Signup from "./components/sessions/Signup";
import { connect } from "react-redux";
import { getCurrentAccount } from "./actions/currentAccount";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { getAllFoodtrucks } from "./actions/foodTruck";

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
            path="/accounts/:id/food_trucks/new"
            component={NewFoodtruck}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          {/* <Redirect to="/no-match" /> */}
        </Switch>
      </div>
    );
  }
}

export default withRouter(
  connect(null, { getCurrentAccount, getAllFoodtrucks })(App)
);
