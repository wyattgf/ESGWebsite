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



(
                    <WindowContext.Consumer>
                        {(props) => {
                            return(
                        <List.Item style={{width: props.width/2}} key={i}>
                            {responsibilities[i]}
                        </List.Item>
                        )
                        }}
                    </WindowContext.Consumer>

                    )

Article Pre Polymorphism

<div className='constPopup'>
               <h2>Section 1. Voting</h2>
               <List ordered>
                    <List.Item >
                    The selection of ESG board members will be by popular election of the undergraduate engineering student
                     body with the exception of the Executive President. Each student will be allowed one vote per position.
                     For the class president positions, only students of that specific class may vote for their class president. 
                     These elections will be administered by the ESG Executive President.
                    </List.Item>
                    <List.Item >
                    The Executive President shall be elected through an internal election by all members of the executive board prior
                     to the general election. A plurality is needed to elect the Executive President.
                    </List.Item>
                </List>
                <h2>Section 2. Procedure</h2>
                <List ordered>
                    <List.Item>
                    Announcement: Elections shall be announced and publicized to the entire Engineering undergraduate student body within the 
                    first month of the spring semester. ESG is reasonably responsible for informing all students of the elections.
                    </List.Item>
                    <List.Item>
                    Freshmen Class President: Elections for freshmen class president will be held within the first month of class. The elections
                     will be administered by the current sophomore class president.
                    </List.Item>
                    <List.Item>
                    Candidate Meeting: ESG will hold a meeting after the announcement of elections for the candidates to ask questions about election rules and petitions. The ESG Executive President will set forth the election rules.
                    </List.Item>
                    <List.Item>
                    Petitions Due: The election petitions are due no later than one week following the Candidates Meeting.
                    </List.Item>
                    <List.Item>
                    Campaign Period: Campaigns will be conducted during the one to two week period following the receipt of election petitions.
                    </List.Item>
                    <List.Item>
                    Elections: Elections will begin on the week following the campaign period. Results will be released no later than 24 hours after the polls close.
                    </List.Item>

                </List>
           </div>