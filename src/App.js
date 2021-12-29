import './App.css';
import Header from './Header'
import MainPage from './MainPage';
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
