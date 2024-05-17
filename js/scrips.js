import { conectaAPI } from "./conectaAPI.js";

const lista = document.querySelector("[card-list]");

function construyeCard(nombre,precio,imagen){
    const card = document.createElement("div");
    card.className="card";
    
    card.innerHTML=
    `
    <img src="${imagen}" />
    <div class="card-container--info">
      <p>${nombre}</p>
      <div class="card-container--value">
        <p>$ ${precio}</p>
        <img src="./assets/icon/trashIcon.png" />
      </div>
    </div>
  </div>
  `
    return card;
}


async function listaProductos(){
    const listaAPI = await conectaAPI.listaProductos();
    console.log(listaAPI)
    listaAPI.forEach(element => lista.appendChild(construyeCard(element.nombre,element.precio,element.imagen)));

}

listaProductos();