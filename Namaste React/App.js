import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => JS OBJECT => Render() => HTMLElement

const heading = React.createElement("h1", { id: "heading" }, "Hello i'm HEADING");
console.log(heading);

//JSX(transpiled before it reaches JS engine) - PARCEL - BABEL
//JSX => babel transpiles it into React.createElement => JS OBJECT => Render() => HTMLElement

//JSX-> HTML-like syntax
const jsxHeading= <h1 id="heading" className="head">Namaste React using JSX🚀</h1>
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);