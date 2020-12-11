import React from 'react';
import './App.css';
import Footer from './Components/Footer.js'
import Animation from './Components/Animation.js'
import {BrowserRouter as Router} from 'react-router-dom';
import {Grid, GridRow} from 'semantic-ui-react';
import {WindowContext} from './Components/WindowContext';
import NavigationBar from './Components/NavigationBar.js'
import AppRoutes from './Components/AppRoutes.js'

class App extends React.Component {


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
              <AppRoutes/>
          </div>
        </GridRow>
          
        </Router>
        
        <GridRow>
              <div className = 'row'>
                  <Footer/>
              </div>
        
        </GridRow>
        </WindowContext.Provider>
      </Grid>
    );
  }
    
}

export default App;
