import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const FoodtruckCard = ({
  foodtruck,
  currentAccount,
  loggedIn,
  allFoodtrucks,
  truck_id,
}) => {
  if (foodtruck && loggedIn) {
    return (
      <div className="row center">
        <div className="col s12 m6 l4">
          <div className="card grey darken-1">
            <div className="card-content white-text">
              <div className="card-title m6 l4">
                <p className="flow-text">{foodtruck.name}</p>
              </div>
              <div className="row ">
                <div className="col s3">Category: {foodtruck.category}</div>
                <div className="col s3">Hours: {foodtruck.hours}</div>
                <div className="col s3">Location: {foodtruck.location}</div>
                <div className="col s3">Score: {foodtruck.score}</div>
              </div>

              <div className="card-action">
                <Link
                  to={`/accounts/${foodtruck.account_id}/foodtrucks/${foodtruck.id}`}
                >
                  More Details
                </Link>
                {foodtruck.account_id === currentAccount.account.action.id ? (
                  <p>
                    <Link
                      to={`/accounts/${foodtruck.account_id}/foodtrucks/${foodtruck.id}/edit`}
                    >
                      EDIT
                    </Link>
                    <Link
                      to={`/accounts/${foodtruck.account_id}/foodtrucks/${foodtruck.id}/delete`}
                    >
                      delete
                    </Link>
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (!!truck_id) {
    const foodtruck = allFoodtrucks.find((ft) => ft.id == truck_id);
    return <div>{foodtruck.score}</div>;
  } else if (allFoodtrucks && currentAccount) {
    const foodtruck = allFoodtrucks.find(
      (ft) => ft.account_id == currentAccount.account.action.id
    );
    return (
      <div className=" row center">
        <div className="col s12 m6 l6">
          <div className="card blue-grey">
            <div className="card-content white-text">
              <div className="card-title">
                <p className="flow-text">{foodtruck.name}</p>
              </div>
              <div className="row">
                <div className="col s3">Category: {foodtruck.category}</div>
                <div className="col s3">Hours: {foodtruck.hours}</div>
                <div className="col s3">Location: {foodtruck.location}</div>
                <div className="col s3">Score: {foodtruck.score}</div>
              </div>
              <div className="row">
                <p className="row ">Description: {foodtruck.description}</p>
                <p className="row">
                  Added at:{" "}
                  {foodtruck.created_at.split("T")[0].replaceAll("-", "/")}
                </p>
              </div>
              <div className="card-action">
                {foodtruck.account_id === currentAccount.account.action.id ? (
                  <p>
                    <Link
                      to={`/accounts/${foodtruck.account_id}/foodtrucks/${foodtruck.id}/edit`}
                    >
                      EDIT
                    </Link>
                    <Link
                      to={`/accounts/${foodtruck.account_id}/foodtrucks/${foodtruck.id}/delete`}
                    >
                      delete
                    </Link>
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return "/";
};

const mapStateToProps = (state) => {
  return {
    currentAccount: state.currentAccount,
    loggedIn: !!state.currentAccount,
    allFoodtrucks: state.foodtruckReducer.allFoodtrucks,
  };
};

export default connect(mapStateToProps)(FoodtruckCard);
