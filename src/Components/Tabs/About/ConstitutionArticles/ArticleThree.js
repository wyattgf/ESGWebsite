import Article from './Article';

export default class ArticleThree extends Article {
    SECTION1 = [
        "ESG shall assign a committee (the Academic Action Committee) devoted to improving the academic condition of the student experience."
    ]

    SECTIONS = new Map([
        ["Section 1.",this.SECTION1], 
    ]);
    
    constructor(){
        super();
        this.setSections(this.SECTIONS);
    }
}