import React, { Component }  from 'react';
import {List, Image, Segment, Grid, GridColumn, GridRow} from "semantic-ui-react";
import ListPopup from './ListPopup';

export default class AboutContent extends Component {
    FOLDER_PATH = "./images/"
    
    eBallInfo = "A formal for engineers";
    eSocialInfo = "Opportunities to have face-to-face conversations with company recruiters about internships/full-time positions (with food and beer!)"
    ePicnicsInfo = "Large picnic with food and t-shirts for engineers";
    examBreakersInfo = "Snacks/games during reading period in the Fall and Spring";
    classGiftsInfo = "Small gifts for each class selected by your class president";
    pEdgeInfo="P-EDGE, a pre-orientation program for engineers";
    eOktoberfestInfo = "You know what this is (+ free beer!)";

    eSocialImage = "Esocial.jpg";
    eSocialImage2 ="Esocial2.jpg";
    eOktoberfestGroupPic = "eOktoberfest2019.jpeg";


    render(){
        return(
           <div>
               <Segment>
             <h1>ESG's Mission</h1>
            <p style={{fontSize:"18px"}}>
            The mission of Engineering Student Government (ESG) is to represent the engineering student body in all 
            matters related to the Pratt School of Engineering. We act as a conduit between the administration and students, provide support to engineering clubs and societies, and work to create a social outlet for engineers throughout the academic year.
            </p>
            <Image className='groupPic' src ={require(""+this.FOLDER_PATH+this.eOktoberfestGroupPic)}/>
            </Segment>
            <Segment>
            <h1>Our Big Events</h1>
            <Grid>
                <GridRow>
                    <GridColumn width={4}>
                        <List bulleted>
                            <ListPopup info={this.eBallInfo} event={"E-Ball"} />
                            <ListPopup info={this.eSocialInfo} event = {"E-Social"}/>
                            <ListPopup info = {this.ePicnicsInfo} event = {"E-Picnic"}/>
                            <ListPopup info = {this.examBreakersInfo} event={"Exam Breakers"}/>
                            <ListPopup info = {this.classGiftsInfo} event={"Class Gifts"}/>
                            <ListPopup info={this.pEdgeInfo} event={"P-Edge"}/>
                            <ListPopup info={this.eOktoberfestInfo} event={"E-Oktoberfest"}/>
                        </List>
                    </GridColumn>
                    <GridColumn width={6}>
                        <Image src={require(""+this.FOLDER_PATH+this.eSocialImage)}/>
                    </GridColumn>
                    <GridColumn width={6}>
                        <Image src ={require(""+this.FOLDER_PATH+this.eSocialImage2)}/>
                    </GridColumn>
                </GridRow>
            </Grid>
            </Segment>
            <Segment>
            <h1>Other Initiatives</h1>
            <List bulleted>
                <List.Item>Backend Communication with Deans to Improve Academic Experience</List.Item>
                <List.Item>Substantial Funding for Engineering-Focued Clubs/Organizations</List.Item>
                <List.Item>Transparent Course Evaluations</List.Item>
                <List.Item>E-Print In The Clusters</List.Item>
                <List.Item>Half Credit Skills Course</List.Item>
                <List.Item>Pratt Town Hall Meetings</List.Item>
                <List.Item>Staplers and Hole Punchers in Key Location Around Campus</List.Item>
                <List.Item>Whiteboards and Markers in Student Study Rooms</List.Item>
                <List.Item>Fully Loaded Linux Workstations with Applications Relevant to YOUR Coursework or Outside Interests</List.Item>
            </List>
            </Segment>
           </div>
        ) 
    }
}