import React, { Component } from 'react'
import { Grid, Menu , Segment} from 'semantic-ui-react'
import ContactContent from './ContactContent'


export default class Contact extends Component {
  state = { activeItem: 'Contact Content', activeElement:<ContactContent/>}

  handleItemClick = ( name ) => this.setState({ activeItem: name })

  handleClick = (name) => {
      this.handleItemClick(name);
      this.handleSideBarClick(name);
  }
  
  handleSideBarClick(name){
    switch(name) {
        case "Contact Content":
    this.setState({activeElement: <ContactContent/>});
          break;
        default:
    this.setState({activeElement:<ContactContent/>});
      }
  }

  render() {
    const { activeItem } = this.state

    return (
      <div className='tabContent'>
      <Grid>
        <Grid.Column width={3}>
        <Menu secondary fluid vertical >
            <Menu.Item
              name='Contact'
              active={activeItem === 'Contact Content'}
              onClick={ e => this.handleClick("Contact Content") }
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
          {this.state.activeElement}
          </Segment>
        </Grid.Column>
        
      </Grid>
      </div>
    )
  }
}