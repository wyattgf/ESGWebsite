import React, {useState, useContext} from 'react'
import { Menu, Icon, Grid } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
//import WindowContext  from './WindowContext';



export default function NavigationBar(){
  const [activeItem, setActiveItem] = useState('Nada');
  //var window = useContext(WindowContext);

  const  tabColors = ['red', 'orange', 'green', 'blue','purple']
  const  tabIcons = ['info','birthday cake','home','phone',  'folder open']
  const  tabNames = ['About','Events','Home','Contact', 'Student Resources']
  const  tabLinks = ['about','events','','contact','studentResources']

  var handleItemClick = (e, { name }) => setActiveItem(name);

  function createTabs(){
    var tabs = []
   
    for (var i = 0; i < tabNames.length; i++){
      tabs[i] = (
        <div key={tabNames[i]} className='centerCentered'>
        <Menu.Item 
              key = {tabNames[i]}
              as={NavLink} exact to={createLink(tabLinks[i])}
              name={tabNames[i]}
              active={activeItem === tabNames[i]}
              onClick={handleItemClick}
              color={tabColors[i]}
            >
              <Icon name= {tabIcons[i]}/>
              {tabNames[i]}
         </Menu.Item>
         </div>
      )
    }
    return tabs
  }

  function createLink(name){
    return (''+name)
  }

  
    return (
      <div className='navBar'>
      <Menu secondary className="navigationBar">
        <Grid>
        <Grid.Row className='dynamicRow'>
          {createTabs()}
        </Grid.Row>
        </Grid>
      </Menu>
      </div>
    );
  
}