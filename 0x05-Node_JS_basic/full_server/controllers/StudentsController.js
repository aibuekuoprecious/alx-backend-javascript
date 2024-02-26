const { readDatabase } = require('../utils');

/**
 * Controller class for handling student-related operations.
 */
class StudentsController {
    static async getAllStudents(_, res) {
        try {
            const students = await readDatabase('./database.csv');
            let response = 'This is the list of our students\n';
            Object.keys(students).sort().forEach(field => {
                response += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
            });
            res.status(200).send(response);
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const major = req.params.major.toUpperCase();
        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }

        try {
            const students = await readDatabase('./database.csv');
            res.status(200).send(`List: ${students[major].join(', ')}`);
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }
}

module.exports = StudentsController;
