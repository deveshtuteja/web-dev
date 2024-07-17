import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App!</h1>
        </div>
    )
}

// const ReactElement={
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'click me to visit google',
// };

const anotherElement=(
    <a href="https://google.com" target='_blank'>Visit Google</a>
);
const otherElement="chai aur react";
const reactElement=React.createElement(
    //type, props, children(name),variables
    'a',
    {href:'https://google.com',target:'_blank'},
    'click me to visit google',
    otherElement
);

ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
