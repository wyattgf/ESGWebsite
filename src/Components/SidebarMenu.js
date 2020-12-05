import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'


export default class SideBarMenu extends Component {
    tabMap = new Map();
    
   setMap(map){
       this.tabMap = map;
   }

    firstTab = this.tabMap.keys().next().value;
    state = { activeItem: this.firstTab, activeElement: this.tabMap.get(this.firstTab) }

  

  handleItemClick = ( name ) => this.setState({ activeItem: name })

  handleClick = (name) => {
      this.handleItemClick(name);
      this.handleSideBarClick(name);
  }

  handleSideBarClick(name){
    this.setState({activeElement: this.tabMap.get(name) });
  }
  
  

  createMenu(){
      var tabs = [];
      const { activeItem } = this.state;
      var index = 0;
    for (let key of this.tabMap.keys()){
        tabs[index] = (
            <Menu.Item
              name= {key}
              active={activeItem === key}
              onClick={ e => this.handleClick(key) }
            />
        )
        index+=1;
    }
    return (
        <Menu secondary fluid vertical>
            {tabs}
        </Menu>
    )
  }

  render() {
    return (
      <div className='tabContent'>
      <Grid>
        <Grid.Column width={3}>
            {this.createMenu()}
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