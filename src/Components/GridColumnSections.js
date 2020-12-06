import React, { Component } from 'react'
import {Grid, GridColumn, GridRow} from 'semantic-ui-react';



export default class GridColumnSections extends Component {
  sectionMap = new Map();
  columnsPerRow = 1;
  classNombre = 'leftCentered'

  setMap(map){
    this.sectionMap = map;
  }

  setColumnsPerRow(perRow){
      this.columnsPerRow = perRow;
  }

  setClassName(className){
    this.classNombre = className;
  }

  getClassName(){
    return this.classNombre;
  }

  createColumns(){
    var index = 0;
    var columns = []
    for (let key of this.sectionMap.keys()){
        columns[index] = (
          <GridColumn key={key} width={Math.round(12/this.columnsPerRow)}>
           
              <h3>{key}</h3> <br/>
              <div>{this.sectionMap.get(key)}</div>
             
          </GridColumn>
        )
        index+=1;
    }
    return columns;
  }

  createColumnRows(){
    var columns = this.createColumns();
    var counter = 0;
    var rows = [];

    for (var i = 0; i < columns.length; i+=this.columnsPerRow){
  
      rows[counter] = (
        
        <GridRow key={counter}>
          {columns.slice(i,i+this.columnsPerRow)}
        </GridRow>
      )
      counter+=1;
    }
    return <Grid>{rows}</Grid>;
  }

 
    render() {
        return (
          <div className={this.getClassName()}> 
           {this.createColumnRows()}
          </div>
        );
      }
    
}

  
