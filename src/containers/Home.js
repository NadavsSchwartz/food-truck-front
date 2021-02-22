import React, { Component } from "react";
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
      return (
        <div className="flow-text center">
          no foodtrucks were found, feel free to add one!
        </div>
      );
    } else {
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
const mapStateToProps = (state) => {
  return {
    currentAccount: getCurrentAccount,
    allFoodtrucks: state.foodtruckReducer,
  };
};
export default connect(mapStateToProps, null)(Home);
