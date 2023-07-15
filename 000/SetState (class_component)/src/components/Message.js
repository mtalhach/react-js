import React, { Component } from "react";
import "./Message.css";

class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  // increment() {
  //   this.setState({ count: this.state.count + 1 }, () => {
  //     console.log("Callback Value: ", this.state.count);
  //   });
  //   console.log(this.state.count);
  // }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    console.log(this.state.count);
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div className="msg">
        <div>count - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Message;
