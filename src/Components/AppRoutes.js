import React from 'react'
import StudentResources from './Tabs/Student Resources/StudentResources.js'
import Home from './Tabs/Home/Home.js'
import Contact from './Tabs/Contact/Contact.js'
import About from './Tabs/About/About.js';
import Event from './Tabs/Events/Events.js'
import {Route} from 'react-router-dom'


export default function AppRoutes() {

    // template: {path: , comp}
    const ROUTES = [
    {path: '/', comp: <Home/>},
    {path: '/about', comp: <About/>},
    {path: '/events', comp: <Event/>},
    {path: '/contact', comp: <Contact/>},
    {path: '/studentResources', comp: <StudentResources/>},
  ]

  function createRoutes(){
    var routes = []
    for (var i = 0; i < ROUTES.length; i++){
        routes[i] = createIndividualRoute(ROUTES[i]);
    }
    return routes;
  }

  function createIndividualRoute(route){
    return (
      <Route
      key={route.path}
      path={route.path}
      exact
      render={() => 
      <div>{route.comp}
      </div>}
    />
    )
  }


        return(
            <div>
                {createRoutes()}
            </div>
        )


}