let amigos = [];

function adicionarAmigo() {
    let inputElemento = document.getElementById("amigo");
    let nome = inputElemento.value.trim(); 

    if (nome === "") {
        alert("Por favor, insira um nome."); 
        return;
    }
    amigos.push(nome);

    atualizarLista();
    
    inputElemento.value = "";
}
function atualizarLista() {
    
    let listaElemento = document.getElementById("listaAmigos");
    listaElemento.innerHTML = "";

    for (let amigo of amigos) {
        let item = `<li>${amigo}</li>`;

        listaElemento.innerHTML += item;
    }
}
function sortearAmigo(){
    if (amigos.length === 0){
        alert("Não há amigos para sortear.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    let resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;
}
function limparLista() {
    amigos = []; 
    atualizarLista(); 

    let resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = "";
}
