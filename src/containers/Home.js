import React, { Component } from "react";
import { connect } from "react-redux";
import FoodtruckCard from "../components/FoodtruckCard";

class Home extends Component {
  renderFoodtruckCards = () => {
    if (this.props.allFoodtrucks) {
      const allFt = this.props.allFoodtrucks.allFoodtrucks;
      return allFt.map((ft) => <FoodtruckCard foodtruck={ft} />);
    }
    return (
      <div className="flow-text center">
        Here are all the Foodtrucks you've added to your profile:
      </div>
    );
  };
  render() {
    return <div className="div">{this.renderFoodtruckCards()}mklml</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    allFoodtrucks: state.foodtruckReducer,
  };
};
export default connect(mapStateToProps, null)(Home);
