import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.scss';
import './scss/colors.scss';
import './scss/fonts.scss';

// pages
import {
    HomePage,
    LineDancingPage,
    ThreeJsDancingPage,
    CircleDancingPage
} from './components/pages';
import { NavbarContainer } from './components/container';
import { Header, NavbarLink, Footer } from './components/presentational';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Visualization" subtitle='Stuff'/>
        <NavbarContainer>
            <NavbarLink exact to='/'>Home</NavbarLink>
            <NavbarLink to='/lineDancing'>Line Dancing</NavbarLink>
            <NavbarLink to='/3dDancing'>3D Dancing</NavbarLink>
            <NavbarLink to='/circleDancing'>Circle Dancing</NavbarLink>
        </NavbarContainer>
        <Switch>
            <Route path='/3dDancing' component={ThreeJsDancingPage}/>
            <Route path='/lineDancing' component={LineDancingPage}/>
            <Route path='/circleDancing' component={CircleDancingPage}/>
            <Route exact path='/' component={HomePage}/>
            <Redirect to="/" />
        </Switch>
        <Footer company='Aodhagán Murphy' />
      </div>
    );
  }
}

export default App;
