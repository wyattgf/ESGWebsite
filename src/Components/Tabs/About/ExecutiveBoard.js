import {Grid, GridRow} from 'semantic-ui-react';
import React, { Component }  from 'react';
import "../../../index.css";
import ExecCard from './ExecCard';
//import  "../../../data/images";

export default class ExecutiveBoard extends Component {
execBoardCards = [];


//template {"name":"","graduation":-1,"title":"","email":"","fact":"","image":""},
    
 execBoard = [
   //{"name":"Emma Steadman","graduation":2022,"title":"Executive President","email":"emma.steadman@duke.edu","fact":"Grew up with Niagra Falls in her backyard","image":"emmasteadman.jpg"},
    {"name":"Nikita Suri","graduation":2023,"title":"Executive President","email":"nikita.suri@duke.edu","fact":"6'4","image":"nikitasuri.png"},
    {"name":"Jack Rhodes","graduation":2024,"title":"Vice President","email":"jsr73@duke.edu","fact":"Was secretary before this #promotion #movingupintheworld #hashtag","image":"JACKRHODES2.png"},
    {"name":"Ben Perry","graduation":2024,"title":"Chief Financial Officer","email":"benjamin.perry@duke.edu","fact":"Thought he was a senior all of last semester", "image":"benperry.png"},
    {"name":"Neil Upreti","graduation":2025,"title":"Director of Technology and Communications & Secretary","email":"neil.upreti@duke.edu","fact":"The backbone of ESG", "image":"neilupreti.png"},
    {"name":"Emily Shao","graduation":2024,"title":"Freshman Representative","email":"emily.shao@duke.edu","fact":"Told me to take ESG more seriously", "image":"emilyshao.png"},
    {"name":"Long Nguyen","graduation":2025,"title":"Student Group Liason","email":"long.t.nguyen@duke.edu","fact":"I like his crewneck in this picture","image":"longnguyen.png"},
    //{"name":"Wyatt Focht","graduation":2023,"title":"Director of Technology and Communications","email":"wgf6@duke.edu","fact":"GREAT at coming up with fun facts","image":"wyattfocht.png"},
    {"name":"Sophia Leeman","graduation":2024,"title":"Chief Marketing Officer","email":"sophia.leeman@duke.edu","fact":"Friends with Ben","image":"leeman.png"},
    {"name":"Eliana Durkee","graduation":2025,"title":"E-Ball/E-Picnic Chair","email":"eliana.durkee@duke.edu","fact":"Cowboy boot connoisseur","image":"eliana.png"},
    //{"name":"Bennett David","graduation":2022,"title":"Class of 2022 President","email":"bennett.david@duke.edu","fact":"Told the freshman that Trinity could vote for ESG","image":"bennettdavid.png"},
    {"name":"James Zheng","graduation":2023,"title":"Class of 2023 President","email":"james.zheng@duke.edu","fact":"I told him he looked beautiful in this picture and he left me on read...","image":"ZHENGPEG.png"},
    {"name":"Vivian Su","graduation":2024,"title":"Class of 2024 President","email":"vivian.su@duke.edu","fact":"Seems to like SWE more than ESG","image":"viviansu.JPEG"},
    {"name":"Emily Yagoda","graduation":2025,"title":"Class of 2025 President","email":"emily.yagoda@duke.edu","fact":"Wild guess but I'm sure she has her own 3D printer at her house","image":"emilyyagoda.jpg"},
    {"name":"Kate Stutheit","graduation":2026,"title":"Class of 2026 President","email":"kate.stutheit@duke.edu","fact":"Beat the other 3 class of 2026 exec in hand to hand combat to acquire the role of '26 president","image":"woman.png"},
    {"name":"Dennis Dale","graduation":2026,"title":"Class of 2026 Representative","email":"dennis.dale@duke.edu","fact":"Related to Doug Dimmadome Owner of the Dimmsdale Dimmadome", "image":"dunktank.png"},
    
    {"name":"Josh Guthrie","graduation":2026,"title":"Director of Industry Relations","email":"josh.guthrie@duke.edu","fact":"The rie in his last name is silent","image":"lankster.png"},
    {"name":"Pranav Mukund","graduation":2026,"title":"Class of 2026 Representative","email":"pranav.mukund@duke.edu","fact":"Durian is his favorite fruit!", "image":"durianboy.jpeg"},
    
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
                key={person.name}
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