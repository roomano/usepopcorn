import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="cyan" maxRating={10} onSetRating={setMovieRating} />
//       <p>This Movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} />
    <StarRating maxRating={3} messages={["um", "dois", "tres"]} />
    <StarRating maxRating={6} defaultRating={3} /> */}

    {/* <Test /> */}
  </React.StrictMode>
);
