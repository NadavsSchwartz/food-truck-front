import React from "react";

function Accounts({ accounts }) {
  return (
    <div className="card">
      {accounts.map((acc) => 
        <li key={acc.id}>
          {acc.name} - {acc.food_trucks.length}
        </li>
      )}
    </div>
  );
}

export default Accounts;
