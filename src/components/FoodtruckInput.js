import React, { Component } from "react";
import { connect } from "react-redux";
import NewFoodtruck from "./NewFoodtruck";

class FoodtruckInput extends Component {
  render() {
    return (
      <div>
        <NewFoodtruck />
      </div>
    );
  }
}
export default connect(null)(FoodtruckInput);
