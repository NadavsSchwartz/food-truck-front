import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const FoodtruckCard = ({
  foodtruck,
  currentAccount,
  loggedIn,
  allFoodtrucks,
}) => {
  if (foodtruck && loggedIn) {
    debugger
    return (
<<<<<<< Updated upstream
      <div className="center">
        <div className="col s12 m5">
          <div className="card blue-grey">
=======
      <div className="container center">
        <div className="col s12 m6 l6">
          <div className="card grey darken-1">
>>>>>>> Stashed changes
            <div className="card-content white-text">
              <div className="card-title">
                <p className="flow-text">{foodtruck.name}</p>
                <p>{foodtruck.description}</p>
              </div>
              <div className="row">
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
<<<<<<< HEAD
            {/* <div className="edit">
                  {" "}
                  {foodtruck.account_id === currentAccount.account.action.id ? (
                    <button
                      className="btn btn-indigo sm"
                      href={`/recipes/${foodtruck.id}/edit`}
                    >
                      Edit This Foodtruck
                    </button>
                  ) : (
                    "You can only edit foodtrucks that belongs to your account"
                  )} 
                </div>*/}
=======

>>>>>>> parent of 4bd7928b... responsiveness and future imporovment for google places/map
          </div>
        </div>
      </div>
    );
<<<<<<< Updated upstream
  } else if (allFoodtrucks && currentAccount) {
    const foodtruck = allFoodtrucks.find(
      (ft) => ft.account_id == currentAccount.account.action.id
    );
    debugger;
    return (
      <div className="center">
        <div className="col s12 m5">
=======
  } else if (!!truck_id) {
    const ft = allFoodtrucks.find(
      (foodtruck) => (foodtruck.id = parseInt(truck_id))
    );
    return (
      <div className=" container center">
        <div className="col s12 m6 l6">
          <div className="card blue-grey">
            <div className="card-content white-text">
              <div className="card-title">
                <p className="flow-text">{ft.name}</p>
              </div>
              <div className="row">
                <div className="col s3">Category: {ft.category}</div>
                <div className="col s3">Hours: {ft.hours}</div>
                <div className="col s3">Location: {ft.location}</div>
                <div className="col s3">Score: {ft.score}</div>
              </div>
              <div className="row">
                <p className="row ">Description: {ft.description}</p>
                <p className="row">
                  Added at: {ft.created_at.split("T")[0].replaceAll("-", "/")}
                </p>
              </div>
              <div className="card-action">
                {ft.account_id === currentAccount.account.action.id ? (
                  <p>
                    <Link
                      to={`/accounts/${ft.account_id}/foodtrucks/${ft.id}/edit`}
                    >
                      EDIT
                    </Link>
                    <Link
                      to={`/accounts/${ft.account_id}/foodtrucks/${ft.id}/delete`}
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
  } else if (allFoodtrucks && currentAccount.loggedIn) {
    debugger;
    const foodtruck = allFoodtrucks.find((ft) => {
      return ft.account == currentAccount.account.action.id;
    });

    return (
      <div className=" container center">
        <div className="col s12 m6 l6">
>>>>>>> Stashed changes
          <div className="card blue-grey">
            <div className="card-content white-text">
              <div className="card-title">
                <p className="flow-text">{foodtruck.name}</p>
                <p>{foodtruck.description}</p>
              </div>
              <div className="row">
                <div className="col s3">Category: {foodtruck.category}</div>
                <div className="col s3">Hours: {foodtruck.hours}</div>
                <div className="col s3">Location: {foodtruck.location}</div>
                <div className="col s3">Score: {foodtruck.score}</div>
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
            {/* <div className="edit">
                  {" "}
                  {foodtruck.account_id === currentAccount.account.action.id ? (
                    <button
                      className="btn btn-indigo sm"
                      href={`/recipes/${foodtruck.id}/edit`}
                    >
                      Edit This Foodtruck
                    </button>
                  ) : (
                    "You can only edit foodtrucks that belongs to your account"
                  )} 
                </div>*/}
          </div>
        </div>
      </div>
    );
  }
<<<<<<< HEAD
  return;
=======
  return "hey";
>>>>>>> parent of 4bd7928b... responsiveness and future imporovment for google places/map
};

const mapStateToProps = (state) => {
  return {
    currentAccount: state.currentAccount,
    loggedIn: !!state.currentAccount,
    allFoodtrucks: state.foodtruckReducer.allFoodtrucks,
  };
};

export default connect(mapStateToProps)(FoodtruckCard);
