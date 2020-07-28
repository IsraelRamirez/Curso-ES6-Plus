import {UICarrito as UI} from "./models/ui.js";
import {dataCarrito as Data} from "./models/data.js";
import {Curso} from "./models/curso.js";

function agregarCarrito(e){
    if(e.target.classList.contains("agregar-carrito")){
        e.preventDefault();
        const curso = new Curso(e.target.attributes["data-id"].nodeValue, e.target.parentNode.querySelector("h4").textContent, e.target.parentNode.parentNode.querySelector("img").attributes["src"].nodeValue, e.target.parentNode.querySelector(".precio").querySelector("span").textContent);
        
        if(!Data.existe(curso)){
            
            UI.agregarElemento(curso);
            Data.agregarElemento(curso);
            UI.cantidadElementos();
        }
        
    }
}

function eliminarCarrito(e){
    if(e.target.classList.contains("borrar-curso")){
        e.preventDefault();
        UI.eliminarElemento(e.target.parentNode.parentNode);
        Data.eliminarElemento(e.target.parentNode.parentNode.id);
        UI.cantidadElementos();
    }
}

function vaciarCarrito(e){
    e.preventDefault();
    UI.vaciarLista();
    Data.vaciarLista();
    UI.cantidadElementos();
}

//localStorage.clear()
UI.mostrarLista();
UI.cantidadElementos();
document.getElementById("lista-cursos").addEventListener("click", agregarCarrito);
document.getElementById("lista-carrito").addEventListener("click", eliminarCarrito);
document.getElementById("vaciar-carrito").addEventListener("click", vaciarCarrito);


/********* 
 * Test de eventos
**********/
/**
 * Funcion splice para strings
 * @param {Number} idx Indice de splice
 * @param {Number} rem Cantidad de items
 * @param {String} str Reemplazar por "Str"
 * @returns {String} Nuevo string
 */
/*
String.prototype.splice = function(idx, rem, str){
    return this.slice(0, idx) + str + this.slice(idx+ Math.abs(rem));
}

document.getElementById("buscador").addEventListener("keyup", (e)=>{
    
    while(e.target.value.includes("."))
        e.target.value=e.target.value.replace(".","");
    while(e.target.value.includes(","))
        e.target.value=e.target.value.replace(",","");
    for(let i = e.target.value.length-3; i>0; i=i-3)
        e.target.value=e.target.value.splice(i, 0, ".");
})
*/