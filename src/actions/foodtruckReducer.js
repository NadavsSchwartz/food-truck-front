import {
  addFoodtruck,
  setAllFoodtrucks,
  fetchFoodtruck,
} from "../reducers/foodtruckReducer";
import axios from "axios";

export const getAllFoodtrucks = (accountId) => {
  return (dispatch, getState) => {
    console.log(getState());
    return fetch(
      `http://localhost:3000/api/v1/accounts/${accountId}/food_trucks`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((response) => {
        if (response.error) {
          alert(response.error);
        } else {
          dispatch(setAllFoodtrucks(response.data));
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
            dispatch(fetchFoodtruck(response.data));
          }
        })
        .catch(console.log)
    );
  };
};

export const updateFoodtruck = (
  foodtruckData,
  accountId,
  foodtruckId,
  history
) => {
  return (dispatch) => {
    const sendableFoodtruckData = {
      name: foodtruckData.name,
      location: foodtruckData.location,
      category: foodtruckData.category,
      hours: foodtruckData.hours,
      score: foodtruckData.score,
      description: foodtruckData.description,
      accountId: foodtruckData.accountId,
    };
    return (
      fetch(
        `http://localhost:3000/api/v1/accounts/${accountId}/food_trucks/${foodtruckId}`
      ),
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sendableFoodtruckData),
      }

        .then((res) => res.json())
        .then((response) => {
          if (response.error) {
            alert(response.error);
          } else {
            dispatch(updateFoodtruck(response.data));
            history.push(`/accounts/${accountId}/food_trucks/${foodtruckId}`);
          }
        })
        .catch(console.log)
    );
  };
};

export const createFoodtruck = (foodtruckData) => {
  const url = `http://localhost:3000/api/v1/accounts/${foodtruckData.account_id}/food_trucks`;
  return (dispatch) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(foodtruckData),
  })
    .then((resp) => resp.json())
    .then((resp) => {
      debugger;
      if (resp.error) {
        alert(resp.error);
      } else {
         dispatch(addFoodtruck(resp.data));
      }
    })
    .catch(console.log);
};
