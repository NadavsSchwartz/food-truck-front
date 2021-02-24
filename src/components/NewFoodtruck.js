import React from "react";
import { Redirect } from "react-router-dom";
import M from "materialize-css";

class NewFoodtruck extends React.Component {
  state = {
    name: "",
    location: "",
    category: "",
    hours: "",
    score: 0,
    description: "",
    account_id: this.props.account_id,
  };
  componentDidMount() {
    const range = document.querySelectorAll("input[type=range]");
    M.Range.init(range);

    if (this.props.ft) {
      const foodTruck = this.props.ft;
      this.setState({
        name: foodTruck.name,
        location: foodTruck.location,
        category: foodTruck.category,
        hours: foodTruck.hours,
        description: foodTruck.description,
        score: foodTruck.score,
      });
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const accountId = this.state.account_id;
    if (this.props.ftId) {
      const foodTruckId = this.props.ftId;
      this.props.onSubmit(
        this.state,
        accountId,
        foodTruckId,
        this.props.history
      );
    } else {
      this.props.onSubmit(this.state, accountId, this.props.history);
    }
  };

  renderForm = () => {
    if (this.props) {
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
              <h5 className="indigo-text">{this.props.buttonText}</h5>
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
                      <label htmlFor="name">Foodtruck Name</label>
                      <input
                        className="validate"
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder={this.state.name}
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s12">
                      <label htmlFor="location">Foodtruck Location</label>
                      <input
                        className="validate"
                        type="text"
                        name="location"
                        value={this.state.location}
                        onChange={this.handleChange}
                        placeholder={this.state.location}
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s12">
                      <label htmlFor="category">Foodtruck Category</label>
                      <input
                        className="validate"
                        type="text"
                        name="category"
                        value={this.state.category}
                        onChange={this.handleChange}
                        placeholder={this.state.category}
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s12">
                      <label htmlFor="hours">Foodtruck Hours</label>
                      <input
                        className="validate"
                        type="text"
                        name="hours"
                        value={this.state.hours}
                        onChange={this.handleChange}
                        placeholder={this.state.hours}
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s12">
                      <label htmlFor="description">
                        Foodtruck's Description
                      </label>
                      <input
                        className="validate"
                        type="text"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                        placeholder={this.state.description}
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="row col s12">
                    <label htmlFor="score">Foodtruck Score</label>
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
                        placeholder={this.state.score}
                        required
                      ></input>
                    </p>

                    <button type="submit" className="btn indigo col s12">
                      {this.props.buttonText}
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

export default NewFoodtruck;
