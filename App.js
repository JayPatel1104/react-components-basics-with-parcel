import React from "react";
import ReactDOM from "react-dom/client";

const title = (
  <h1 className="heading" tabIndex="5">
    Namaste React using JSX{" "}
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
const number = 1000;
const HeadingComponent = () => (
  <div id="container" className="heading">
    {title}
    <h1>This is a heading component using functional component</h1>
  </div>
);

root.render(<HeadingComponent />);
