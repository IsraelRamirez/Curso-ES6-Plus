import {Curso} from "./curso.js";

class dataCarrito{
    /**
     * 
     * @param {Curso} element 
     * @returns {boolean}
     */
    static existe(element){
        let carrito = this.mostrarLista();
        let exist = false;
        if(carrito){
            carrito = JSON.parse(carrito);
            carrito.forEach((value)=>{
                if(value.id == element.id)
                    exist = true;
            });
            return exist;
        }
        return exist;
    }
    /**
     * 
     * @param {Curso} element 
     */
    static agregarElemento(element){
        let cursos = this.mostrarLista();
        if(cursos){
            cursos = JSON.parse(cursos);
            cursos.push(element);
        }
        else
            cursos = new Array(element);
        
        localStorage.setItem("carrito", JSON.stringify(cursos));
    }
    /**
     * 
     * @param {String} id
     */
    static eliminarElemento(id){
        let cursos = localStorage.getItem("carrito");
        cursos = JSON.parse(cursos);
        cursos.forEach((value, index, cursos)=>{
            
            if(value.id == id){
                cursos.splice(index, 1);
            }
        })
        if(cursos.length>0)
            localStorage.setItem("carrito", JSON.stringify(cursos));
        else
            localStorage.clear();
    }
    /**
     * 
     * @returns {Curso[]}
     */
    static mostrarLista(){
        return localStorage.getItem("carrito");
    }

    static vaciarLista(){
        if(localStorage.getItem("carrito"))
            localStorage.clear();
    }
}

export {dataCarrito};