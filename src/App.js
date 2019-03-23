import React, { Component } from 'react';
import './App.css';

const Header =(props) => {
  console.log(props);
  const {title, totalPlayers} = props; // destruct assingments
  return (
    <header>
      <h1>{title}</h1>
      <span className="stats">Players: {totalPlayers}</span>
    </header>
  );
};

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      score : 30,
      name : 'a'
    }
  }

  incrementScore = () => {
    this.setState(prevState => {
      return {
        score: prevState.score+1
      }
    });
  }

  render(){
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.handleRemovePlayer(props.id)}>X</button>
      </span>
      <span className="player-name">{props.name}</span>
      <Counter />
    </div>
  );
};
class App extends React.Component {

  state = {
    players: [
      {name : 'geu', id:1},
      {name : 'park', id:2},
      {name : 'kim', id:3},
      {name : 'Lee', id:4},
      {name : 'Hong', id:5}
    ]
  };

  handleRemovePlayer = (id) => {
    // 해당 id를 삭제
    this.setState(prevState=> {
      return {
        players: prevState.players.filter(item=> item.id !==id)
      }
    })
  }

  render(){
    return(
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayers={1 + 10} />
        {
          this.state.players.map(player => (
            <Player name={player.name} key={player.id.toString()}
                    id={player.id}
                    handleRemovePlayer ={this.handleRemovePlayer}/>
          ))
        }
      </div>
    );
  }
}


export default App;
