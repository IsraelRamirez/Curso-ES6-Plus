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
let i=0;
while(true){
    i++;
    console.log(`Aqui i = ${i}`);
    if(i%2==0){
        continue;
    }
    if(i>10){
        break;
    }
    console.log(i);
    
}