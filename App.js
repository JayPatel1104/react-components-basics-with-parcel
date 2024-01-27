import React from "react";
import ReactDOM from "react-dom/client";

// React Element

const heading = React.createElement("h1", { id: "heading" }, "namaste react");

console.log(heading);

//JSX

const jsxHeading = <h1>Namaste React using JSX</h1>;

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
