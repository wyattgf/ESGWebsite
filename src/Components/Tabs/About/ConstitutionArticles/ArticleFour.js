import Article from './Article';

export default class ArticleFour extends Article {
    SECTION1 = [
       "These bylaws may be amended provided the proposed amendments are put to a vote with an approval of simple majority of the voting undergraduate engineering student body."
    ]

    SECTIONS = new Map([
        ["Section 1.",this.SECTION1], 
    ]);
    
    constructor(){
        super();
        this.setSections(this.SECTIONS);
    }
}