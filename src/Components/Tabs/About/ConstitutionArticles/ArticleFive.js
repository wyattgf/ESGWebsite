import Article from './Article';

export default class ArticleFive extends Article {
    DEFINITIONS = [
        "Position through Application – the actual position that a member would fill.",
        "Member through Application – the individual that fills a position. This position is available to all undergraduate student body members."
    ]
    
    SECTION1 = [
        "A position shall be created that facilitates the ESG Mission through an individual’s leadership and expertise.",
        "The ESG Executive President is responsible for drafting a proposal containing an executive summary, responsibilities and goals. A simple majority of the board must be met to approve the position."
        ]

    SECTION2 = [
        "Members shall be chosen through a standardized application and interview process. At the time of elections, positions shall be announced and publicized to the entire Engineering undergraduate student body.",
        "An application will be distributed alongside the announcement of the position. The said application must contain at least the following information:",
        "Experience in the relevant field, including any relevant attachments.",
        "Other extracurricular activities and responsibilities.",
        "Motivation for application to the board.",
        "The ESG Executive Board will review the applications and interview potential candidates. A simple majority must be reached to grant an applicant a non-voting, ad hoc position on the board."

    ]

    SECTION3 = [
        "All selected members are expected to lead the effort on a project specified by the board; these projects must aim to better the Pratt community and align with the Mission of ESG as stated in these Bylaws. Their specific job description will be defined at the creation of the position and must be approved by a simple majority of the board.",
        "Members will serve a maximum term for one academic year. Only the process outlined in Article V Section 2.4 must be repeated to renew their membership.",
        "Application members are required to regularly update the ESG Executive Board on the status of their project(s). "
    ]

    SECTION4 = [
        "If ad hoc members wish to terminate their status on the board at a time before the end of their term, they must notify the board and agree to stay in their position until either another individual is found to replace them or one month has passed."
    ]

    SECTIONS = new Map([
        ["Definitions",this.DEFINITIONS],
        ["Section 1.",this.SECTION1], 
        ["Section 2.",this.SECTION2], 
        ["Section 3.",this.SECTION3], 
        ["Section 4.",this.SECTION4]
    ]);
    
    constructor(){
        super();
        this.setSections(this.SECTIONS);
    }
}