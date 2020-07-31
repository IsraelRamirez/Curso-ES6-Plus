import {UI} from "./models/ui.js";
import {ApiConnection} from "./models/connect.js";

async function cargarNombres(e){
    e.preventDefault();

    const pais = e.target.querySelector("#origen").value, genero = e.target.querySelector("#genero").value, cantidad = e.target.querySelector("#numero").value;
    
    const connection = new ApiConnection(genero, pais, cantidad);
    const nombres = await connection.getRequest();
    
    let htmlNombres = "<h2>Nombres Generados</h2>";

    htmlNombres += "<ul class='lista'>";
    nombres.forEach((nombre) =>{
        htmlNombres += `<li><b>${nombre.name.title} ${nombre.name.first} ${nombre.name.last}</b></li>`;
    })
    htmlNombres += "</ul>";

    document.getElementById("resultado").innerHTML = htmlNombres;
    
}

document.getElementById("generar-nombre").addEventListener("submit", cargarNombres);

