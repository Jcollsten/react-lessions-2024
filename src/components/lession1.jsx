import React, { Component } from 'react';

export class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>

        <p>Number of clicks: {this.state.count}</p>

        <button onClick={this.incrementCount}>Click me!</button>
      </div>
    );
  }
}

// export class Timer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       time,
//     };
//   }
// }
