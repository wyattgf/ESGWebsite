import React from 'react';
import './App.css';
import Footer from './Components/Footer.js'
import StudentResources from './Components/Tabs/Student Resources/StudentResources.js'
import Home from './Components/Tabs/Home/Home.js'
import Contact from './Components/Tabs/Contact/Contact.js'
import NavigationBar from './Components/NavigationBar.js'
import About from './Components/Tabs/About/About.js';
import Event from './Components/Tabs/Events/Events.js'
import Animation from './Components/Animation.js'
import {Route } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Container, Grid, GridRow, GridColumn} from 'semantic-ui-react';

function App() {
  return (
    <Grid  stackable divided className='overallGrid'>
      <Router>

        <GridRow>
        <GridColumn className='row'>
          <NavigationBar/>
        </GridColumn>
        </GridRow>


        <GridRow className = 'row'>
          <GridColumn >
          <Container fluid style={{ padding: 0 }}><Animation>WYATT</Animation></Container>
          </GridColumn>
        </GridRow>
    
    
        <GridRow>
          <GridColumn>
        <Route
          path="/home"
          exact
          render={() => 
          <Home/>}
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
          <StudentResources/>}
        />

          <Route
          path="/partnerWithPratt"
          exact
          render={() => 
          <div>partner</div>}
        />
        </GridColumn>
      </GridRow>
        
      </Router>
      
      <GridRow>
            <GridColumn >
                <Footer/>
            </GridColumn>
      
      </GridRow>
     
    </Grid>
  );
}

export default App;
