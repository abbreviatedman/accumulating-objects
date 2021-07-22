const studentsArr = [
  {
    name: "Leanne Graham",
    GPA: 3.7,
    role: "Student",
  },
  {
    name: "Ervin Howell",
    GPA: 2.9,
    role: "Hall Monitor",
  },
  {
    name: "Clementine Bauch",
    GPA: 3.4,
    role: "Teacher's Assistant",
  },
  {
    name: "Patricia Lebsack",
    GPA: 4.0,
    role: "Student",
  },
  {
    name: "John Dietrich",
    GPA: 3.7,
    role: "Hall Monitor",
  },
  {
    name: "Dennis Schulist",
    GPA: 3.0,
    role: "Teacher's Assistant",
  },
];
/**
 * Returns the names of each student in the class.
 * @param {Object[]} students - An array of objects, each representing a student.
 * @returns {String} A string containing the names of all the students from the `students` array.
 */
function stringNames(students) {
// Declare a en empty string that will later hold students 
let stringNames = ' ';
// Create a loop to go through each student 
for (const student of students) {
  // Create an if statemenet saying if students 
  if (student) {
    // Return each student name from the students array
    stringNames += student.name + ', '
  }
}
// Took off last comma 
stringNames = stringNames.slice(0, -2)
// Return variable outside of the loop 
console.log(stringNames);
return stringNames;
}
stringNames(studentsArr);
//> "Leanne Graham, Ervin Howell, Clementine Bauch, Patricia Lebsack, John Dietrich, Dennis Schulist"
/**
 * Returns the names of each student in the class in an array.
 * @param {Object[]} students - An array of objects, each representing a student.
 * @returns {String[]} An array of the names of all the students from the `students` array.
 */
function arrayNames(students) {
  // Declare a variable and assign it an empty array
  let studentsArray = [];
  // Create a loop to go through each student 
  for (const student of students) {
    // Create an if statement saying if students 
    if (students) {
      // Return each student name from the students array (using .push())
      studentsArray.push(student.name);
    }
  }
  // Return variable outside of the loop
  console.log(studentsArray);
  return studentsArray;
}
arrayNames(studentsArr);
//> ['Leanne Graham', 'Ervin Howell', 'Clementine Bauch', 'Patricia Lebsack', 'John Dietrich', 'Dennis Schulist']
/**
 * Searches for a student by name.
 * @param {Object[]} students - An array of objects, each representing a student.
 * @param {String} name - The name of the student to find.
 * @returns {Object} The student in the class whose name matches.
 */
function findByName(students, name) {
  // Declare an empty object
  let studentObject = {};
  // Create a loop to go through students
  for (const student of students) {
    // Create an if statement saying if student.name === name
    if (student.name === name) {
      // Return student 
        studentObject = student;
    }
  }
  // Return the student inside of the object
  console.log(studentObject);
  return studentObject;
}
findByName(studentsArr, "Clementine Bauch");
//> { "name": "Clementine Bauch", "GPA": 3.4, "role": "Teacher's Assistant" }
findByName(studentsArr, "John Dietrich");
//> { "name": "John Dietrich", "GPA": 3.7, "role": "Hall Monitor" }
/**
 * Returns the average (also known as the mean average) GPA for the class.
 * @param {Object[]} students - An array of objects, each representing a student.
 * @returns {Number} The average GPA for the class.
 */
function findAverageGPA(students) {
  // Declare a variable total and assign it 0
  let total = 0;
  // Create a loop to go through students 
  for (const student of students) {
    // Create an if statement if students 
    if (student) {
      // Add up gpa's 
      total += student.GPA
    }
  } 
   // Return added up gpa's divided by how many students 
  total /= students.length
 // Return the variable 
console.log(total.toFixed(2));
return total.toFixed(2);
}
findAverageGPA(studentsArr);
//> 3.45
/**
 * Returns only the students who have a specific role.
 * @param {Object[]} students - An array of objects, each representing a student.
 * @param {String} role - The role of the desired students.
 * @returns {Object[]} The students who have the role.
 */
function filterByRole(students, role) {
  // Declare an empty array 
  let studentRole = [];
  // Create a loop to go through students
  for (const student of students) {
    // Create an if statement if students has role 
    if (student.role === role) {
      // Return array.push(role)
      studentRole.push(student);
    }
  } 
  // Return array
  console.log(studentRole);
  return studentRole;
}
filterByRole(studentsArr, "Hall Monitor");
//> [
//     {
//         "name": "Ervin Howell",
//         "GPA": 2.9,
//         "role": "Hall Monitor"
//     },
//     {
//         "name": "John Dietrich",
//         "GPA": 3.7,
//         "role": "Hall Monitor"
//     }
// ]
filterByRole(studentsArr, "Teacher's Assistant");
//> [
//     {
//         "name": "Clementine Bauch",
//         "GPA": 3.4,
//         "role": "Teacher's Assistant",
//     },
//     {
//         "name": "Dennis Schulist",
//         "GPA": 3.0,
//         "role": "Teacher's Assistant",
//     }
// ]