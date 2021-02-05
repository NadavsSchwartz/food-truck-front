import React from "react";

const Foodtruck = (props) => {
  return (
    <div>
      {props.foodtruck &&
        props.foodtruck.map((ft) => <div key={ft.id}>{ft.name}</div>)}
    </div>
  );
};
export default Foodtruck;
