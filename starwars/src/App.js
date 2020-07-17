import React, {useState,useEffect} from 'react';
import './App.css';
import styled from 'styled-components';
import axios from 'axios';
import Character from './components/Character'
import Footer from './components/Footer'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [characterArr, setCharacterArr] = useState()

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
const dummyData = [
  {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
      "name": "Earth (C-137)",
      "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      // ...
    ],
    "url": "https://rickandmortyapi.com/api/character/1",
    "created": "2017-11-04T18:48:46.250Z"
  },
  {
    "id": 183,
    "name": "Johnny Depp",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
      "name": "Earth (C-500A)",
      "url": "https://rickandmortyapi.com/api/location/23"
    },
    "location": {
      "name": "Earth (C-500A)",
      "url": "https://rickandmortyapi.com/api/location/23"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/183.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/8"
    ],
    "url": "https://rickandmortyapi.com/api/character/183",
    "created": "2017-12-29T18:51:29.693Z"
  }
]


  //591 total characters
  // https://rickandmortyapi.com/api/character/[1,2,3]
  function getRndInteger() {
    const max = 591
    const min = 1
    return Math.floor(Math.random() * (max - min) ) + min;
  }
const randomCharactersId = [getRndInteger(),getRndInteger(),getRndInteger(),getRndInteger(),getRndInteger(),getRndInteger()]

const linkToAPI = `https://rickandmortyapi.com/api/character/${randomCharactersId}`

useEffect( ()=>{
  axios.get(linkToAPI)
  .then( (resp) =>{
    setCharacterArr(resp.data)
    debugger
  })
  .catch((err) =>{
    debugger
  })
}
, [])

  return (
    <div className="App">
      <h1 className="Header">Random Rick and Morty Characters</h1>
      {characterArr ? <Character characterArr ={characterArr}/> : <Character characterArr ={dummyData}/>}
      <Footer />
    </div>
  );
}

export default App;
