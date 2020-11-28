import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'



export default class NavigationBar extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      
      <Menu pointing className="navigationBar">
        <Menu.Item
          as={NavLink} to="/about"
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        >
          About
        </Menu.Item>

        <Menu.Item
         as={NavLink} to="/events"
          name='events'
          active={activeItem === 'events'}
          onClick={this.handleItemClick}
        >
          Events
        </Menu.Item>

        <Menu.Item
        as={NavLink} to="/contact"
          name='contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
        >
          Contact
        </Menu.Item>

        <Menu.Item
        as={NavLink} to="/home"
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
        as={NavLink} to="/studentResources"
          name='studentResources'
          active={activeItem === 'studentResources'}
          onClick={this.handleItemClick}
        >
          Student Resources
        </Menu.Item>

        <Menu.Item
        as={NavLink} to="/partnerWithPratt"
          name='partnerWithPratt'
          active={activeItem === 'partnerWithPratt'}
          onClick={this.handleItemClick}
        >
          Partner With Pratt
        </Menu.Item>
      </Menu>
      
    );
  }
}