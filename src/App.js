import React, { Component } from 'react';
import './App.css';
import {Header} from './components/Header';
import {Player} from "./components/Player";


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
