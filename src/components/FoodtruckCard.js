import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const FoodtruckCard = ({ foodtruck, currentAccount, loggedIn }) => {
  if (foodtruck && loggedIn) {
    return (
      <div className="row center">
        <div className="col s12 m5">
          <div className="card blue-grey">
            <div className="card-content white-text">
              <div className="card-title">
                <p className="flow-text">{foodtruck.name}</p>
                <a className="btn">
                  That foodtruck was added by
                  {foodtruck.account_id}
                </a>
                <p>{foodtruck.description}</p>
              </div>
              <div className="row">
                <div className="col s3">Category: {foodtruck.category}</div>
                <div className="col s3">Hours: {foodtruck.hours}</div>
                <div className="col s3">Location: {foodtruck.location}</div>
                <div className="col s3">Score: {foodtruck.score}</div>
              </div>
              <div className="card-action">
                <a href="">more details</a>
                {foodtruck.account_id === currentAccount.account.action.id ? (
                  <Link to={`/food_truck/${foodtruck.id}/edit`}>EDIT</Link>
                ) : null}
                <a href="">delete</a>
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
  } else if (foodtruck) {
    return <div className="card">Under Construction</div>;
  }
  return <p>no foodtruck</p>;
};

const mapStateToProps = (state) => {
  return {
    currentAccount: state.currentAccount,
    loggedIn: !!state.currentAccount,
  };
};

export default connect(mapStateToProps)(FoodtruckCard);
