import React from 'react';
import {Stats} from "./Stats";

export const Header = (props) => {
  const {title, totalPlayers} = props; // destruct assingments
  return (
    <header>
      <Stats players/>
      <h1>{title}</h1>
    </header>
  );
}