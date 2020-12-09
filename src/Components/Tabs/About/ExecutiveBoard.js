import { Card,Image ,Grid, GridColumn, GridRow, Segment} from 'semantic-ui-react';
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
    ["Alexa Tannebaum",2021,"Chief Marketing Officer","alexa.tannebaum@duke.edu","Thinks she's famous from Three Peas in the Pod","alexatannebaum.jpg"],
    ["Claire Szuter",2022,"E-Ball/E-Picnic Chair","claire.szuter@duke.edu","Took her until freshman spring to join ESG","claireszuter.png"],
    ["Kunal Upadya",2021,"Class of 2021 President","kunal.upadya@duke.edu","Insists Gates House is the best dorm","kunalupadya.png"],
    ["Bennett David",2022,"Class of 2022 President","bennett.david@duke.edu","Told the freshman that Trinity could votefor ESG","bennettdavid.png"],
    ["Parker Vakili",2023,"Class of 2023 President","parker.vakili@duke.edu","EGR 101's #1 Fan","parkervakili.png"]
    
  ]

constructor(props){
    super();
    this.createCards();

}
  individualCard(name,graduation,title,email,fact,image){
    return(
    <div className='execCard'>
        <Card  key = {name}>
            <Image alt = {name} src={require("" + image)} wrapped ui={false} />
            <Card.Content>
            <Card.Header >{name}</Card.Header>
            <Card.Meta>
        Class of {graduation}
            </Card.Meta>
            <Card.Description>
        Position: {title} <br/>
        Email: <a className = 'externalLink' rel="noopener noreferrer" href={this.createEmailLink(email)} target="_blank">{email}</a> <br></br>
        Fun Fact: {fact}<br></br>
            </Card.Description>
            </Card.Content>
        </Card>
    </div>
    )
}

    createEmailLink(email){
        return ('mailto:' + email);
    }

    createCards(){
        for (var i = 0; i < this.execBoard.length; i++){
            this.execBoardCards[i] = this.individualCard(
                this.execBoard[i][0], //name
                this.execBoard[i][1], //grad year
                this.execBoard[i][2], // position title
                this.execBoard[i][3], // email
                this.execBoard[i][4], // fun fact
                this.IMAGES_PATH+this.execBoard[i][5] //image
            );
        }  
 }

    render(){
        return(
            <Grid>
                <GridRow className = 'dynamicExecRow'>
                    {this.execBoardCards}
                </GridRow>
            </Grid>
        ) 
    }
}