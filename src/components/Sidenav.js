// import React, { Component } from "react";
// import M from "materialize-css";
// import { Link } from "react-router-dom";
// class Sidenav extends Component {
//   componentDidMount() {
//     const options = {
//       inDuration: 250,
//       outDuration: 200,
//       draggable: true,
//     };
//     M.Sidenav.init(this.Sidenav);

//     // let instance = M.Sidenav.getInstance(this.Sidenav);
//     // console.log(instance.isOpen);
//   }
//   render() {
//     return (
//       <div>
//         <ul
//           ref={(Sidenav) => {
//             this.Sidenav = Sidenav;
//           }}
//           id="slide-out"
//           className="sidenav"
//         >
//           <li>
//             <Link
//               to={`/`}
//             >
//               New Foodtruck
//             </Link>
//           </li>
//           <li>
//             <Link to={`/`}>
//               My Foodtrucks
//             </Link>
//           </li>
//           <li >
//             <Link to="/logout">Log out</Link>
//           </li>
//         </ul>
//         <a href="#!" data-target="slide-out" className="sidenav-trigger">
//           <i className="material-icons">menu</i>
//         </a>
//       </div>
//     );
//   }
// }

// export default Sidenav;
