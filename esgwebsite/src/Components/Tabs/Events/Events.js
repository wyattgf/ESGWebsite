import React, { Component } from 'react'
import { Grid, Menu } from 'semantic-ui-react'
import ESocials from './ESocials'
import EPicnics from './EPicnics'
import ESocialSponsorship from './ESocialSponsorship'
import EBall from './EBall'

export default class Events extends Component {
  state = { activeItem: 'E-Socials', activeElement:<ESocials/> }

  handleItemClick = ( name ) => this.setState({ activeItem: name })

  handleClick = (name) => {
      this.handleItemClick(name);
      this.handleSideBarClick(name);
  }
  
  handleSideBarClick(name){
    switch(name) {
        case "E-Socials":
    this.setState({activeElement: <ESocials/>});
          break;
        case "E-Social Sponsorship":
    this.setState({activeElement:<ESocialSponsorship/>});
          break;
        case "E-Picnics":
    this.setState({activeElement:<EPicnics/>});
        break;
        case "E-Ball":
    this.setState({activeElement:<EBall/>});
        break;
        default:
    this.setState({activeElement:<ESocials/>});
      }
  }

  render() {
    const { activeItem } = this.state

    return (
      <Grid>
        <Grid.Column width={3}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name='E-Socials'
              active={activeItem === 'E-Socials'}
              onClick={ e => this.handleClick("E-Socials") }
            />
            <Menu.Item
              name='E-Social Sponsorship'
              active={activeItem === 'E-Social Sponsorship'}
              onClick={ e => this.handleClick("E-Social Sponsorship") }
            />
            <Menu.Item
              name='E-Picnics'
              active={activeItem === 'E-Picnics'}
              onClick={ e => this.handleClick("E-Picnics") }
            />
            <Menu.Item
              name='E-Ball'
              active={activeItem === 'E-Ball'}
              onClick={ e => this.handleClick("E-Ball") }
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          
          {this.state.activeElement}
          
        </Grid.Column>
        
      </Grid>
    )
  }
}