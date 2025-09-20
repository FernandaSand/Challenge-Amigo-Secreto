// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo ==='') {
        alert ('Por favor, inserte un nombre.');
    } else { 
        amigos.push (nombreAmigo);
    }
    limpiarCaja ();
    actualizarListaAmigos ();

    console.log (amigos)
    return;
}

function limpiarCaja () {
    let valorCaja = document.getElementById('amigo').value='';
}

function actualizarListaAmigos () {
    let listaHTML = document.getElementById ('listaAmigos');
    listaHTML.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
    let elementoLista = document.createElement ('li');
    elementoLista.textContent = amigos [i];
    listaHTML.appendChild (elementoLista);
    }
}