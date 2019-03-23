import React, { Component } from 'react';
import './App.css';
import {Header} from './components/Header';
import {Player} from "./components/Player";


class App extends React.Component {

  state = {
    players: [
      {name : 'geu', score:0, id:1},
      {name : 'park', score:0, id:2},
      {name : 'kim', score:0, id:3},
      {name : 'Lee', score:0, id:4},
      {name : 'Hong', score:0, id:5}
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

  handleChangeScore = (id, delta) => {
    console.log(id, delta);
    this.setState(prevState => {
      prevState.players.forEach(item => {
        if (item.id == id) {
          item.score += delta;
        }
      })
      return players: [...prevState.players]
    })
  };

  render(){
    return(
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayers={1 + 10} />
        {
          this.state.players.map(player => (
            <Player name={player.name} key={player.id.toString()}
                    id={player.id}
                    score={player.score}
                    handleRemovePlayer ={this.handleRemovePlayer}
                    handleChangeScore={this.handleChangeScore}/>
          ))
        }
      </div>
    );
  }
}


export default App;
