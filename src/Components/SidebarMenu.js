import React, { Component } from 'react'
import { Grid, Menu} from 'semantic-ui-react'


export default class SideBarMenu extends Component {
    tabMap = new Map();
    state = { activeItem: '', activeElement: <div></div>}
    
   setMap(map){
       this.tabMap = map;
       this.handleDefaultTab();
   }

   handleDefaultTab(){
    for (let key of this.tabMap.keys()){
        this.state = ({ activeItem: key, activeElement: this.tabMap.get(key) });
        break;
    } 
   }

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
              key = {key}
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
          
          {this.state.activeElement}
          
        </Grid.Column>
        
      </Grid>
      </div>
    )
  }
}