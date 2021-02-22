const initialState = {
  allFoodtrucks: [],
};

export default function manageFoodtruck(state = initialState, action) {
  switch (action.type) {
    case "SET_ALL_FOODTRUCKS":
      return {
        ...state,
        allFoodtrucks: action.action,
      };
    case "FETCH_FOODTRUCK":
      return {
        ...state,
        allFoodtrucks: action.action,
      };
    case "ADD_FOODTRUCK":
      return {
        ...state,
        allFoodtrucks: [...state.allFoodtrucks, action.action],
      };
    case "UPDATE_FOODTRUCK":
      return {
        ...state,
        allFoodtrucks: state.allFoodtrucks.splice(
          action.action.foodtruck_id,
          1,
          action.action
        ),
      };
    case "DELETE_FOODTRUCK":
      return {
        ...state,
        allFoodtrucks: state.allFoodtrucks.splice(
          action.action.foodtruck_id,
          1
        ),
      };
    default:
      return state;
  }
}

export const setAllFoodtrucks = (allTrucks) => {
  return {
    type: "SET_ALL_FOODTRUCKS",
    action: allTrucks,
  };
};

export const addFoodtruck = (foodtruck) => {
  return {
    type: "ADD_FOODTRUCK",
    action: foodtruck,
  };
};
export const updateFoodtruckData = (foodtruck) => {
  return {
    type: "UPDATE_FOODTRUCK",
    action: foodtruck,
  };
};

export const fetchFoodtruck = (foodtruck) => {
  return {
    type: "FETCH_FOODTRUCK",
    action: foodtruck,
  };
};

export const deleteFoodtruck = (foodtruck) => {
  return {
    type: "DELETE_FOODTRUCK",
    action: foodtruck,
  };
};
