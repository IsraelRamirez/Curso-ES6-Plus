import {Curso} from "./curso.js";
import {dataCarrito as Data} from "./data.js";

class UICarrito{
    /**
     * 
     * @param {Curso} element 
     */
    static agregarElemento(element){
        const curso = document.createElement("tr");
        curso.id = element.id;
        curso.innerHTML = `
        <td>
            <img src="${element.imagen}" width=100>
        </td>
        <td>${element.name}</td>
        <td>${element.precio}</td>
        <td><a href="#" class="borrar-curso"> X</a></td>
        `
        document.getElementById("lista-carrito").getElementsByTagName("tbody")[0].appendChild(curso);
    }
    /**
     * 
     * @param {HTMLElement} element
     */
    static eliminarElemento(element){
        element.remove();
    }
    static mostrarLista(){
        let cursos = Data.mostrarLista();
        if(cursos){
            cursos = JSON.parse(cursos);
            cursos.forEach((value)=>{
                this.agregarElemento(value);
            })
        }
    }

    static vaciarLista(){
        const nodes = document.getElementById("lista-carrito").querySelector("tbody").children;
        for(let node = nodes.length-1; node >=0; node-- ){
            nodes[node].remove();
        }
    }

    static cantidadElementos(){
        const alerta = document.getElementById("carrito").querySelector(".vacio");
        let cursos = Data.mostrarLista();
        if(cursos){
            cursos = JSON.parse(cursos);
            if(cursos.length==0){
                alerta.textContent = "Carrito Vacío";
            }
            else{
                alerta.textContent = `Hay ${cursos.length} Curso(s) en el Carrito`;
            }
        }
        else{
            alerta.textContent = "Carrito Vacío";
        }
    }

}

export {UICarrito};