### ExecutiveBoard.js (ensuring three cards per row)

createTable(){
        var rowIndex = 0;
        var rows = [];
        for (var i = 0; i <this.execBoardCards.length;i++){
           rows[rowIndex] =(
                <GridRow>
                    {this.createRowCell(i,this.execBoardCards.length)}
                    {this.createRowCell(i+1,this.execBoardCards.length)}
                    {this.createRowCell(i+2,this.execBoardCards.length)}
                </GridRow>
           );
           rowIndex+=1;
           i+=2;
        }

        return(
            <Segment>
                <Grid>
                   {rows}
                </Grid>
            </Segment>
        )
    }

    createRowCell(i, length){
        if (i < length){
            return (<GridColumn width={4}>{this.execBoardCards[i]}</GridColumn>)
        }
        return (<GridColumn/>)
    }



render(){
        return(
            <div className='ePicnic centerCentered'>
                <Grid>
                    <GridRow>
                        <div>{this.DESCRIPTION}</div>
                    </GridRow>
                    <GridRow>
                        <GridColumn width={16}>
                             <Image size='massive' src={require(this.IMAGE_PATH+'line-for-food.jpeg')}/>
                        </GridColumn>

                    </GridRow>
                </Grid>
            </div>
        )
    }
}



import React, { Component } from 'react'
import {Grid, GridColumn, GridRow, Image, Segment } from 'semantic-ui-react'
import GridColumnSections from '../../GridColumnSections';

export default class EPicnics extends GridColumnSections {
    IMAGE_PATH = './images/';
    DESCRIPTION = [
        'We host E-Picnics once per semester. Come for music, free beer (for upperclassmen), and free food (for everyone). This event is also when we hand out our famous E-Picnic t-shirts that make all the Trinity students jealous.'
    ]

    sectionMap = new Map([
        ['E-Picnics', this.DESCRIPTION],
        ['', '']
    ])

    constructor(){
        super()
        this.setMap(this.sectionMap);
        this.setClassName('centerCentered')
        this.setColumnsPerRow(1);
      }

      render() {
        return (
          <div className={this.getClassName()}> 
           <Segment>
                {this.createColumnRows()}
           </Segment>
           <Segment><Image size='massive' src={require(this.IMAGE_PATH+'line-for-food.jpeg')}/></Segment>
          </div>
        );
      }
}