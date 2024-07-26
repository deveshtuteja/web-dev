import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      count: 0,
    };

    console.log("child constructor is called");
  }
  componentDidMount(){
    console.log("Child component did mount");
  }
  render() {
    const { name, location } = this.props;
    const { count } = this.state;

    console.log("child render is called...");

    return (
      <div className="user-card">
        <h1>Count = {count}</h1>
        <button onClick={() => {
          this.setState({
            count: this.state.count + 1
          });
        }}>Count Increment</button>
        <h2>{name}</h2>
        <h2>{location}</h2>
        <h2>Contact: @deveshtuteja</h2>
      </div>
    );
  }
}

export default UserClass;


