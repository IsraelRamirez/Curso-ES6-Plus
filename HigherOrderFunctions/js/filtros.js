import {getAutos} from "./app.js"
import {datosBusqueda} from "./buscador.js"

class Filtros{
    static filtrarAuto(){
        const resultado = getAutos()
        .filter(this.filtrarMarca)
        .filter(this.filtrarAno)
        .filter(this.filtrarPmin)
        .filter(this.filtrarPmax)
        .filter(this.filtrarPuertas)
        .filter(this.filtrarTrans)
        .filter(this.filtrarColor)
        return resultado;
    }

    static filtrarMarca(auto){
        if(datosBusqueda.marca)
            return datosBusqueda.marca === auto.marca;
        else
            return true;
    }
    static filtrarAno(auto){
        if(datosBusqueda.ano)
            return Number(datosBusqueda.ano) == auto.year;
        else
            return true;
    }
    static filtrarPmin(auto){
        if(datosBusqueda.pmin)
            return Number(datosBusqueda.pmin) <= auto.precio;
        else
            return true;
    }
    static filtrarPmax(auto){
        if(datosBusqueda.pmax)
            return Number(datosBusqueda.pmax) >= auto.precio;
        else
            return true;
    }
    static filtrarPuertas(auto){
        if(datosBusqueda.puertas)
            return datosBusqueda.puertas == auto.puertas;
        else
            return true;
    }
    static filtrarTrans(auto){
        if(datosBusqueda.trans)
            return datosBusqueda.trans === auto.transmision;
        else
            return true;
    }
    static filtrarColor(auto){
        if(datosBusqueda.color)
            return datosBusqueda.color === auto.color;
        else
            return true;
    }
}

export {Filtros}