/**
 * Express is a minimal and flexible 
 * Node.js web application framework 
 * that provides a robust set of features 
 * for web and mobile applications.
 * @typedef {import('express')} express
 */
const express = require('express');

const app = express();
const port = 1245;

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;
