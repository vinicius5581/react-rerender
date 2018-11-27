import React, { Component } from 'react';
import './App.css';

const Score = ({score}) => {
  console.log('Render Score');
  return <p>{score}</p>
}

class App extends Component {
  state = {
    score: 0
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({score: 0});
    }, 2500);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.score !== nextState.score
  }

  render() {
    console.log('Render App');
    return (
      <div className="App">
        <Score score={this.state.score} />
      </div>
    );
  }
}

export default App;
