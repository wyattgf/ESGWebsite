import React, { Component } from 'react'
import { Grid, GridRow, Menu} from 'semantic-ui-react'
import {WindowContext} from './WindowContext';



export default class SideBarMenu extends Component {
  static contextType = WindowContext
  wind = {}
  componentDidMount(){
    this.wind = this.context
  }

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
        <WindowContext.Consumer>
        {(props) => {
            return(
              <Grid>
                <GridRow className='dynamicRow'>
                  
                <div className='sideBar'>
                    {this.createMenu()}
                </div>

                <div className='sideBarContent'>
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