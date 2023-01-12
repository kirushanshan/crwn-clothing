import './App.css';

import React from 'react';
import { Route , Switch} from "react-router-dom";

import HomePage from './pages/homepage/homepage.component';
import HatsPage from './hats';


function App() {
  return (
    <div >
        <Switch>
          <Route exact  path='/' component={HomePage}/>
          <Route  path='/hats' component={HatsPage}/>
          <Route  path='/hatss' component={HatsPage}/>
        </Switch>

    </div>
  );
}

export default App;
