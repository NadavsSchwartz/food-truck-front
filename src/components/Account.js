import React from "react";
import { Redirect } from "react-router-dom";

function Account(props) {
  let account = props.accounts[props.match.params.id];

  return (
    <div className="card">
      {account ? account.name : null}
    </div>
  );
}

export default Account;
