const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);

// Función para crear un nuevo producto
function createProduct(product) {
    router.db.get('productos').push(product).write();
}

// Función para obtener todos los productos
function getProducts() {
    return router.db.get('productos').value();
}

// Función para actualizar un producto
function updateProduct(id, newData) {
    router.db.get('productos').find({ id }).assign(newData).write();
}

// Función para eliminar un producto
function deleteProduct(id) {
    router.db.get('productos').remove({ id }).write();
}

server.listen(port);

// module.exports = {
//     createProduct,
//     getProducts,
//     updateProduct,
//     deleteProduct
// };



// Crear un nuevo producto
createProduct({
    id: '1234',
    nombre: 'Nintendo Switch',
    precio: '299',
    imagen: 'https://example.com/nintendo_switch.jpg'
});

// Obtener todos los productos
const allProducts = getProducts();
console.log(allProducts);

// Actualizar un producto
updateProduct('1234', {
    nombre: 'Nintendo Switch OLED',
    precio: '349'
});

// Eliminar un producto
deleteProduct('1234');