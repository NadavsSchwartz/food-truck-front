import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import FoodtruckCard from "../components/FoodtruckCard";

const AccountPage = ({ allFoodtrucks, account }) => {
  const renderFoodtruckCards = () => {
    if (allFoodtrucks && allFoodtrucks.length > 0) {
      return allFoodtrucks.map((foodtruck) => (
        <FoodtruckCard
          key={foodtruck.id}
          AccountPageFoodtrucks={foodtruck}
          Account={account}
        />
      ));
    } else if (allFoodtrucks.length === 0 && account) {
      return (
        <div className="flow-text center">
          no foodtrucks were found, feel free to add one!
        </div>
      );
    } else if (!account) {
      return (
        <div className="flow-text center">
          Login to add foodtrucks to your profile!
        </div>
      );
    }
  };

  return <div className="div">{renderFoodtruckCards()}</div>;
};
const mapStateToProps = (state) => {
  return {
    allFoodtrucks: state.foodtruckReducer.allFoodtrucks,
  };
};
export default connect(mapStateToProps)(AccountPage);
