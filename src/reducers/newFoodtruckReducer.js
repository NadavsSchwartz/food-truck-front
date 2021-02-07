const initialState = {
  name: "",
  location: "",
  category: "",
  hours: "",
  score: 0,
  description: "",
  account_id: 0,
};

export default function manageFoodtruckForm(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_FOODTRUCK_FORM":
      return action.formData;
    case "RESET_FOODTRUCK_FORM":
      return initialState;
    default:
      return state;
  }
}
