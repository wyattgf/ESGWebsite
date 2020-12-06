import GridColumnSections from '../../GridColumnSections';



export default class PrattRequirements extends GridColumnSections {
  sectionMap = new Map([
    ['Does the two AP limit rule apply to me?','No, Pratt students can use as many APs as they want. However, there is a two credit restriction on the number of APs used to count towards SS/H courses (see SS/H question).'],
    ['Is Pratt a lot of work?','The answer to this question varies greatly among students, so there’s no simple answer. Feel free to ask E-Teamers for their individual opinions.'],
    ['Is double majoring worth it?','That question depends on the individual. Many students enjoy the extra challenge of taking additional courses. Also, some majors are more closely related than others. For example, ECE and COMPSCI have a large amount of overlap, so the double major doesn’t require too many extra courses. On the other hand, a double major with BME and ECON is more difficult due to the limited overlap between the two subjects. A double major shows potential employers that you have the drive to go above and beyond what is required.'],
    ['I’m not completely sure if I want to be in Pratt. What should I do?','Try to ask yourself what you want to do with your degree. If your answer consists of applying to medical school, going into banking, or some other non-engineering field, then you might not enjoy being in Pratt. However, an engineering degree demonstrates good problem solving abilities to potential employers. If you chose Pratt because you like math and science but don’t know much about engineering, then you’re not alone. Pratt has EGR 101 to help you decide. It is also recommended that you look into the courses and research topics for each engineering major to help you find what you’re most interested in.'],
    ['Do I have to take a seminar? What about a language requirement?','No, Pratt students don’t need to take a seminar. Pratt’s \'language\' requirement is fulfilled by taking a semester of Python in EGR 103.'],
    ['Why are there so many people with double majors / minors?','Duke makes it relatively easy to complete a double major or minor. Since most Pratt students tend to overachieve, many end up pursuing other areas of study in addition to their primary major.'],
    ['What opportunities are there to explore a foreign country?','Duke has many different opportunities, including study abroad programs, Duke Engage, and Engineering Without Borders to name a few. See the Global Education Office’s website for more information.'],
  
  ])

    constructor(){
      super()
      this.setMap(this.sectionMap);
      this.setColumnsPerRow(2);
    }
  
    
}

  
