import React from 'react';
import './App.css';
import Header from './Components/Header.js';
import NavigationBar from './Components/NavigationBar.js'
import About from './Components/Tabs/About/About.js';
import {Route } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <Router>
      <NavigationBar />

        <Route
          path="/home"
          exact
          render={() => 
          <div>home</div>}
        />

        <Route
          path="/about"
          exact
          render={() => 
          <About/>}
        />

        <Route
          path="/events"
          exact
          render={() => 
          <div>events</div>}
        />

          <Route
          path="/contact"
          exact
          render={() => 
          <div>contact</div>}
        />

      

          <Route
          path="/studentResources"
          exact
          render={() => 
          <div>resources</div>}
        />

          <Route
          path="/partnerWithPratt"
          exact
          render={() => 
          <div>partner</div>}
        />

        
      </Router>
    </div>
  );
}

export default App;
