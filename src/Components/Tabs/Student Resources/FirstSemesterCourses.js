import GridColumnSections from '../../GridColumnSections';



export default class FirstSemesterCourses extends GridColumnSections {
  sectionMap = new Map([
    ['What are the chemistry requirements for engineering?',[
    'For BME students, you need 2 chemistry courses  BME will only give you credit for Chemistry if you have a 5 on the AP exam, and that gives you credit for Chem 21. Therefore,', 
    'you need either Chem 210 DL or 201 DL to satisfy the chemistry requirement.  A 4 on the AP exam will NOT satisfy the BME chemistry requirement and you will therefore need to take Chem 101DL or Chem 110DL AND Chem 210DL or 201DL',
    '.CE, ECE, and ME majors all require only 1 semester of chemistry and a 4 or 5 WILL satisfy that requirement.  Therefore, you do not need any further chemistry courses.',
    'Pre-med students need 1 year of chemistry, w/ a lab (Chem 101DL + 210DL OR Chem 110DL +210 DL).  In addition, pre-med requires 1 year of Organic Chemistry (Chem 201DD + 202L).',
    ]
    .join(' ')],
    ['What are the math requirements?',[
    'All engineering majors must take Math 111(31), 112 (32), 212 (103), 216 (107) and 353 (108). [Old numbers are in parenthesis]. Students who received a 5 on the AB test or a 3 on the BC test receive credit for Math 21 and are eligible to take Math 122 (41) which is available in the fall or 112 (32) which is available in the spring. A score of 4 or 5 on the BC test will give credit for math 21 and 22, and students will be eligible to take 212.',
    'If students are advised to skip any math courses, they must replace those courses with additional approved Math classes. The total number of Math courses taken at Duke plus the number of AP/transfer credits must equal 5.',
    'If you need to consult someone about what to do for math, contact the Director of Undergraduate Studies, Dr. Clark Bray (cbray@math.duke.edu) after you have consulted the math placement website.'
    ].join(' ')],
    ['One of the courses / sections that I want to take is filled up. What are my options?','You should select alternative sections and/or courses.  If this is a required course such as Math, Chemistry, or EGR 103L, then contact the Dean’s office for assistance in getting these required courses.'],
    ['Do I have to take Writing 101?','Yes, all Pratt students are required to take Writing 101 either their first or second semester of freshman year.'],
    ['I’m a bit confused about the social sciences and humanities (SS/H) requirements. What are they again?',[
    '1. At least one course must be a social science (SS). You can find whether a course satisfies this requirement by looking at the course information on DukeHub.',
    '2. Other courses must be selected from at least two of the following three areas: arts/literature/performance (ALP), civilization (CZ) and foreign language (FL).',
    '3. At least two courses must be taken from the same department with one being at 200-level or higher.',
    '4. Skill courses cannot be used to fulfill SS/H requirements.',
    '5. A maximum of two AP credits are accepted to satisfy the SS/H requirements.',
    '6. SS/H courses taken in an engineering or science department count only if they are cross-listed in an SS/H department.'
    ].join(' ')],
    ['What is EGR 103 and do I have to take it?','All Pratt students will take EGR 103; most will take it in the fall and some exceptions will take it in the spring. It is an introductory class to learning and programming in Matlab language. Prior experience in computer programming is not at all necessary, and most of the class will not have programmed in Matlab. However, understanding of the material for this course is important since other courses may involve coding in Matlab or it may benefit you should you work in a research lab.'],
  ])

    constructor(){
      super()
      this.setMap(this.sectionMap);
      this.setColumnsPerRow(1);
    }
  
    
}

  
