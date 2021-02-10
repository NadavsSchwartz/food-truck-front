import React from "react";
import { Redirect } from "react-router-dom";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class NewFoodtruck extends React.Component {
  state = {
    name: "",
    location: "",
    category: "",
    hours: "",
    score: 0,
    description: "",
    account_id: 0,
  };
  componentDidMount() {
    if (this.props.allFoodtrucks) {
      const foodTruck = this.props.allFoodtrucks.find(
        (ft) => (ft.id = this.props.match.params.id)
      );
      if (foodTruck) {
        this.setState({
          name: foodTruck.name,
          location: foodTruck.location,
          category: foodTruck.category,
          hours: foodTruck.hours,
          description: foodTruck.description,
          score: foodTruck.score,
          account_id: foodTruck.account_id,
        });
      }
    }
    const el = document.querySelectorAll("input[id=input_char]");
    M.CharacterCounter.init(el);
    const range = document.querySelectorAll("input[type=range]");
    M.Range.init(range);

    const autoComplete = document.getElementById("autocomplete_input");
    const options = {
      data: {
        Israeli: null,
        Albanian: null,
        Argentine: null,
        Andhra: null,
        American: null,
        Mediterranean: null,
        Armenian: null,
        Brazilian: null,
        Chinese: null,
        French: null,
        Filipino: null,
        Italian: null,
        Jamaican: null,
        Japanese: null,
        Korean: null,
        Mexican: null,
        Peruvian: null,
        Portuguese: null,
        Russian: null,
        Spanish: null,
        Thai: null,
        Vietnamese: null,
      },
      limit: 5,
      minLength: 1,
      onAutocomplete: (value) => {
        this.setState({ category: value });
      },
    };
    M.Autocomplete.init(autoComplete, options);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      account_id: this.props.account.account.action.id,
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
    if (this.props.account.loggedIn) {
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
                      <label htmlFor="name" className="left indigo-text">
                        Foodtruck's name:
                      </label>
                      <input
                        id="input_char"
                        maxLength="20"
                        data-length="20"
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
                      <label htmlFor="location" className="left indigo-text">
                        Foodtruck's location:
                      </label>
                      <input
                        id="input_char"
                        className="validate"
                        maxLength="20"
                        data-length="20"
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
                    <div className="col s12 input-field">
                      <label htmlFor="category" className="left indigo-text">
                        Foodtruck's category:
                      </label>
                      <input
                        id="autocomplete_input"
                        className="autocomplete active"
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
                      <label htmlFor="hours" className="left indigo-text">
                        Foodtruck's hours of operation:
                      </label>
                      <input
                        id="input_char"
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
                      <label htmlFor="description" className="left indigo-text">
                        Foodtruck's description:
                      </label>
                      <input
                        id="input_char"
                        className="validate materialize-textarea"
                        maxLength="60"
                        data-length="60"
                        type="text"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                        placeholder={this.state.description}
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s12 input-field">
                      <input
                        id="rangefield"
                        className="validate "
                        type="range"
                        step="0.5"
                        // data-length="10"
                        name="score"
                        min="1"
                        max="10"
                        value={this.state.score}
                        onChange={this.handleChange}
                        placeholder={this.state.score}
                      ></input>
                      <p>
                        <label htmlFor="score" className="left indigo-text">
                          Foodtruck's score: {this.state.score}
                        </label>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s12">
                      <button type="submit" className="btn indigo col s12">
                        {this.props.buttonText}
                      </button>
                    </div>
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
