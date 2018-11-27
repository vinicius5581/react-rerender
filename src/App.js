import React, { PureComponent, Component } from 'react';
import './App.css';

const Score = ({score}) => {
  console.log('Render Score');
  return <p>{score}</p>
}

class UpdatePlayersBtn extends PureComponent {
  handleUpdatePlayers = () => {
    this.props.updatePlayers();
  }
  render() {
    console.log('Render UpdatePlayersBtn');
    return <button onClick={this.handleUpdatePlayers}>updatePlayers</button>
  }
}

const Players = ({players, updatePlayers}) => {
  console.log('Render Players');
  return (
    <React.Fragment>
      <ul>
        {players.map(player => <li key={player.id}>{player.name}</li>)}
      </ul>
      <UpdatePlayersBtn 
        updatePlayers={updatePlayers}
      />
    </React.Fragment>    
  )
}

class UpdateScoreBtn extends PureComponent {
  state = {
    color: 'red'
  }
  handleUpdateScoreClick = () => {
    this.props.updateScore();
  }
  handleUpdateColorClick = () => {    
    this.setState(prevState => ({color: prevState.color === 'red' ? 'blue' : 'red'}));
  }
  render() {
    console.log('Render UpdateScoreBtn');
    return (
      <React.Fragment>
        <button onClick={this.handleUpdateScoreClick}>Update Score</button>
        <hr/>
        <button style={{background: this.state.color}} onClick={this.handleUpdateColorClick}>Update Color</button>
        <hr/>
      </React.Fragment>      
    )
  }
}

class App extends PureComponent {
  state = {
    score: 0,
    yards : {
      team_1: 1,
      team_2: 1,
    },
    players: [{id: 1, name: 'player 1'}, {id: 2, name: 'player 2'}]
  }

  updateScore = () => {
    this.setState(prevState => ({score: prevState.score + 1}))
  }

  handleUpdatePlayers = () => {
    const newPlayerId = Math.max(...this.state.players.map(p => p.id)) + 1;
    const newPlayerName = `player ${newPlayerId}`
    const newPlayer = {id: newPlayerId, name: newPlayerName};
    this.setState(prevState => ({players: [...prevState.players, newPlayer]}))
  }

  componentDidMount() {
    setInterval(() => {
      console.log('tick');
      if (Math.random() > .8) {
        console.log('Score +');
        this.updateScore();
      }
      if (Math.random() < .2) {
        console.log('Score =');
        this.setState(prevState => ({score: prevState.score}));
      }
    }, 2500);
  }

  render() {
    console.log('Render App', this.state);
    return (
      <div className="App">
        <Score score={this.state.score} />
        <UpdateScoreBtn updateScore={this.updateScore}/>
        <Players players={this.state.players} updatePlayers={this.handleUpdatePlayers}/>
      </div>
    );
  }
}

export default App;
