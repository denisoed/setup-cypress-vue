const jsonServer = require('json-server');
const users = require('./data/users');

const config = require('./config');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

// ---- Сustom routes ---- \\
server.get('/users', (req, res) => {
  res.jsonp(users);
});

server.listen(config.port, () => {
  console.log(`JSON Server is running on port: ${config.port}`);
});
