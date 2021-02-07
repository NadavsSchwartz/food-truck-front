import React from "react";
import { connect } from "react-redux";
import { getAllFoodtrucks } from ".././actions/foodTruck";

const Foodtruck = ({ currentAccount, loggedIn, getAllFoodtrucks }) => {
  // getAllFoodtrucks(currentAccount.account.action.id);

  return <div>asd</div>;
};
const mapStateToProps = (state) => {
  return {
    currentAccount: state.currentAccount,
    loggedIn: !!state.currentAccount,
  };
};
export default connect(mapStateToProps, { logout })(Foodtruck);
