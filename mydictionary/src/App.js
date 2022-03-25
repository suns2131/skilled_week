import {Route, Switch} from 'react-router-dom'
import Home from './Home';
import Registration from './Registration';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={'/'} exact component={Home}/>
        <Route path={'/registration'} exact component={Registration}/>
      </Switch>
    </div>
  );
}

export default App;
