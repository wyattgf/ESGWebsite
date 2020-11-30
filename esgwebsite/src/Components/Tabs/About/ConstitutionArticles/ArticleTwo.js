import Article from './Article';

export default class ArticleTwo extends Article {

    
    SECRETARY = ["Shall record and distribute the minutes of all ESG meetings by email to the board.",
        "Shall keep a calendar of all ESG and ESG sponsored events.",
        "Shall maintain and publicly display all ESG contact information.",
        "Shall be responsible for publicizing and organizing the distribution of all ESG publicity. Publicity includes but is not limited to faculty invitations, the ESG social media, emails, and flyers.",
        "Shall coordinate and lead collaboration with Pratt student groups on student group E-Socials and other related ESG events."
        ]

    GENERAL = [
        "All elected officers are expected to be an integral part of the overall efforts of ESG and contribute to the fulfilment of ESG goals.",
        "All elected officers serve a three-semester term.",
        "During the spring term, the previous officers will serve an advisory role while working alongside the newly elected officers.",
        "All ESG officers must attend ESG meetings.",
        "All officers or elected ESG board members must be in charge of at least one substantial event or project during each semester of their term."
    ]

    PRESIDENT = [
        "Shall call, set the agenda, and preside over the meetings of ESG.",
        "Shall be readily accessible to students, faculty, administration, and staff.",
        "Shall ensure that ESG’s activities include all engineering students and address social, academic, and service aspects of student life.",
        "Maintains organization in good standing with Duke University via communications with UCAE (University Center Activities & Events) and/or other interested University entities."
        

    ]

    VICE = [
        "Shall assume all duties and powers of the President in his/her absence.",
       "Shall assist the President with any projects involving the administration or faculty members.",
        "Shall chair the Academic Action Committee (AAC) (see Article III) and report the status of AAC to the ESG board, while ensuring effective fulfilment of AAC’s mission and good connection with ESG."
        
    ]

    TREASURER = [
        "Shall be responsible for all ESG finances.",
        "Shall report the financial status of ESG when necessary.",
        "Shall report a list of all expenditures at the end of each semester to ESG board members."
    ]

    TECH = [
        "Shall be responsible for ESG’s website and keeping the information on the website up to date.",
        "Shall aid the board regarding the use of technology such as managing online surveys.",
        "Selected via application (see Article V.)",

    ]

    INDUSTRY = [
        "Shall be responsible for recruiting and maintaining relationships with corporate sponsors for corporate E-Socials and other related ESG events."
    ]

    CMO = [
        "Shall be in charge of merchandise and products.",
        "Shall be responsible for maintaining Engineering Student Government’s brand."

    ]

    CLASS = [
        "Shall act as a liaison between their class and ESG in all matters including but not limited to academic and social concerns.",
       "Shall be allotted a portion of the ESG budget to be utilized for their class in programming or other ESG sanctioned endeavors.",
        "The senior class president shall facilitate any alcohol during events.",
        

    ]
    SECTIONS = new Map([
        ["Section 1. General ESG Duties",this.GENERAL], 
        ["Section 2. President",this.PRESIDENT],
        ["Section 3. Vice President",this.VICE],
        ["Section 4. Secretary",this.SECRETARY],
        ["Section 5. Treasurer",this.TREASURER],
        ["Section 6. Director of Communications and Technology",this.TECH],
        ["Section 7. Director of Industry Relations",this.INDUSTRY],
        ["Section 8. Chief Marketing Officer (CMO)",this.CMO],
        ["Section 9. Class President",this.CLASS],
    
    ]);
    
    constructor(){
        super();
        this.setSections(this.SECTIONS);
    }
}