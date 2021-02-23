import React from "react";
import { Link } from "react-router-dom";

const SingleFoodtruckCard = ({ AccountPageFoodtrucks, currentAccount }) => {
  const foodtruck = AccountPageFoodtrucks;
  debugger;
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
};

export default SingleFoodtruckCard;
