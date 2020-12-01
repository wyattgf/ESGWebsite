import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'



export default class NavigationBar extends Component {
  state = { activeItem: 'home' };

   tabColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className='navBar'>
      <Menu secondary className="navigationBar">
        <Menu.Item
          as={NavLink} to="/about"
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
          color={this.tabColors[0]}
        >
          <Icon name='info'/>
          About
        </Menu.Item>

        <Menu.Item
         as={NavLink} to="/events"
          name='events'
          active={activeItem === 'events'}
          onClick={this.handleItemClick}
          color={this.tabColors[1]}
        >
          <Icon name='birthday cake'/>
          Events
        </Menu.Item>

        <Menu.Item
        as={NavLink} to="/contact"
          name='contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
          color={this.tabColors[2]}
        >
          <Icon name='phone'/>
          Contact
        </Menu.Item>

        <Menu.Item
        as={NavLink} to="/home"
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          color={this.tabColors[3]}
        >
          <Icon name='home'/>
          Home
        </Menu.Item>

        <Menu.Item
        as={NavLink} to="/studentResources"
          name='studentResources'
          active={activeItem === 'studentResources'}
          onClick={this.handleItemClick}
          color={this.tabColors[4]}
        >
          <Icon name='folder open'/>
          Student Resources
        </Menu.Item>

        <Menu.Item
        as={NavLink} to="/partnerWithPratt"
          name='partnerWithPratt'
          active={activeItem === 'partnerWithPratt'}
          onClick={this.handleItemClick}
          color={this.tabColors[5]}
        >
          <Icon name='handshake'/>
          Partner With Pratt
        </Menu.Item>
      </Menu>
      </div>
    );
  }
}