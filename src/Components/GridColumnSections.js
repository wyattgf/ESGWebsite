import React, { Component } from 'react'
import {Grid, GridColumn, GridRow} from 'semantic-ui-react';
import {WindowContext} from './WindowContext'



export default class GridColumnSections extends Component {
  sectionMap = new Map();
  originalColumnsPerRow = 1;
  changingColumnsPerRow = 1;
  originalClassNombre = 'leftCentered'
  changingclassNombre = 'leftCentered'

  setMap(map){
    this.sectionMap = map;
  }

  setColumnsPerRow(perRow){
      this.originalColumnsPerRow = perRow;
  }

  setClassName(className){
    this.originalClassNombre = className;
  }

  setChangingClassName(className){
    this.changingclassNombre = className;
  }

  getClassName(){
    return this.changingclassNombre;
  }

  createColumns(){
    var index = 0;
    var columns = []
    for (let key of this.sectionMap.keys()){
        columns[index] = (
          <div className = 'gridColumnRow' key={key} style={{width: Math.round(100/this.changingColumnsPerRow) + '%'}}>
           
              <h3>{key}</h3> <br/>
              <div>{this.sectionMap.get(key)}</div>
             
          </div>
        )
        index+=1;
    }
    return columns;
  }

  createColumnRows(context){
    if (context.width < context.shrunkWidth){
      this.changingColumnsPerRow = 1;
      this.setChangingClassName('centerCentered')
    }
    else {
      this.changingColumnsPerRow = this.originalColumnsPerRow;
      this.changingclassNombre = this.originalClassNombre;
    }

    const columns = this.createColumns();
    var counter = 0;
    var rows = [];

    for (var i = 0; i < columns.length; i+=this.changingColumnsPerRow){
  
      rows[counter] = (
        
        <GridRow key={counter}>
          {columns.slice(i,i+this.changingColumnsPerRow)}
        </GridRow>
      )
      counter+=1;
    }
    return <Grid>{rows}</Grid>;
  }

 
    render() {
      return(
        <div>

        <WindowContext.Consumer>
           {(props) => {
            return(
                <div style={{width: '100%' }}className={this.getClassName()}> 
                  {this.createColumnRows(props)}
                </div>
            )
           }}
           </WindowContext.Consumer>
           </div>
      )
      }
    
}

  
