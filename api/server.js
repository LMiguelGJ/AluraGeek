// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')

const server = jsonServer.create()

const router = jsonServer.router('db.json')

const middlewares = jsonServer.defaults()

// Agregar un nuevo endpoint para imprimir "Hola Mundo"
server.get('/hello', (req, res) => {
    res.json({ message: 'Hola Mundo' })
})

server.use(middlewares)
server.use(router)
server.listen(3001, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server