import React from "react";
import ReactDOM from "react-dom/client";
/**
 * creating a nested struture using react as per the below given example:
 *
 * <div id="parent">
 *      <div id="child">
 *          <h1>
 *              I am a H1 tag
 *          </h1>
 *          <h2>
 *              I am a H2 tag
 *          </h2>
 *      </div>
 * *      <div id="child2">
 *          <h1>
 *              I am a H1 tag
 *          </h1>
 *          <h2>
 *              I am a H2 tag
 *          </h2>
 *      </div>
 * </div>
 *
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "nestedH1" },
      "Hello World, this is Jay Patel"
    ),
    React.createElement("h2", { id: "nestedH1" }, "I am a H2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "nestedH1" }, "I am a H1 Tag"),
    React.createElement("h2", { id: "nestedH1" }, "I am a H2 Tag"),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React"
// );
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
