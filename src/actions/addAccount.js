export const addAccount = (data) => {
  return (dispatch) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({ data });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: body,
    };
    fetch("http://localhost:3000/api/v1/accounts", requestOptions)
      .then((res) => res.json())
      .then((account) => dispatch({ type: "ADD_ACCOUNT", payload: account }));
  };
};
