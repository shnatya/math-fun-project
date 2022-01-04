import './App.css';
import Header from './Header'
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from 'react';
import NewJokeForm from './NewJokeForm';
import Settings from './Settings';
import Joke from './Joke';

function App() {
  const [jokesDB, setJokesDB] = useState([])
  const [jokeIndex, setJokeIndex] = useState(0)
  const [resetOn, setResetOn] = useState(false) //reset inputs in LetterCqrds
  const [isAdded, setAdded] = useState(false)
  const [settings, setSettings] = useState({
    min: 1,
    max: 100,
    operation: "+",
  })

    useEffect(() => 
        fetch("http://localhost:3000/jokes")
        .then(res => res.json())
        .then(data => setJokesDB(data))
        , []
    )
    const jokeToDisplay = jokesDB[jokeIndex]
    
  function setValue(name, value) {
    setSettings({
      ...settings,
      [name]: value,
    })
  }
  function handleReset() {
    setResetOn(false)
  }
  //refresh input value for next joke and go to the next joke
  function handleNextJoke(move) {
    setResetOn(true)
    const DBlength = jokesDB.length;
    if(move === "forward") {

      if(jokeIndex === DBlength - 2 || jokeIndex < DBlength - 2) {
  
        console.log(jokeIndex + 1)
        setJokeIndex(jokeIndex + 1);
      }else {
  
        console.log(0)
        setJokeIndex(0)
      }
    }else{

      if(jokeIndex === 1 || jokeIndex > 1) {
  
        console.log(jokeIndex - 1)
        setJokeIndex(jokeIndex - 1);
      }else {
  
        console.log(DBlength-1)
        setJokeIndex(DBlength-1)
      }
    }
    
  }
  function handleAdded() {
    setAdded(false)
  }
  function addNewJoke(newJoke) {
    fetch("http://localhost:3000/jokes",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJoke),
    })
    .then(res => res.json())
    .then(newItem => {
      setJokesDB([...jokesDB, newItem])
      //alert("Your joke has been added to the database!")
      setAdded(true)
    })
  }
  return (
    <div className="App">
      <Header handleAdded={handleAdded} />
      <Switch>
        <Route exact path='/settings'>
          <Settings settings={settings} setValue={setValue} />
        </Route>
        <Route exact path='/addajoke'>
          <NewJokeForm addNewJoke={addNewJoke} isAdded={isAdded}/>
        </Route>
        <Route exact path="/joke">
          <Joke joke={jokeToDisplay} settings={settings} handleNextJoke={handleNextJoke}
                resetOn={resetOn} handleReset={handleReset}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
