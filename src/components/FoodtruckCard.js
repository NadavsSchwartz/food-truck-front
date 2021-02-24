import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

const FoodtruckCard = ({ Account, AccountPageFoodtrucks, SingleFoodtruck }) => {
  const [score, setScore] = useState(0);
  if (SingleFoodtruck && Account) {
    const ft = SingleFoodtruck;
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
                {ft.account_id === Account.id ? (
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
  } else if (AccountPageFoodtrucks && Account) {
    const foodtruck = AccountPageFoodtrucks;
    return (
      <div className=" container center">
        <div className="col s12 m6 l6">
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
                {foodtruck.account_id === Account.id ? (
                  <p>
                    <Link
                      to={`/accounts/${foodtruck.account_id}/foodtrucks/${foodtruck.id}`}
                    >
                      More Details
                    </Link>
                    <Link
                      to={`/accounts/${foodtruck.account_id}/foodtrucks/${foodtruck.id}/edit`}
                      params={{ foodtruck }}
                    >
                      EDIT
                    </Link>
                    <Link
                      to={`/accounts/${foodtruck.account_id}/foodtrucks/${foodtruck.id}/delete`}
                      params={{ foodtruck: { foodtruck } }}
                    >
                      delete
                    </Link>
                  </p>
                ) : null}
                <button className="btn" onClick={() => setScore(score + 1)}>
                  number of likes:{score}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <Redirect to="/" />;
};
const mapStateToProps = (state) => {
  return {
    currentAccount: state.currentAccount.account,
  };
};
export default connect(mapStateToProps)(FoodtruckCard);
