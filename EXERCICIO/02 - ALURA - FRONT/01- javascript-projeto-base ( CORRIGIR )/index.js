const inputItem = document.getElementById ("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");
let contador = 0;

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    if (inputItem.value === "") {
        alert ("Por favor, insira um item!");
        return
    }

    const itemDalista  = document.createComment("li"); 
    const containerItemDalista  = document.createElement("div"); 
    containerItemDalista.classList.add("lista-item-container"); 
    const inputCheackbox = document.createElement("input");
    inputCheackbox.type = "checkbox";
    inputCheackbox.id = "checkbox-" + contador++;
    const nomeItem = document.createElement("p"); 
    nomeItem.innerText = inputItem.value;

    containerItemDalista.appendChild(inputCheackbox);
    containerItemDalista.appendChild(nomeItem);

    itemDalista.appendChild(containerItemDalista)
    listaDeCompras.appendChild(itemDalista)

})