import {getAutos, mostrarAutos} from "./app.js"
import {Filtros} from "./filtros.js"
const autos = getAutos();

export let datosBusqueda ={
    marca: "", 
    ano: "", 
    pmin: "", 
    pmax: "", 
    puertas: "", 
    trans: "",
    color: ""
}

/// Event Listeners
document.addEventListener("DOMContentLoaded", ()=>{
    mostrarAutos(autos);
})

document.getElementById("buscador").addEventListener("change",(e)=>{
    e.preventDefault();
    if(e.target.id === "marca")
        datosBusqueda.marca = e.target.value;
    if(e.target.id === "year")
        datosBusqueda.ano = e.target.value;
    if(e.target.id === "minimo")
        datosBusqueda.pmin = e.target.value;
    if(e.target.id === "maximo")
        datosBusqueda.pmax = e.target.value;
    if(e.target.id === "puertas")
        datosBusqueda.puertas = e.target.value;
    if(e.target.id === "transmision")
        datosBusqueda.trans = e.target.value;
    if(e.target.id === "color")
        datosBusqueda.color = e.target.value;

    const resultado = Filtros.filtrarAuto();
    mostrarAutos(resultado);
    
})

// crear los años
const years = document.createElement('option');
const  max = new Date().getFullYear();
let  min = max - 11;

for(let i = max; i >  min; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}
/// Functions

