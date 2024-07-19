const heading = React.createElement(
    "h1", 
    {
    id:"heading",
    xyz:"abc"
}, 
"hello world from react");

console.log(heading); //OBJECT

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);