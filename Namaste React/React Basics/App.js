import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => JS OBJECT => Render() => HTMLElement

const heading = React.createElement("h1", { id: "heading" }, "Hello i'm HEADING");
console.log(heading);

//JSX(transpiled before it reaches JS engine) - PARCEL - BABEL
//JSX => babel transpiles it into React.createElement => JS OBJECT => Render() => HTMLElement

//JSX-> HTML-like syntax
const jsxHeading = (
<h1 id="heading" className="head">
    Namaste React using JSX🚀
</h1>
);
console.log(jsxHeading);

const Title=()=>
    <h1>Devesh Tuteja</h1>

//REACT COMPONENT
// const HeadingComponent = () => {
//     return <h1 className="heading"> Namaste React FUNCTIONAL COMPONENT </h1>;
// }
//these two are same

//Component Composition -> Components inside Components
const HeadingComponent = () => 
<div id="container">
    <Title/>
    <Title></Title>
    {Title()}
    {/* any piece of javascript code */}
    {console.log("hbfkjnkdfkjdn")}
    <h1 className="heading"> Namaste React FUNCTIONAL COMPONENT </h1>
</div>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);