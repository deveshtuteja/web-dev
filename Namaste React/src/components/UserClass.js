import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      
    };

    // console.log(this.props.name+" constructor is called");
  }
  componentDidMount(){
    // console.log(this.props.name+" component did mount");
  }
  render() {
    const { name, location } = this.props;
    const { count } = this.state;

    // console.log(this.props.name+" render is called...");

    return (
      <div className="user-card">
        <h2>{name}</h2>
        <h2>{location}</h2>
        <h2>Contact: @deveshtuteja</h2>
      </div>
    );
  }
}

export default UserClass;


