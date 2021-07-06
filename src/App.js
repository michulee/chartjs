import logo from './logo.svg';
import { Switch, NavLink, Link, Route } from 'react-router-dom';
import "./App.scss";
import React, {useState} from 'react';
import { managerData, yearLabels } from "./data";


import {LineGraph} from 'components/index'

function App() {

  const [state, setState] = useState({
    data: managerData,
    labels: yearLabels,
  })
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

      <LineGraph data={state.data} labels={state.labels}/>
    </>
  );
}

export default App;
