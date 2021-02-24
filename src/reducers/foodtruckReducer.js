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
      const index = state.allFoodtrucks.indexOf(
        state.allFoodtrucks.find((ft) => ft.id == action.action.id)
      );
      state.allFoodtrucks[index] = action.action;
      return {
        ...state,
        allFoodtrucks: action.action,
      };
    case "CLEAR_FOODTRUCKS":
      return { allFoodtrucks: [] };
    case "DELETE_FOODTRUCK":
      let updatedState = [];
      if (state.allFoodtrucks.length > 1) {
        updatedState = state.allFoodtrucks.filter(
          (ft) => ft.id != action.action.foodtruck_id
        );
      }
      return {
        allFoodtrucks: updatedState,
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

export const deleteFoodtruck = (foodtruck) => {
  return {
    type: "DELETE_FOODTRUCK",
    action: foodtruck,
  };
};

export const clearFoodtrucks = () => {
  return {
    type: "CLEAR_FOODTRUCKS",
  };
};
