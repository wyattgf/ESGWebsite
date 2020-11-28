import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import AboutContent from './AboutContent'
import ExecutiveBoard from './ExecutiveBoard'

export default class About extends Component {
  state = { activeItem: 'About', activeElement:<AboutContent/> }

  handleItemClick = ( name ) => this.setState({ activeItem: name })

  handleClick = (name) => {
      this.handleItemClick(name);
      this.handleSideBarClick(name);
  }
  
  handleSideBarClick(name){
    switch(name) {
        case "About":
    this.setState({activeElement: <AboutContent/>});
          break;
        case "Executive Board":
    this.setState({activeElement:<ExecutiveBoard/>});
          break;
        case "Constitution and Bylaws":
    this.setState({activeElement:<div>const</div>});
        break;
        default:
    this.setState({activeElement:<div>default</div>});
      }
  }

  render() {
    const { activeItem } = this.state

    return (
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name='About'
              active={activeItem === 'About'}
              onClick={ e => this.handleClick("About") }
            />
            <Menu.Item
              name='Executive Board'
              active={activeItem === 'Executive Board'}
              onClick={ e => this.handleClick("Executive Board") }
            />
            <Menu.Item
              name='Constitution and Bylaws'
              active={activeItem === 'Constitution and Bylaws'}
              onClick={ e => this.handleClick("Constitution and Bylaws") }
            />
            
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
          {this.state.activeElement}
          </Segment>
        </Grid.Column>
        
      </Grid>
    )
  }
}