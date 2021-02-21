import React, { Component } from "react";

import FoodtruckCard from "../components/FoodtruckCard";
import PlacesAutocomplete from "react-places-autocomplete";

const LookupFoodtruck = () => {
  const [address, setAddress] = React.useState("");

  const handleSelect = async (value) => {
     setAddress(value);
    console.log(value);
    const a = this.autocomplete.getPlace();
    console.log(a);
    debugger;
  };

  return (
    <div className="container">
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({
          getInputProps,
          suggestions,
          getSuggestionItemProps,
          loading,

        }) => (
          <div>
            <input
              {...getInputProps({ placeholder: "Look up  new Foodtruck!" })}
            />

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "#ECEDED" : "#fff",
                };
                console.log(suggestion);
                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>

                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};
export default LookupFoodtruck;
