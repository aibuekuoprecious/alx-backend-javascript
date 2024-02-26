const http = require('http');
const fs = require('fs');

/**
 * Creates an HTTP server using the provided request handler function.
 *
 * @param {Function} reqHandler - The request handler function to be executed for each incoming request.
 * @returns {http.Server} - The created HTTP server.
 */
const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    fs.readFile('database.csv', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error\n');
      } else {
        const students = data.split('\n').filter(Boolean);
        const csStudents = students.filter((student) => student.split(',')[3] === 'CS');
        const sweStudents = students.filter((student) => student.split(',')[3] === 'SWE');
        const csStudentNames = csStudents.map((student) => student.split(',')[0]);
        const sweStudentNames = sweStudents.map((student) => student.split(',')[0]);

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the list of our students\n');
        res.write(`Number of students: ${students.length - 1}\n`);
        res.write(`Number of students in CS: ${csStudents.length - 1}. List: ${csStudentNames.join(', ')}\n`);
        res.write(`Number of students in SWE: ${sweStudents.length - 1}. List: ${sweStudentNames.join(', ')}\n`);
        res.end();
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

app.listen(1245, 'localhost', () => {
  console.log('Server running at http://localhost:1245/');
});

module.exports = app;