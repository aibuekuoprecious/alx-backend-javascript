const fs = require('fs').promises;

/**
 * Counts the number of students and organizes them by field of study.
 * 
 * @param {string} path - The path to the file containing student data.
 * @returns {Promise<void>} - A promise that resolves when the counting and organizing is complete.
 * @throws {Error} - If the database cannot be loaded.
 */
async function countStudents(path) {
    let data;
    try {
        data = await fs.readFile(path, 'utf8');
    } catch (error) {
        throw new Error('Cannot load the database');
    }

    // Split the data into lines
    let lines = data.split('\n');
    // Remove the headers and any empty lines
    lines = lines.filter((line) => line.length > 0 && !line.startsWith('firstname'));

    console.log(`Number of students: ${lines.length}`);

    // Create an object to hold the fields and the students in each field
    const fields = {};
    for (const line of lines) {
        const student = line.split(',');
        const field = student[3];
        if (!fields[field]) {
            fields[field] = [];
        }
        fields[field].push(student[0]);
    }

    for (const field in fields) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }
}

module.exports = countStudents;
