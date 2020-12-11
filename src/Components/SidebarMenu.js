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
  
  

  createMenu(width){
      var tabs = [];
      const { activeItem } = this.state;
      var index = 0;
    for (let key of this.tabMap.keys()){
        tabs[index] = (
            <Menu.Item
            className='centerCentered'
              key = {key}
              name= {key}
              active={activeItem === key}
              onClick={ e => this.handleClick(key) }
            />
        )
        index+=1;
    }
    tabs = <GridRow>{tabs}</GridRow>
    return ( (width<this.SHRUNK_WINDOW_WIDTH) ?
        <Menu secondary fluid horizontal>
            {tabs}
        </Menu>

        :

        <Menu secondary fluid vertical>
            {tabs}
        </Menu>
    )
  }

  sideBarClass(width){
    console.log(width)

    return (width < this.SHRUNK_WINDOW_WIDTH) ? 'sideBarShrunk centerCentered' : 'sideBar'
  }

  sideBarContentClass(width){


    return (width < this.SHRUNK_WINDOW_WIDTH) ? 'sideBarShrunk centerCentered' : 'sideBarContent'
  }

  render() {
    return (
      <div className='tabContent'>
        <WindowContext.Consumer>
        {(props) => {
            return(
              <Grid>
                <GridRow className='dynamicRow'>

                <div className={this.sideBarClass(props.width)}>
                    {this.createMenu(props.width)}
                </div>
                
                <div className={this.sideBarContentClass(props.width)}>
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