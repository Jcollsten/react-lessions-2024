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

export class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  stopTimer() {
    clearInterval(this.timerID);
  }

  resetTimer() {
    this.setState({ seconds: 0 });
    this.stopTimer();
    this.startTimer();
  }

  tick() {
    this.setState((prevState) => ({
      seconds: prevState.seconds + 1,
    }));
  }

  render() {
    return (
      <div>
        <h2>Timer</h2>
        <p>Time since site loaded / was resetted: {this.state.seconds}</p>
        <button onClick={() => this.resetTimer()}>Restart Timer</button>
      </div>
    );
  }
}

export function UserProfile(props) {
  return (
    <div className='aboutMe'>
      <h2>{props.title}</h2>
      <h3>{props.name}</h3>
      <p>{props.bio}</p>
      <h4>{props.email}</h4>
    </div>
  );
}
