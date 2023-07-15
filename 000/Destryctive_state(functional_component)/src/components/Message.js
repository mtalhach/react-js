import React, { Component } from "react";
import "./Message.css";

class Message extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <h1>
        Name is {name} And age is {age}
      </h1>
    );
  }
}

export default Message;
