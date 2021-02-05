import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createFoodtruck } from "../../actions/foodtruckReducer";


class NewFoodtruck extends React.Component {
  state = {
    name: "",
    location: "",
    category: "",
    hours: "",
    score: 0,
    description: "",
    account_id: this.props.currentAccount.account.action.id,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
     const accountId = this.props.currentAccount.account.action.id;
    createFoodtruck(this.state)
  };

  renderForm = () => {
    if (this.props.loggedIn && this.props.currentAccount.account.action) {
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
                <form onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col s12">
                      <label htmlFor="name"></label>
                      <input
                        className="validate"
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
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
                        value={this.state.location}
                        onChange={this.handleChange}
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
                        value={this.state.category}
                        onChange={this.handleChange}
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
                        value={this.state.hours}
                        onChange={this.handleChange}
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
                        value={this.state.description}
                        onChange={this.handleChange}
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
                        value={this.state.score}
                        onChange={this.handleChange}
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

  render() {
    return <div>{this.renderForm()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    currentAccount: state.currentAccount,
    loggedIn: !!state.currentAccount,
  };
};

export default connect(mapStateToProps, { createFoodtruck })(NewFoodtruck);
