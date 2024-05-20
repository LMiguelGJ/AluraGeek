const ip = "127.0.0.1"

async function listaProductos(){
    const conexion = await fetch(`http://${ip}:3001/productos`);
    
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

async function createProduct(nombre,precio,imagen) {
    const conexion = await fetch(`http://${ip}:3001/productos`, {
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagen:imagen
        })
    })
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

async function delateProduct(id) {
    const conexion = await fetch(`http://${ip}:3001/productos/${id}`, {
        method: 'DELETE'
    })
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

async function PutProduct(id,nombre,precio,imagen) {
    const conexion = await fetch(`http://${ip}:3001/productos/${id}`, {
        method: "PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagen:imagen
        })
    })
    const conexionConvertida = await conexion.json();
    return conexionConvertida;g
}


export const conectaAPI={
    listaProductos,createProduct,delateProduct,PutProduct
}
