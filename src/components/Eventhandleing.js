import React, { Component } from "react";

class ClickClass extends Component {
  ClickHandler() {
    console.log("Clicked on Button");
  }

  render() {
    return (
      <div>
        <button onClick={this.ClickHandler}>Click</button>
      </div>
    );
  }
}
export default ClickClass;
