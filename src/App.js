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
  const [settings, setSettings] = useState({
    min: 1,
    max: 1000,
    operation: "all",
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

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/settings'>
          <Settings setValue={setValue}/>
        </Route>
        <Route exact path='/addajoke'>
          <NewJokeForm />
        </Route>
        <Route exact path="/joke">
          <Joke joke={jokeToDisplay} settings={settings}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
