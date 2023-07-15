import React, { Component } from "react";
import "./Message.css";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitors",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thank you for subscribing",
    });
  }

  render() {
    return (
      <div className="msg">
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Click Me</button>
      </div>
    );
  }
}

export default Message;
