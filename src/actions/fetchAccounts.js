 function fetchAccounts() {
  return (dispatch) => {
    fetch("http://127.0.0.1:3000/api/v1/accounts")
      .then((res) => res.json())
      .then((accountData) =>
{        dispatch({
          type: "FETCH_ACCOUNTS",
          payload: accountData
        })}
      );
  };
}

export default fetchAccounts