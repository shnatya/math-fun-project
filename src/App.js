import './App.css';
import Header from './Header'
import { Route, Switch } from "react-router-dom";
import NewJokeForm from './NewJokeForm';
import Settings from './Settings';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/settings'>
          <Settings />
        </Route>
        <Route exact path='/addajoke'>
          <NewJokeForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
