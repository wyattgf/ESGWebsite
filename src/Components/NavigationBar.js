import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'



export default class NavigationBar extends Component {
  state = { activeItem: 'Nada' };

   tabColors = ['red', 'orange', 'green', 'blue','purple']
   tabIcons = ['info','birthday cake','home','phone',  'folder open']
   tabNames = ['About','Events','Home','Contact', 'Student Resources']
   tabLinks = ['about','events','home','contact','studentResources']

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  createTabs(){
    var tabs = []
    const { activeItem } = this.state;
    for (var i = 0; i < this.tabNames.length; i++){
      tabs[i] = (
        <Menu.Item 
              key = {this.tabNames[i]}
              as={NavLink} to={this.createLink(this.tabLinks[i])}
              name={this.tabNames[i]}
              active={activeItem === this.tabNames[i]}
              onClick={this.handleItemClick}
              color={this.tabColors[i]}
            >
              <Icon name= {this.tabIcons[i]}/>
              {this.tabNames[i]}
         </Menu.Item>
      )
    }
    return tabs
  }

  createLink(name){
    return ('/'+name)
  }

  render() {
    return (
      <div className='navBar'>
      <Menu secondary className="navigationBar">
        {this.createTabs()}
      </Menu>
      </div>
    );
  }
}