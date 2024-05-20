const ip = "localhost";

async function listaProductos(){
    const conexion = await fetch(`http://${ip}/productos`);
    
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

async function createProduct(nombre, precio, imagen) {
    const conexion = await fetch(`http://${ip}/productos`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            nombre: nombre,
            precio: precio,
            imagen: imagen
        })
    })
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

async function delateProduct(id) {
    const conexion = await fetch(`http://${ip}/productos/${id}`, {
        method: 'DELETE'
    })
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

async function PutProduct(id, nombre, precio, imagen) {
    const conexion = await fetch(`http://${ip}/productos/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            nombre: nombre,
            precio: precio,
            imagen: imagen
        })
    })
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

export const conectaAPI = {
    listaProductos,
    createProduct,
    delateProduct,
    PutProduct
}
