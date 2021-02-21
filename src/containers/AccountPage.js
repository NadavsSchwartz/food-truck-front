import React, { Component } from "react";

import FoodtruckCard from "../components/FoodtruckCard";

class AccountPage extends Component {
  renderFoodtruckCards = () => {
    const Foodtrucks = this.props.alltrucks;
    const account = this.props.account;
    if (Foodtrucks && Foodtrucks.length > 0) {
      return Foodtrucks.map((ft) => (
        <FoodtruckCard key={ft.id} foodtruck={ft} />
      ));
    } else if (Foodtrucks && account) {
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
  render() {
    return <div className="div">{this.renderFoodtruckCards()}</div>;
  }
}
export default AccountPage;
