import './App.css';
import Header from './Header'
import MainPage from './MainPage';
import { Route, Switch } from "react-router-dom";
import NewJokeForm from './NewJokeForm';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/settings'>
          <MainPage />
        </Route>
        <Route exact path='/addajoke'>
          <NewJokeForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
