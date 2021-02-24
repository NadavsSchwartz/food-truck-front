import React, { Component } from "react";
import { connect } from "react-redux";
class Delete extends Component {
  handleClick = () => {
    if (this.props.allFoodtrucks && this.props.currentAccount) {
      const accountId = this.props.currentAccount.account.action.id;
      let foodtruck = [];
      if (this.props.allFoodtrucks.length > 1) {
        foodtruck = this.props.allFoodtrucks.find(
          (foodTruck) => foodTruck.id == this.props.match.params.id
        );
      } else {
        foodtruck = this.props.allFoodtrucks[0];
      }

      this.props.delete(foodtruck.id, accountId, this.props.history);
    } else {
      return "error";
    }
  };
  render() {
    return (
      <div className="container">
        <p className="center">
          <button className="btn indigo" onClick={this.handleClick}>
            Delete foodtruck
          </button>
        </p>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    currentAccount: state.currentAccount,
    allFoodtrucks: state.foodtruckReducer.allFoodtrucks,
  };
};

export default connect(mapStateToProps, null)(Delete);
