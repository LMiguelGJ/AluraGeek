const { createProduct, getProducts, updateProduct, deleteProduct } = require('api/server.js');

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