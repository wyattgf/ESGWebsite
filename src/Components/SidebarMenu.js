import React, { Component } from 'react'
import { Grid, GridRow, Menu} from 'semantic-ui-react'
import {WindowContext} from './WindowContext';



export default class SideBarMenu extends Component {
  SHRUNK_WINDOW_WIDTH = 588;
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
  
  

  createMenu(props){
    var tabs = [];
    const { activeItem } = this.state;
    var index = 0;
    for (let key of this.tabMap.keys()){
        tabs[index] = (
            <Menu.Item
              key = {key}
              active={activeItem === key}
              onClick={ e => this.handleClick(key) }
            >
                <div className={this.menuItemStyle(props)}>
                  {key}
                </div>
            </Menu.Item>
        )
        index+=1;
    }
    tabs = <GridRow>{tabs}</GridRow>
    return ( (props.width<props.shrunkWidth) ?
        <Menu secondary fluid horizontal>
            {tabs}
        </Menu>

        :

        <Menu secondary fluid vertical>
            {tabs}
        </Menu>
    )
  }

  menuItemStyle(props){
    return (props.width < props.shrunkWidth) ? 'centerCentered' : ''
  }

  sideBarClass(props){
    return (props.width < props.shrunkWidth) ? 'sideBarShrunk centerCentered' : 'sideBar'
  }

  sideBarContentClass(props){
    return (props.width < props.shrunkWidth) ? 'sideBarShrunk centerCentered' : 'sideBarContent'
  }

  render() {
    return (
      <div className='tabContent'>
        <WindowContext.Consumer>
        {(props) => {
            return(
              <Grid>
                <GridRow className='dynamicRow'>

                <div className={this.sideBarClass(props)}>
                    {this.createMenu(props)}
                </div>
                
                <div className={this.sideBarContentClass(props)}>
                  {this.state.activeElement}
                </div>


                </GridRow>
              </Grid>
            )
        }}
      </WindowContext.Consumer>
      </div>
    )
  }
}