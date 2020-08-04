import {UI} from "./interfaz.js";

document.getElementById("formulario-buscar").addEventListener("submit", (e)=>{
    e.preventDefault();
    const artista = document.getElementById("artista").value,
    cancion = document.getElementById("cancion").value;

    UI.deleteAlertIfExist();

    if(artista && cancion){
        UI.getLyrics(artista, cancion);
    }
    else{
        UI.printAlert("Es necesario ingresar ambos campos.")
    }
})

const input = document.createElement("option");
input.innerHTML = "<input value='lmao' id='test' type='text' >"

document.getElementById("select").children[0].before(input);