import React, { PureComponent } from 'react';
import './App.css';

const Score = ({score}) => {
  console.log('Render Score');
  return <p>{score}</p>
}

class App extends PureComponent {
  state = {
    score: 0,
    yards : {
      team_1: 1,
      team_2: 1,
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        score: 0,
        yards : {
          team_1: 1,
          team_2: 1,
        }
      });
    }, 2500);
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
