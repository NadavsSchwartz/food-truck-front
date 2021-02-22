import React, { Component } from "react";
import { connect } from "react-redux";
class Delete extends Component {
  handleClick = () => {
    if (this.props.allFoodtrucks && this.props.currentAccount) {
      const accId = this.props.currentAccount.account.action.id;
      const foodtruck = this.props.allFoodtrucks.find(
        (ft) => (ft.account_id = accId)
      );
      this.props.delete(foodtruck.id, accId, this.props.history);
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
