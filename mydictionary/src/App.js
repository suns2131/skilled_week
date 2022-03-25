import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={'/'} />
        <Route path={'/Registration'}/>
      </Switch>
    </div>
  );
}

export default App;
