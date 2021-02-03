import React from "react";
import { Router, Link } from "react-router-dom";
import Account from "./Account";

function Accounts(props) {
  return (
    <div className="card">
      {props.accounts.map((account) => (
        <div key={account.id}>
          <Link to={`/accounts/${account.id}`}> {account.name} </Link>
        </div>
      ))}
    </div>
  );
}
export default Accounts;
