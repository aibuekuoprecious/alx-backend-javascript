const fs = require('fs');

/**
 * Counts the number of students in a CSV data file.
 * @param {String} csvPath The path to the CSV data file.
 * @author Aibueku Precious Okwuoma <https://github.com/aibuekuoprecious>
 */
const countStudents = (csvPath) => {
  if (!fs.existsSync(csvPath) || !fs.statSync(csvPath).isFile()) {
    throw new Error('Cannot load the database');
  }

  const fileContent = fs.readFileSync(csvPath, 'utf-8').trim();
  const fileLines = fileContent.split('\n');
  const dbFieldNames = fileLines[0].split(',');
  const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);
  const studentGroups = {};

  for (const line of fileLines.slice(1)) {
    const studentRecord = line.split(',');
    const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
    const field = studentRecord[studentRecord.length - 1];

    if (!studentGroups[field]) {
      studentGroups[field] = [];
    }

    const studentEntries = studentPropNames.map((propName, idx) => [propName, studentPropValues[idx]]);
    studentGroups[field].push(Object.fromEntries(studentEntries));
  }

  const totalStudents = Object.values(studentGroups).reduce((pre, cur) => pre.length + cur.length, 0);
  console.log(`Number of students: ${totalStudents}`);

  for (const [field, group] of Object.entries(studentGroups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;
