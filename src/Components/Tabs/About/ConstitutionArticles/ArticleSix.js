import Article from './Article';

export default class ArticleSix extends Article {
    DEFINITIONS = [
        "Position through Application – the actual position that a member would fill.",
        "Member through Application – the individual that fills a position. This position is available to all undergraduate student body members."
    ]
    
    SECTION1 = [
        "ESG adheres to the policy of non-discrimination and harassment as set forth in Duke’s Policy on Prohibited Discrimination, Harassment, and Related Misconduct. Discrimination and/or harassment based upon race, color, national origin, sex (including pregnancy), gender, gender identity, gender expression, sexual orientation, religion, genetic information, age, disability, or veteran status is prohibited."
    ]

    SECTIONS = new Map([
        ["Section 1.",this.SECTION1], 
    ]);
    
    constructor(props){
        super(props);
        this.setSections(this.SECTIONS);
    }
}