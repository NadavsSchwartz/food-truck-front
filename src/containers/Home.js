import React, { Component } from "react";
<<<<<<< HEAD
import { connect } from "react-redux";
import { getCurrentAccount } from "../actions/currentAccount";
import FoodtruckCard from "../components/FoodtruckCard";

class Home extends Component {
  renderFoodtruckCards = () => {
    if (
      this.props.allFoodtrucks &&
      this.props.allFoodtrucks.allFoodtrucks.length > 0
    ) {
      const allFt = this.props.allFoodtrucks.allFoodtrucks;
      return allFt.map((ft) => <FoodtruckCard key={ft.id} foodtruck={ft} />);
    } else if (this.props.currentAccount && this.props.currentAccount.account) {
=======

import FoodtruckCard from "../components/FoodtruckCard";

class Home extends Component {
  renderFoodtruckCards = () => {
    const Foodtrucks = this.props.alltrucks;
    const account = this.props.account;
    if (Foodtrucks && Foodtrucks.length > 0) {
      return Foodtrucks.map((ft) => (
        <FoodtruckCard key={ft.id} foodtruck={ft} />
      ));
    } else if (Foodtrucks && account) {
      debugger;
>>>>>>> parent of 4bd7928b... responsiveness and future imporovment for google places/map
      return (
        <div className="flow-text center">
          no foodtrucks were found, feel free to add one!
        </div>
      );
<<<<<<< HEAD
    } else {
=======
    } else if (!account) {
>>>>>>> parent of 4bd7928b... responsiveness and future imporovment for google places/map
      return (
        <div className="flow-text center">
          Login to add foodtrucks to your profile!
        </div>
      );
    }
  };
  render() {
    return <div className="div">{this.renderFoodtruckCards()}</div>;
  }
}
<<<<<<< HEAD
const mapStateToProps = (state) => {
  return {
    currentAccount: getCurrentAccount,
    allFoodtrucks: state.foodtruckReducer,
  };
};
export default connect(mapStateToProps, null)(Home);
=======
export default Home;
>>>>>>> parent of 4bd7928b... responsiveness and future imporovment for google places/map
