/**
 * Express is a fast, unopinionated, minimalist web framework for Node.js.
 * It provides a robust set of features for web and mobile applications.
 * @type {import('express')}
 */
const express = require('express');

const app = express();
const PORT = 1245;

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
