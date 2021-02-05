const initialState = {
  allFoodtrucks: [],
};

export default function manageFoodtruck(state = initialState, action) {
  switch (action.type) {
    case "FETCH_FOODTRUCK":
      return {
        ...state,
        foodtruck: action.foodtruck,
      };
    case "ADD_FOODTRUCK":
      return {
        ...state,
        allFoodtrucks: [...state.allFoodtrucks, action.foodtruck],
      };
    case "UPDATE_FOODTRUCK":
      return {
        ...state,
        allFoodtrucks: state.allFoodtrucks.map((foodtruck) => {
          if (action.foodtruck.id === foodtruck.id) {
            return action.foodtruck;
          }
          return foodtruck;
        }),
      };
    default:
      return state;
  }
}

export const setAllFoodtrucks = (allFoodtrucks) => {
  return {
    type: "SET_ALL_FOODTRUCKS",
    allFoodtrucks,
  };
};


export const addFoodtruck = (foodtruck) => {
  return {
    type: "ADD_FOODTRUCK",
    action: foodtruck,
  };
};
export const updateFoodtruck = (foodtruck) => {
  return {
    type: "UPDATE_FOODTRUCK",
    foodtruck,
  };
};

export const fetchFoodtruck = (foodtruck) => {
  return {
    type: "FETCH_FOODTRUCK",
    foodtruck,
  };
};

