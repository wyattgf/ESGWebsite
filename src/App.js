import React from 'react';
import './App.css';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js'
import Contact from './Components/Tabs/Contact/Contact.js'
import NavigationBar from './Components/NavigationBar.js'
import About from './Components/Tabs/About/About.js';
import Event from './Components/Tabs/Events/Events.js'
import Animation from './Components/Animation.js'
import {Route } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Container} from 'semantic-ui-react';

function App() {
  return (
    <div >
      <Router>
        <NavigationBar/>
        <Container fluid style={{ padding: 0 }}><Animation>WYATT</Animation></Container>
      
    
        <Route
          path="/"
          exact
          render={() => 
          <div>home</div>}
        />

        <Route
          path="/about"
          exact
          render={() => 
          <About className='tab'/>}
        />

        <Route
          path="/events"
          exact
          render={() => 
          <Event/>}
        />

          <Route
          path="/contact"
          exact
          render={() => 
          <Contact/>}
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
      <Footer/>
    </div>
  );
}

export default App;
