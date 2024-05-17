async function listaProductos(){
    const conexion = await fetch("http://localhost:3001/productos");
    
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

async function createProduct(nombre,precio,imagen) {
    const conexion = await fetch("http://localhost:3001/productos", {
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


export const conectaAPI={
    listaProductos,createProduct
}
