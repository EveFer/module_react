import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      name: "Fernanda",
    };
  }

  componentDidMount() {
    this.dateInterval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.dateInterval);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    // console.log('Desde el render')
    return (
      <div>
        <p>{this.state.name}</p>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}
