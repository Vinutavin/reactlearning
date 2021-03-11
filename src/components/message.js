import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = { Message: "Welcome Visitor", Buttonmessage: "Subscribe" };
  }
  changemessage() {
    this.setState({
      Message: "Thanks for Subscribing",
      Buttonmessage: "Vishwas"
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.Message}</h1>
        <button
          onClick={() => {
            this.changemessage();
          }}
        >
          {this.state.Buttonmessage}
        </button>
      </div>
    );
  }
}

export default Message;
