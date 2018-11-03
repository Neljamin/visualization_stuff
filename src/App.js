import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.scss';
import './scss/colors.scss';
import './scss/fonts.scss';

// pages
import { HomePage } from './components/pages/HomePage';
import { CubeDancingPage } from './components/pages/CubeDancingPage';
import { ThreeJsDancingPage } from './components/pages/ThreeJsDancingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
            <Route path='/3dDancing' component={ThreeJsDancingPage}/>
            <Route path='/cubeDancing' component={CubeDancingPage}/>
            <Route path='/' component={HomePage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
