import {
  addFoodtruck,
  setAllFoodtrucks,
  fetchFoodtruck,
  deleteFoodtruck,
  updateFoodtruckData,
} from "../reducers/foodtruckReducer";
import { resetFoodtruckForm } from "./handleNewFoodtruckForm";
export const getAllFoodtrucks = () => {
  return (dispatch, getState) => {
    return fetch(`http://localhost:3000/api/v1/foodtrucks`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.error) {
          debugger;
        } else {
          dispatch(setAllFoodtrucks(response));
        }
      })
      .catch(console.log);
  };
};

export const getFoodtruck = (accountId, foodtruckId) => {
  return (dispatch) => {
    return (
      fetch(
        `http://localhost:3000/api/v1/accounts/${accountId}/food_trucks/${foodtruckId}`
      ),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
        .then((res) => res.json())
        .then((response) => {
          debugger;
          if (response.error) {
            alert(response.error);
          } else {
            dispatch(fetchFoodtruck(response));
          }
        })
        .catch(console.log)
    );
  };
};

export const updateFoodtruck = (foodData, accountId, foodtruckId, history) => {
  return (dispatch) => {
    const url = `http://localhost:3000/api/v1/accounts/${accountId}/foodtrucks/${foodtruckId}`;
    const foodtruckData = {
      food_truck: foodData,
    };
    return fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(foodtruckData),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.error) {
          alert(response.error);
        } else {
          dispatch(updateFoodtruckData(response));
          dispatch(resetFoodtruckForm());
          alert("Foodtruck data updated!");
          history.push(`/accounts/${accountId}/foodtrucks/${foodtruckId}`);
        }
      })
      .catch(console.log);
  };
};

export const createFoodtruck = (foodData, accountId, history) => {
  return (dispatch) => {
    const foodtruckData = {
      food_truck: foodData,
    };
    const url = `http://localhost:3000/api/v1/accounts/${accountId}/foodtrucks`;
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(foodtruckData),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          alert(response.error);
        } else {
          dispatch(addFoodtruck(response));
          dispatch(resetFoodtruckForm());
          alert("New Foodtruck Added successfuly.");
          history.push("/");
        }
      })
      .catch(console.log);
  };
};

export const removeFoodtruck = (foodtruckId, accountId, history) => {
  return (dispatch) => {
    const url = `http://localhost:3000/api/v1/accounts/${accountId}/foodtrucks/${foodtruckId}`;
    return fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          alert(response.error);
        } else {
          dispatch(deleteFoodtruck(response));
          alert("Foodtruck deleted successfully.");
          history.push("/");
        }
      })
      .catch(console.log);
  };
};
