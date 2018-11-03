import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.scss';
import './scss/colors.scss';
import './scss/fonts.scss';

// pages
import { HomePage } from './components/pages/HomePage';
import { LineDancingPage } from './components/pages/LineDancingPage';
import { ThreeJsDancingPage } from './components/pages/ThreeJsDancingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
            <Route path='/3dDancing' component={ThreeJsDancingPage}/>
            <Route path='/lineDancing' component={LineDancingPage}/>
            <Route exact path='/' component={HomePage}/>
            <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
