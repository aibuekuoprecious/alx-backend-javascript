const http = require('http');

const port = 1245;
const message = 'Hello Holberton School!\n';

/**
 * The HTTP server instance.
 *
 * @type {import('http').Server}
 */
const app = http.createServer((_, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(message);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
