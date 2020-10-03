import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import Homepage from './pages/homepage.component'

const HatsPage = () => (
  <h1>HATS PAGE!!!</h1>
)

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/Hats' component={HatsPage}/>
    </Switch>
    </div>
  );
}

export default App;
