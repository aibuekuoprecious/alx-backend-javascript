/**
 * Express is a fast, unopinionated, minimalist web framework for Node.js.
 * @type {import('express')}
 */
const express = require('express');
const app = express();
const port = 1245;

const routes = require('./routes');

app.use('/', routes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;
