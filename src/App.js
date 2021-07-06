import logo from './logo.svg';
import { Switch, NavLink, Link, Route } from 'react-router-dom';
import "./App.scss";

import {LineGraph} from 'components/index'

function App() {
  return (
    <>

      <nav>
        <div>
          <NavLink to="/">Home</NavLink>
        </div>
        <div>
          <NavLink to="/link1">Link1</NavLink>
        </div>
      </nav>

      <Switch>
        <Route exact path="/"/>
        <Route path="/link1"/>
      </Switch>

      {/* <div>
        <canvas id="myChart"></canvas>
        <div className="test">Hello</div>
      </div> */}

      <LineGraph/>
    </>
  );
}

export default App;
