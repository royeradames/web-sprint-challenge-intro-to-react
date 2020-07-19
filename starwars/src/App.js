import React, {useState,useEffect} from 'react'
import './App.css'
import axios from 'axios'
import { Button,Placeholder } from 'semantic-ui-react'
//import components
import Character from './components/Character'
import Footer from './components/Footer'
import PlaceHolderCharacters from './components/place-holders/PlaceHolderObjData'


const App = () => {
  // the state properties here.
const [characterArr, setCharacterArr] = useState()

function getRandomCharacters(){
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  //591 total characters
  // https://rickandmortyapi.com/api/character/[1,2,3]
  const randomCharactersId = [getRndInteger(),getRndInteger(),getRndInteger(),getRndInteger(),getRndInteger(),getRndInteger()]
  const linkToAPI = `https://rickandmortyapi.com/api/character/${randomCharactersId}`
  axios.get(linkToAPI)
  .then( (resp) =>{
    setCharacterArr(resp.data)
  })
  .catch((err) =>{
  })
}
function getRndInteger() {
    const max = 591
    const min = 1
    return Math.floor(Math.random() * (max - min) ) + min;
  }
const handleClick = () => {
  getRandomCharacters()
}
useEffect( ()=>{
  getRandomCharacters()
}
, [])

  return (
    <div className="App">
      <h1 className="Header">Random Rick and Morty Characters</h1>
      {characterArr ? <Character characterArr ={characterArr}/> :  <PlaceHolderCharacters />}
      <Button inverted onClick={handleClick} >Load New Character</Button>
      <Footer />
    </div>
  );
}

export default App;
