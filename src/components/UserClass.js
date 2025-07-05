// class-based component

import React from "react";

class UserClass extends React.Component {
  constructor() {
    super(); // The super keyword is used to call the constructor
    // of its parent class to access the parent's properties and methods.
    this.state = { check: 1 };
    console.log(this.state.check);
  }

  render() {
    const { name } = this.props;

    return (
      <div>
        {name}
        <button
          onClick={() => {
            this.setState({ check: this.state.check + 1 });
          }}
        >
          {this.state.check}
        </button>
      </div>
    );
  }
}

export default UserClass;
