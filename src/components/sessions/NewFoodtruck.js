import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createFoodtruck } from "../../actions/foodTruck";
import { updateFoodtruckForm } from "../../actions/handleNewFoodtruckForm";

const NewFoodtruck = ({
  foodtruckFormData,
  updateFoodtruckForm,
  createFoodtruck,
  currentAccount,
  loggedIn,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormInfo = {
      ...foodtruckFormData,
      [name]: value,
    };
    updateFoodtruckForm(updatedFormInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const accountId = currentAccount.account.action.id;
    createFoodtruck(foodtruckFormData, accountId);
  };

  const renderForm = () => {
    if (loggedIn && currentAccount.account.action) {
      return (
        <div
          className="section"
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "150vh",
          }}
        >
          <div className="center">
            <div className="container">
              <h5 className="indigo-text">
                Add a new FoodTruck to your profile!
              </h5>
              <div
                className="z-depth-1 grey lighten-4 container"
                style={{
                  display: "inline-block",
                  padding: "32px 48px 0px 48px",
                  border: "1px solid #EEE",
                }}
              >
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col s12">
                      <label htmlFor="name"></label>
                      <input
                        className="validate"
                        type="text"
                        name="name"
                        value={foodtruckFormData.name}
                        onChange={handleChange}
                        placeholder="Enter the Foodtruck name"
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s12">
                      <label htmlFor="location"></label>
                      <input
                        className="validate"
                        type="text"
                        name="location"
                        value={foodtruckFormData.location}
                        onChange={handleChange}
                        placeholder="Enter The Foodtruck location"
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s12">
                      <label htmlFor="category"></label>
                      <input
                        className="validate"
                        type="text"
                        name="category"
                        value={foodtruckFormData.category}
                        onChange={handleChange}
                        placeholder="Enter The Foodtruck category"
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s12">
                      <label htmlFor="hours"></label>
                      <input
                        className="validate"
                        type="text"
                        name="hours"
                        value={foodtruckFormData.hours}
                        onChange={handleChange}
                        placeholder="Enter The Foodtruck hours"
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s12">
                      <label htmlFor="description"></label>
                      <input
                        className="validate"
                        type="text"
                        name="description"
                        value={foodtruckFormData.description}
                        onChange={handleChange}
                        placeholder="Enter The Foodtruck description"
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="row col s12">
                    <label htmlFor="score"></label>
                    <p className="range-field row col s12">
                      <input
                        className="validate"
                        type="range"
                        step="1"
                        name="score"
                        min="0"
                        max="10"
                        value={foodtruckFormData.score}
                        onChange={handleChange}
                        placeholder="Enter The Foodtruck score"
                        required
                      ></input>
                    </p>

                    <button type="submit" className="btn indigo col s12">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <Redirect to="/"></Redirect>;
    }
  };

  return <div>{renderForm()}</div>;
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    currentAccount: state.currentAccount,
    loggedIn: !!state.currentAccount,
    foodtruckFormData: state.NewFoodtruckReducer,
  };
};

export default connect(mapStateToProps, {
  updateFoodtruckForm,
  createFoodtruck,
})(NewFoodtruck);
