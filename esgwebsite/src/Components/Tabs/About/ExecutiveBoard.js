import { Card,Image } from 'semantic-ui-react';
import React, { Component }  from 'react';

export default class ExecutiveBoard extends Component {
OFFICERS_FILE = './Officers.csv';
IMAGES_PATH = './';



DEFAULT_IMAGE_PATH = "";


execBoardCards = [];
 execBoard = [
    {name:"Wyatt Focht",graduation:2023,title:"Director of Technology and Communications",email:"wgf6@duke.edu",fact:"Pussy",image:"wyattfocht.png"}
  ]

constructor(props){
    super();
    this.createCards();
}
  individualCard(name,graduation,title,email,fact,image){
    return(
    <Card>
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
            console.log(this.IMAGES_PATH+this.execBoard[i].image);
            this.execBoardCards[i] = this.individualCard(this.execBoard[i].name,this.execBoard[i].graduation,this.execBoard[i].title,this.execBoard[i].email,this.execBoard[i].fact,this.IMAGES_PATH+this.execBoard[i].image);
        }  
 }


    render(){
        return(
            this.execBoardCards
        ) 
    }
}