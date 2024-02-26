const http = require('http');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();

app.on('request', (_, res) => {
  /**
   * The response message to be sent by the server.
   * @type {string}
   */
  const resMessage = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', resMessage.length);
  res.statusCode = 200;
  res.write(Buffer.from(resMessage));
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
