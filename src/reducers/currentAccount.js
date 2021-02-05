const initialState = {
  account: {},
  loggedIn: false,
};

export default function manageCurrentAccount(state = initialState, action) {
  switch (action.type) {
    case "SET_CURRENT_ACCOUNT":
      return {
        ...state,
        account: action,
        loggedIn: true,
      };
    case "CLEAR_CURRENT_ACCOUNT":
      return null;
    default:
      return state;
  }
}
