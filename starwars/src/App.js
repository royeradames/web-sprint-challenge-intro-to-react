import React, {useState,useEffect} from 'react'
import './App.css'
import styled from 'styled-components'
import axios from 'axios'
//import components
import Character from './components/Character'
import PlaceholderCharacters from './components/place-holders/PlaceholderImageSquare'
import Footer from './components/Footer'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [characterArr, setCharacterArr] = useState()

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
const randomCharactersId = [getRndInteger(),getRndInteger(),getRndInteger(),getRndInteger(),getRndInteger(),getRndInteger()]

const linkToAPI = `https://rickandmortyapi.com/api/character/${randomCharactersId}`

useEffect( ()=>{
  axios.get(linkToAPI)
  .then( (resp) =>{
    setCharacterArr(resp.data)
  })
  .catch((err) =>{
  })
}
, [])

  return (
    <div className="App">
      <h1 className="Header">Random Rick and Morty Characters</h1>
      {characterArr ? <Character characterArr ={characterArr}/> : <PlaceholderCharacters />}
      <Footer />
    </div>
  );
}

export default App;
