
const ip = "localhost:3001"; // Especifica el puerto 3001 para el servidor JSON

async function listaProductos() {
    try {
        const conexion = await fetch(`http://${ip}/productos`);
        const conexionConvertida = await conexion.json();
        return conexionConvertida;
    } catch (error) {
        console.error('Error al obtener productos:', error);
        throw error;
    }
}

async function createProduct(nombre, precio, imagen) {
    try {
        const response = await fetch('http://localhost:3001/hello');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error al hacer la solicitud:', error);
    }
    try {
        const conexion = await fetch(`http://${ip}/productos`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                nombre: nombre,
                precio: precio,
                imagen: imagen
            })
        });
        const conexionConvertida = await conexion.json();
        return conexionConvertida;
    } catch (error) {
        console.error('Error al crear producto:', error);
        throw error;
    }
}

async function deleteProduct(id) {
    try {
        const conexion = await fetch(`http://${ip}/productos/${id}`, {
            method: 'DELETE'
        });
        const conexionConvertida = await conexion.json();
        return conexionConvertida;
    } catch (error) {
        console.error('Error al eliminar producto:', error);
        throw error;
    }
}

async function putProduct(id, nombre, precio, imagen) {
    try {
        const conexion = await fetch(`http://${ip}/productos/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                nombre: nombre,
                precio: precio,
                imagen: imagen
            })
        });
        const conexionConvertida = await conexion.json();
        return conexionConvertida;
    } catch (error) {
        console.error('Error al actualizar producto:', error);
        throw error;
    }
}

export const conectaAPI = {
    listaProductos,
    createProduct,
    deleteProduct,
    putProduct
};
