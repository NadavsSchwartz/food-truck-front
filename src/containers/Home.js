import React from "react";

import background from "/Users/nadavschwartz/Desktop/food_truck-frontend/food_truck_front/src/background.jpg";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        overflow: "hidden",
        class: "responsive-img",
        height: "100%",
        width: "100%",
      }}
    >
      {/* <img
        className="responsive-img"
        src={background}
        alt="asd"
        style={{ objectFit: "cover" }}
      /> */}

      <h1 style={{ height: "100%", width: "100%" }}>a</h1>
    </div>
  );
};
export default Home;
