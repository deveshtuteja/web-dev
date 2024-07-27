import React from "react";
import UserClass from "./UserClass";


class About extends React.Component {
    constructor(props) {
        super(props);

        // console.log("Parent Constructor");
    }
    componentDidMount(){
        // console.log("Parent component did mount");
    }
    render() {
        // console.log("Parent Render");
        return (
            <div>
                <h1>About Class Component</h1>
                <h2>This is Namaste React Web Series</h2>
                {/* React Optimises the code by batching the rendering and commiting phase */}
                <UserClass name="First Child" location="Gurgaon(class)" />
            </div>
        )
    };
}

export default About;