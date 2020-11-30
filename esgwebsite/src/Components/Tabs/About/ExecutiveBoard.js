import { Card,Image ,Table} from 'semantic-ui-react';
import React, { Component }  from 'react';
import "../../../index.css";
//import  "../../../data/images";

export default class ExecutiveBoard extends Component {
OFFICERS_FILE = './Officers.csv';
IMAGES_PATH = './images/';



DEFAULT_IMAGE_PATH = "";


execBoardCards = [];
 execBoard = [
    ["Polin Liu",2021,"Executive President","polin.liu@duke.edu","Trilingual but not tri-fluent","polinliu.png"] ,
    ["Emma Steadman",2022,"Executive Vice President","emma.steadman@duke.edu","Grew up with Niagra Falls in her backyard","emmasteadman.jpg"],
    ["Sebastian Williams",2022,"Chief Financial Officer","sebastian.williams@duke.edu","Goes by Seb, like from La La Land","sebastianwilliams.jpg"],
    ["Nikita Suri",2023,"Student Group Liason","nikita.suri@duke.edu","From FL<<<<","nikitasuri.png"],
    ["James Zheng",2023,"Secretary","james.zheng@duke.edu","HARDEST first-year engineering schedule","jameszheng.png"],
    ["Wyatt Focht",2023,"Director of Technology and Communications","wgf6@duke.edu","GREAT at coming up with fun facts","wyattfocht.png"],
    ["Matthew Jaynes",2022,"Director of Industry Relations","matthew.jaynes@duke.edu","Sometimes wears a backwards hat","matthewjaynes.jpg"],
    ["Wyatt Focht",2023,"Director of Technology and Communications","wgf6@duke.edu","Is a Pussy","wyattfocht.png"],
    ["Wyatt Focht",2023,"Director of Technology and Communications","wgf6@duke.edu","Is a Pussy","wyattfocht.png"],
    
  ]

constructor(props){
    super();
    this.createCards();

}
  individualCard(name,graduation,title,email,fact,image){
    return(
    <Card className='execCard' key = {name}>
        <Image alt = {name} src={require("" + image)} wrapped ui={false} />
        <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
            <span className='graduation'>Class of {graduation}</span>
        </Card.Meta>
        <Card.Description>
            Position: {title} <br></br>
            Email: <a href="mailto:{email}" target="_blank">{email}</a> <br></br>
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

    createTable(){
        var rowIndex = 0;
        var rows = [];
        for (var i = 0; i <this.execBoardCards.length;i++){
           rows[rowIndex] =(
                <Table.Row>
                    {this.createRowCell(i,this.execBoardCards.length)}
                    {this.createRowCell(i+1,this.execBoardCards.length)}
                    {this.createRowCell(i+2,this.execBoardCards.length)}
                </Table.Row>
           );
           rowIndex+=1;
           i+=2;
        }

        return(
            <Table>
               {rows}
            </Table>
        )
    }

    createRowCell(i, length){
        if (i < length){
            return (<Table.Cell >{this.execBoardCards[i]}</Table.Cell>)
        }
        return (<Table.Cell/>)
    }


    render(){
        return(
            this.createTable()
        ) 
    }
}