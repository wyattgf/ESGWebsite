import { Card,Image } from 'semantic-ui-react';
import React, { Component }  from 'react';
//import images from "../../../data/images";

export default class ExecutiveBoard extends Component {
OFFICERS_FILE = './Officers.csv';
IMAGES_PATH = './';



DEFAULT_IMAGE_PATH = "";


execBoardCards = [];
 execBoard = [
    ["Wyatt Focht",2023,"Director of Technology and Communications","wgf6@duke.edu","Is a Pussy","wyattfocht.png"]
  ]

constructor(props){
    super();
    this.createCards();

}
  individualCard(name,graduation,title,email,fact,image){
    return(
    <Card key = {name}>
        <Image alt = {name} src={require("" + image)} wrapped ui={false} />
        <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
            <span className='graduation'>Class of {graduation}</span>
        </Card.Meta>
        <Card.Description>
            Position: {title} <br></br>
            Email: {email} <br></br>
            Fun Fact: {fact}<br></br>
        </Card.Description>
        </Card.Content>
    </Card>
    )
}

    createCards(){
        for (var i = 0; i < this.execBoard.length; i++){
            this.execBoardCards[i] = this.individualCard(this.execBoard[i][0],this.execBoard[i][1],this.execBoard[i][2],this.execBoard[i][3],this.execBoard[i][4],this.IMAGES_PATH+this.execBoard[i][5]);
        }  
 }


    render(){
        return(
            this.execBoardCards
        ) 
    }
}