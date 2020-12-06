import GridColumnSections from '../../GridColumnSections';



export default class SecondSemesterCourses extends GridColumnSections {
  sectionMap = new Map([
    ['First semester courses were all laid out for me, but I don’t know what courses to take in the spring semester. Do you have any suggestions?',[
        'Almost all Pratt students will take the next required math course in the track 111L, 112L, 212, 216 and',
        '353. Many students also take a physics course (see the following questions regarding physics). Freshmen', 
        'also take either writing 101 (if they haven’t done so already) or an SS/H course. Finally, many students', 
        'take a course specific to their intended majors. ECE students take ECE 110L, ME students take EGR 121L,', 
        'CEE students take CEE 120L. BME students are recommended to take Biology. EGR 201L is another popular',
        'course for students who have AP credit for mechanics, and the course is required for BME, CE, and ME majors.'
    ]
    .join(' ')],
    ['I have AP credit for Physics 151, but not Physics 152. What course should I take?',[
        'You should take physics 152 in the fall of your sophomore year.'
    ].join(' ')],
    ['I have AP credit for both Physics 151 and 152, but I’m not sure if I want to take 153. Do I have any other options?','Your options to fulfill your Physics requirement with the appropriate AP credit are PHYSICS 152L, 153L, 246L, 361, or 362.  Note that most of these courses are only offered in the fall, or only offered in the spring.'],
  ])

    constructor(){
      super()
      this.setMap(this.sectionMap);
      this.setColumnsPerRow(1);
    }
  
    
}

  
