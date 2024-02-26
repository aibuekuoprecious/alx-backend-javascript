const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  const database = 'database.csv';
  fs.readFile(database, 'utf8', (err, data) => {
    if (err) {
      res.send('Error reading database');
    } else {
      const lines = data.split('\n');
      const students = lines.slice(1).map(line => line.split(',')[0]);
      const csStudents = students.filter(student => student.split('-')[0] === 'CS');
      /**
       * Filters the students array to only include students with the 'SWE' prefix in their names.
       *
       * @param {string[]} students - The array of student names.
       * @returns {string[]} - The filtered array of SWE students.
       */
      const sweStudents = students.filter(student => student.split('-')[0] === 'SWE');
      const csStudentsList = csStudents.join(', ');
      const sweStudentsList = sweStudents.join(', ');

      res.send(`This is the list of our students
Number of students: ${students.length}
Number of students in CS: ${csStudents.length}. List: ${csStudentsList}
Number of students in SWE: ${sweStudents.length}. List: ${sweStudentsList}`);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
