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
import {Grid, GridRow, GridColumn} from 'semantic-ui-react';
import { WindowContext } from './Components/WindowContext';

class App extends React.Component {

  // template: {path: , comp}
ROUTES = [
  {path: '/', comp: <Home/>},
  {path: '/about', comp: <About/>},
  {path: '/events', comp: <Event/>},
  {path: '/contact', comp: <Contact/>},
  {path: '/studentResources', comp: <StudentResources/>},
]

state = { width: 0, height: 0 };

 componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener("resize", this.updateWindowDimensions);
    }

 componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowDimensions);
    }

  updateWindowDimensions = () => {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
    };

  createRoutes(){
    var routes = []
    for (var i = 0; i < this.ROUTES.length; i++){
        routes[i] = this.createIndividualRoute(this.ROUTES[i]);
    }
    return routes;
  }

  createIndividualRoute(route){
    return (
      <Route
      path={route.path}
      exact
      render={() => 
      <div>{route.comp}
      </div>}
    />
    )
  }

  render(){
    return (
      <Grid  stackable className='overallGrid'>
        <WindowContext.Provider value={this.state}>
        <Router>
  
          <GridRow>
          <div className='row'>
            <NavigationBar/>
          </div>
          </GridRow>
  
  
          <GridRow>
            <div className = 'row'>
            <Animation/>
            </div>
          </GridRow>
      
      
          <GridRow>
            <div className='row'>
              {this.createRoutes()}
          </div>
        </GridRow>
          
        </Router>
        
        <GridRow>
              <GridColumn >
                  <Footer/>
              </GridColumn>
        
        </GridRow>
        </WindowContext.Provider>
      </Grid>
    );
  }
    
}

export default App;
