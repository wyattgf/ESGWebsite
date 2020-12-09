import {Grid, GridRow} from 'semantic-ui-react';
import React, { Component }  from 'react';
import "../../../index.css";
import ExecCard from './ExecCard';
//import  "../../../data/images";

export default class ExecutiveBoard extends Component {

execBoardCards = [];

//template {"name":"","graduation":-1,"title":"","email":"","fact":"","image":""},
    
 execBoard = [
    {"name":"Polin Liu","graduation":2021,"title":"Executive President","email":"polin.liu@duke.edu","fact":"Trilingual but not tri-fluent","image":"polinliu.png"},
    {"name":"Emma Steadman","graduation":2022,"title":"Executive Vice President","email":"emma.steadman@duke.edu","fact":"Grew up with Niagra Falls in her backyard","image":"emmasteadman.jpg"},
    {"name":"Sebastian Williams","graduation":2022,"title":"Chief Financial Officer","email":"sebastian.williams@duke.edu","fact":"Goes by Seb, like from La La Land","image":"sebastianwilliams.jpg"},
    {"name":"Nikita Suri","graduation":2023,"title":"Student Group Liason","email":"nikita.suri@duke.edu","fact":"From FL<<<<","image":"nikitasuri.png"},
    {"name":"James Zheng","graduation":2023,"title":"Secretary","email":"james.zheng@duke.edu","fact":"HARDEST first-year engineering schedule","image":"jameszheng.png"},
    {"name":"Wyatt Focht","graduation":2023,"title":"Director of Technology and Communications","email":"wgf6@duke.edu","fact":"GREAT at coming up with fun facts","image":"wyattfocht.png"},
    {"name":"Matthew Jaynes","graduation":2022,"title":"Director of Industry Relations","email":"matthew.jaynes@duke.edu","fact":"Sometimes wears a backwards hat","image":"matthewjaynes.jpg"},
    {"name":"Alexa Tannebaum","graduation":2021,"title":"Chief Marketing Officer","email":"alexa.tannebaum@duke.edu","fact":"Thinks she's famous from Three Peas in the Pod","image":"alexatannebaum.jpg"},
    {"name":"Claire Szuter","graduation":2022,"title":"E-Ball/E-Picnic Chair","email":"claire.szuter@duke.edu","fact":"Took her until freshman spring to join ESG","image":"claireszuter.png"},
    {"name":"Kunal Upadya","graduation":2021,"title":"Class of 2021 President","email":"kunal.upadya@duke.edu","fact":"Insists Gates House is the best dorm","image":"kunalupadya.png"},
    {"name":"Bennett David","graduation":2022,"title":"Class of 2022 President","email":"bennett.david@duke.edu","fact":"Told the freshman that Trinity could votefor ESG","image":"bennettdavid.png"},
    {"name":"Parker Vakili","graduation":2023,"title":"Class of 2023 President","email":"parker.vakili@duke.edu","fact":"EGR 101's #1 Fan","image":"parkervakili.png"},
  ]

constructor(props){
    super();
    this.createCards();

}
 
 createCards(){
        for (var i = 0; i < this.execBoard.length; i++){
            this.execBoardCards[i] = this.individualCard(this.execBoard[i]);
        }  
 }

 individualCard(person){
        return(
            <ExecCard
                name={person.name}
                graduation={person.graduation}
                title={person.title}
                email={person.email}
                fact={person.fact}
                image={person.image}
            />
        )
    }

render(){
        return(
            <Grid>
                <GridRow className = 'dynamicRow'>
                    {this.execBoardCards}
                </GridRow>
            </Grid>
        ) 
    }
}