import { conectaAPI } from "./conectaAPI.js";

const lista = document.querySelector("[card-list]");

function construyeCard(id,nombre,precio,imagen){
    const card = document.createElement("div");
    card.className="card";
    card.id=id
    
    card.innerHTML=
    `
    <img src="${imagen}" />
    <div class="card-container--info">
      <p>${nombre}</p>
      <div class="card-container--value">
        <p>$ ${precio}</p>
        <img src="./assets/icon/trashIcon.png" data-delate data-id="${id}"/>
      </div>
    </div>
  </div>
  `
  const deleteIcons = card.querySelector('[data-delate]');

  deleteIcons.addEventListener('click', (event) => {
    const cardId = event.target.getAttribute('data-id');

    if (cardId) {
        conectaAPI.delateProduct(cardId);
        console.log(cardId)
    }
});
    return card;
}


async function listaProductos(){
    const listaAPI = await conectaAPI.listaProductos();
    console.log(listaAPI)
    listaAPI.forEach(element => lista.appendChild(construyeCard(element.id,element.nombre,element.precio,element.imagen)));

}

listaProductos();