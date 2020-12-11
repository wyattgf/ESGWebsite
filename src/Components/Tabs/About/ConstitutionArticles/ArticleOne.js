import Article from './Article';

export default class ArticleOne extends Article {
    VOTING = [
       'The selection of ESG board members will be by popular election of the undergraduate engineering student body with the exception of the Executive President. Each student will be allowed one vote per position. For the class president positions, only students of that specific class may vote for their class president. These elections will be administered by the ESG Executive President.' ,
        'The Executive President shall be elected through an internal election by all members of the executive board prior to the general election. A plurality is needed to elect the Executive President.'
    ]

    PROCEDURE = [
        'Announcement: Elections shall be announced and publicized to the entire Engineering undergraduate student body within the first month of the spring semester. ESG is reasonably responsible for informing all students of the elections.',
        'Freshmen Class President: Elections for freshmen class president will be held within the first month of class. The elections will be administered by the current sophomore class president.',
        'Candidate Meeting: ESG will hold a meeting after the announcement of elections for the candidates to ask questions about election rules and petitions. The ESG Executive President will set forth the election rules.',
        'Petitions Due: The election petitions are due no later than one week following the Candidates Meeting.',
        'Campaign Period: Campaigns will be conducted during the one to two week period following the receipt of election petitions.',
        'Elections: Elections will begin on the week following the campaign period. Results will be released no later than 24 hours after the polls close.',
    ]
    
    SECTIONS = new Map([
        ["Section 1. Voting",this.VOTING], 
        ["Section 2. Procedure",this.PROCEDURE],
    ]);

    constructor(props){
        super(props);
        this.setSections(this.SECTIONS);
    }
}