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
  const [resetOn, setResetOn] = useState(false)
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
  function handleNextJoke() {
    setResetOn(true)

    const DBlength = jokesDB.length;
    if(jokeIndex === DBlength - 2 || jokeIndex < DBlength - 2) {
      setJokeIndex(jokeIndex + 1);
    }else {
      setJokeIndex(0)
    }
}
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/settings'>
          <Settings settings={settings} setValue={setValue}/>
        </Route>
        <Route exact path='/addajoke'>
          <NewJokeForm />
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
