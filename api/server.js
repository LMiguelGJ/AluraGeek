const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('api/db.json'); // Asegúrate de la ruta correcta
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = server;