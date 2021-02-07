import {
  addFoodtruck,
  setAllFoodtrucks,
  fetchFoodtruck,
} from "../reducers/foodtruckReducer";
import {
  updateFoodtruckForm,
  resetFoodtruckForm,
} from "./handleNewFoodtruckForm";

export const getAllFoodtrucks = () => {
  return (dispatch, getState) => {
    console.log(getState());
    return fetch(`http://localhost:3000/api/v1/foodtrucks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.error) {
          alert(response.error);
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

export const updateFoodtruck = (foodtruckData, accountId, foodtruckId) => {
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
        `http://localhost:3000/api/v1/accounts/${accountId}/foodtrucks/${foodtruckId}`
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
            dispatch(updateFoodtruck(response));
            dispatch(updateFoodtruckForm());
          }
        })
        .catch(console.log)
    );
  };
};

export const createFoodtruck = (foodData, accountId) => {
  const foodtruckData = {
    food_truck: foodData,
  };
  const url = `http://localhost:3000/api/v1/accounts/${accountId}/foodtrucks`;
  return (dispatch) => {
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
          alert("New Foodtruck Added successfully successfuly.");
        }
      })
      .catch(console.log);
  };
};
