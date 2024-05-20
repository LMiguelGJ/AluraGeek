const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(cors()); // Habilitar CORS

server.use(middlewares);
server.use(router);
server.listen(3001, () => {
    console.log('JSON Server is running');
});

// Exportar la API del servidor
module.exports = server;
