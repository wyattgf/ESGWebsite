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
    {"name":"Nikita Suri","graduation":2023,"title":"Executive President","email":"nikita.suri@duke.edu","fact":"From FL<<<<","image":"nikitasuri.png"},
    {"name":"Jack Rhodes","graduation":2024,"title":"Vice President","email":"jsr73@duke.edu","fact":"Was much taller in person than I expected","image":"JACKRHODES2.png"},
    {"name":"Ben Perry","graduation":2024,"title":"Chief Financial Officer","email":"benjamin.perry@duke.edu","fact":"Will consistently forget your new-member getting-to-know-you coffee chat", "image":"benperry.png"},
    {"name":"Emily Shao","graduation":2024,"title":"Freshman Representative","email":"emily.shao@duke.edu","fact":"", "image":"emilyshao.png"},
    {"name":"Long Nguyen","graduation":2025,"title":"Student Group Liason","email":"long.t.nguyen@duke.edu","fact":"Is DROPPING Pratt :(","image":"longnguyen.png"},
    //{"name":"Wyatt Focht","graduation":2023,"title":"Director of Technology and Communications","email":"wgf6@duke.edu","fact":"GREAT at coming up with fun facts","image":"wyattfocht.png"},
    {"name":"Aneesh Karuppur","graduation":2025,"title":"Director of Industry Relations","email":"aneesh.karuppur@duke.edu","fact":"Seb, like from La La Land","image":"sebastianwilliams.jpg"},
    {"name":"Sophia Leeman","graduation":2024,"title":"Chief Marketing Officer","email":"sophia.leeman@duke.edu","fact":"Thinks she's famous from Three Peas in the Pod","image":"leeman.png"},
    {"name":"Eliana Durkee","graduation":2025,"title":"E-Ball/E-Picnic Chair","email":"eliana.durkee@duke.edu","fact":"Took her until freshman spring to join ESG","image":"eliana.png"},
    //{"name":"Bennett David","graduation":2022,"title":"Class of 2022 President","email":"bennett.david@duke.edu","fact":"Told the freshman that Trinity could vote for ESG","image":"bennettdavid.png"},
    {"name":"James Zheng","graduation":2023,"title":"Class of 2023 President","email":"james.zheng@duke.edu","fact":"HARDEST first-year engineering schedule","image":"jameszheng.png"},
    {"name":"Vivian Su","graduation":2024,"title":"Class of 2024 President","email":"vivian.su@duke.edu","fact":"I feel like I see her in this red jacket in a lot of her pictures","image":"viviansu.JPEG"},
    {"name":"Emily Yagoda","graduation":2025,"title":"Class of 2025 President","email":"emily.yagoda@duke.edu","fact":"Wild guess but I'm sure she has her own 3D printer at her house","image":"emilyyagoda.jpg"},
    
    {"name":"Neil Upreti","graduation":2024,"title":"Freshman Representative","email":"neil.upreti@duke.edu","fact":"It is not an accident that I listed him last on this website", "image":"neilupreti.png"},

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