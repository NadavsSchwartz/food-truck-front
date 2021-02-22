import React from "react";

const FoodTrucks = () => {
  
    
    if (allFoodtrucks && currentAccount.loggedIn) {
        const foodtruck = allFoodtrucks.find((ft) => {
            return ft.account == currentAccount.account.action.id;
        });
        
        return (
            <div className=" container center">
      <div className="col s12 m6 l6">
        <div className="card blue-grey">
          <div className="card-content white-text">
            <div className="card-title">
              <p className="flow-text">{foodtruck.name}</p>
            </div>
            <div className="row">
              <div className="col s3">Category: {foodtruck.category}</div>
              <div className="col s3">Hours: {foodtruck.hours}</div>
              <div className="col s3">Location: {foodtruck.location}</div>
              <div className="col s3">Score: {foodtruck.score}</div>
            </div>
            <div className="row">
              <p className="row ">Description: {foodtruck.description}</p>
              <p className="row">
                Added at:{" "}
                {foodtruck.created_at.split("T")[0].replaceAll("-", "/")}
              </p>
            </div>
            <div className="card-action">
              {foodtruck.account_id === currentAccount.account.action.id ? (
                  <p>
                  <Link
                    to={`/accounts/${foodtruck.account_id}/foodtrucks/${foodtruck.id}/edit`}
                    >
                    EDIT
                  </Link>
                  <Link
                    to={`/accounts/${foodtruck.account_id}/foodtrucks/${foodtruck.id}/delete`}
                    >
                    delete
                  </Link>
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
  return "/";
}

const mapStateToProps = (state) => {
  return {
    currentAccount: state.currentAccount,
    loggedIn: !!state.currentAccount,
    allFoodtrucks: state.foodtruckReducer.allFoodtrucks,
  };
};

export default connect(mapStateToProps)(FoodTrucks);
