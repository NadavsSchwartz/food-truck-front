import React, { Component } from "react";
import { connect } from "react-redux";

import FoodtruckCard from "../components/FoodtruckCard";

// class Home extends Component {
//   renderFoodtruckCards = () => {
//     if (
//       this.props.allFoodtrucks &&
//       this.props.allFoodtrucks.allFoodtrucks.length > 0
//     ) {
//       const allFt = this.props.allFoodtrucks.allFoodtrucks;
//       return allFt.map((ft) => <FoodtruckCard key={ft.id} foodtruck={ft} />);
//     } else if (this.props.currentAccount && this.props.currentAccount.account) {

class Home extends Component {
  render() {
    return <div className="div">HomePage(google maps implenetaion)</div>;
  }
}

export default Home;
