import React from "react";
import ReactDOM from "react-dom/client";

// React Element

const heading = React.createElement("h1", { id: "heading" }, "namaste react");

console.log(heading);

/**
 * how jsx code is executed:
 *
 * Step 1: Babel converts the jsx code into reactDOM element
 * Step 2: now the reactDOM is converted into an JS object
 * Step 3: finally, the element is rendered into html file
 *
 * Note: This whole process is managed by parcel bundler
 *
 */

const jsxHeading = (
  <h1 className="heading" tabIndex="5">
    Namaste React using JSX{" "}
  </h1>
);

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
