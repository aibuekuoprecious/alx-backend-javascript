const fs = require('fs').promises;

function readDatabase(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8')
            .then(data => {
                const lines = data.trim().split('\n');
                const students = {};
                lines.forEach(line => {
                    const [field, firstName] = line.split(',');
                    if (!students[field]) {
                        students[field] = [];
                    }
                    students[field].push(firstName.trim());
                });
                resolve(students);
            })
            .catch(err => {
                reject(err);
            });
    });
}

module.exports = readDatabase;
