import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'



export default class NavigationBar extends Component {
  state = { activeItem: 'home' };

   tabColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
   tabIcons = ['info','birthday cake','phone', 'home', 'folder open', 'handshake']
   tabNames = ['About','Events','Contact','Home', 'Student Resources', 'Partner With Pratt']

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  createTabs(){
    var tabs = []
    const { activeItem } = this.state;
    for (var i = 0; i < this.tabNames.length; i++){
      tabs[i] = (
        <Menu.Item
              as={NavLink} to={this.createLink(this.tabNames[i])}
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
    const { activeItem } = this.state;

    return (
      <div className='navBar'>
      <Menu secondary className="navigationBar">
        {this.createTabs()}
      </Menu>
      </div>
    );
  }
}