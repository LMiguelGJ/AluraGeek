import { conectaAPI } from "./conectaAPI.js";

// Capturar los botones
const submitBtn = document.getElementById('submit-btn');
const clearBtn = document.getElementById('clear-btn');

async function createProduct(){
    const nombre= document.querySelector("[data-nombre]").value;
    const precio=document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    if (!(nombre == "" || precio == "" || imagen == "")) {
        await conectaAPI.createProduct(nombre,precio,imagen)
        console.log('Agregado!.');
        // Recargar la página
        location.reload();
    }
}

// Agregar event listeners para los botones
submitBtn.addEventListener('click', async function() {
    console.log('Se ha hecho clic en el botón "Enviar".');
    createProduct()
});

clearBtn.addEventListener('click', function() {
    console.log('Se ha hecho clic en el botón "Actualizar".');
    const nombre= document.querySelector("[data-nombre]").value;
    const precio=document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;
    const id = document.querySelector("[data-formulario]").id;

    console.log(id)
    if (!(nombre == "" || precio == "" || imagen == "")) {
        conectaAPI.PutProduct(id, nombre, precio, imagen);
        console.log('Atualizado!.');
        // Recargar la página
        location.reload();
    }

});