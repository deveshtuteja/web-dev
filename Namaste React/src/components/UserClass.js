import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const {name,location}=this.props;
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

