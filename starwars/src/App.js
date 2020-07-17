import React from 'react';
import './App.css';
import styled from 'styled-components';
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  //591 total characters
  // https://rickandmortyapi.com/api/character/[1,2,3]
  function getRndInteger() {
    const max = 591
    const min = 1
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
