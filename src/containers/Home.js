import React, { useState } from "react";
import { connect } from "react-redux";
import { Card, Button, Form } from "react-bootstrap";

const Home = ({ location }) => {
  const [toggled, setToggled] = useState(false);

//   const getRecipes = () => {
//     // let { recipes } = props
//     if (searchResults !== undefined && searchResults.length > 0) {
//       recipes = searchResults;
//       return recipes;
//     } else {
//       return recipes;
//     }
//   };

  //   const sortByAlph = () => {
  //     if (toggled) {
  //       return getRecipes()
  //         .slice()
  //         .sort((a, b) => a.attributes.name.localeCompare(b.attributes.name));
  //     } else {
  //       return getRecipes();
  //     }
  //   };

  //   const recipeCards =
  //     sortByAlph().length > 0 ? (
  //       sortByAlph().map((r, i) => {
  //         return (
  //           <React.Fragment key={i}>
  //             <Card className="recipe-card">
  //               <div className="imageContainer">
  //                 <Card.Img variant="top" src={r.attributes.image_url} />
  //               </div>
  //               <Card.Body>
  //                 <Card.Title>{r.attributes.name}</Card.Title>
  //                 <Card.Text>{r.attributes.description}</Card.Text>
  //                 <Button variant="primary" href={`/recipes/${r.id}`}>
  //                   View Recipe
  //                 </Button>
  //               </Card.Body>
  //             </Card>
  //           </React.Fragment>
  //         );
  //       })
  //     ) : (
  //       <p>This is myRecipes with an empty array of recipes</p>
  //     );

  const toggle = () => {
    setToggled(!toggled);
  };

  return (
    <div>
      <p>hey</p>
      </div>
  )
}
// const mapStateToProps = (state) => {
//   return {
//     recipes: state.myRecipes.allRecipes,
//     searchResults: state.myRecipes.searchResults,
//   };
//}
export default connect(null, null)(Home);
