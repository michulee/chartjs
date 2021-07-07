import { Switch, NavLink, Route } from 'react-router-dom';
import "./App.scss";
import React, {useState} from 'react';
import {Chart} from "chart.js";
import { managerData, yearLabels } from "./data";
import {LineGraph} from 'components/index'

function App() {

  const [state, setState] = useState({
    data: managerData,
    labels: yearLabels,
  })

  // const myChart = new Chart(
  //   document.getElementById('myChart'),
  //   state
  // );
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



      <LineGraph data={state.data} labels={state.labels}/>
    </>
  );
}

export default App;
