/* Objective : update the state on an event call*/
import React, { Component } from "react";

class EventBinding extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello Viswash"
    };
    this.ClickHandler = this.ClickHandler.bind(this);
  }
  ClickHandler() {
    console.log("clicked vv");
    this.setState({
      message: "Good Bye"
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.ClickHandler}>ClickMe</button>
      </div>
    );
  }
}
export default EventBinding;
