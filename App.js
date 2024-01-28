import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = (
  <h1 className="heading" tabIndex="5">
    Namaste React using JSX{" "}
  </h1>
);

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

const HeadingComponent = () => (
  <div id="container">
    <h1>This is a heading component using functional component</h1>
  </div>
);

root.render(jsxHeading);
