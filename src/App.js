import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Component/Home/Home';
import NoMatch from './Component/NoMatch/NoMatch';
import LeagueDetail from './Component/LeagueDetail/LeagueDetail';


function App() {
 
  return (
    <Router>
      <Switch>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route exact path="/league/:idLeague">
        <LeagueDetail/>
        </Route>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="*">
        <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
    

  );
}

export default App;
