const students = require('./students');

students[0].age = 23;

students.forEach(student => {
    if (student.hasOwnProperty('age')) {
        console.log(`${student.firstName} ${student.lastName} has an age of ${student.age}.`)
    } else {
        console.log(`${student.firstName} ${student.lastName} does not have an age property.`)
    }
});

process.exit();