  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
    {
      name: 'Michael',
      age: 23,
    },
    {
      name: 'Lianna',
      age: 16,
    },
    {
      name: 'Paul',
      age: 18,
    },
  ];

  /** WANT TO CREATE AN ARRAY OF PEOPLE OVER 21 YEARS OLD */

  const oldEnough = people.filter(person => person.age >=21);
  console.log(oldEnough);
  
  const paul = people.filter(person => person.name === 'Paul');
  console.log(paul);

  // Complex Filtering
  const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 5 },
        { name: 'css', yrsExperience: 3 },
      ]
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 0 },
        { name: 'html', yrsExperience: 4 },
        { name: 'css', yrsExperience: 2 },
      ]
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 1 },
        { name: 'css', yrsExperience: 5 },
      ]
    },
  ];
/** WRITING TEH CODE WITHIN THE FILTER FUNCTION CAN BECOME COMPLICATED SOMETIMES ITS EASIER TO DEFINE OUTSIDE THE FUNCTION
 * ALSO IT CAN BE RESUED - see below
 */
//   const candidates = students.filter(student => {
//     let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
//     return strongSkills.length > 0;
//   })

  const has5yearsExp = skill => skill.yrsExperience >= 5;
  const hasStrongSkills = student => student.skills.filter(has5yearsExp).length >0;
  const candidates = students.filter(hasStrongSkills);
  const candidateNames = candidates.map (candidates => candidates.name);
  console.log(candidates);
  console.log(candidateNames);

