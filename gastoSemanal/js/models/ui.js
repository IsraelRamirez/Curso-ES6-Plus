import {Producto} from "./lista.js";

class UI{
    /**
     * 
     * @param {Number} saldo 
     */
    static setSaldoInicial(saldo){
        document.getElementById("total").textContent=saldo;
        this.setSaldoActual(saldo);
    }
    /**
     * 
     * @param {Number} saldo 
     */
    static setSaldoActual(saldo){
        document.getElementById("restante").textContent = saldo;
    }
    /**
     * 
     * @param {Number} percent 
     */
    static setColorSA(percent){
        let color = "success";
        if(percent <= 0.5)
            color = "warning";
        if(percent <= 0.25)
            color = "danger";
        
        document.getElementById("restante").parentElement.parentElement.className = `restante alert alert-${color}`;
    }
    /**
     * 
     * @param {Producto} producto 
     */
    static insertNewProducto(producto){
        const element = document.createElement("div");
        element.id = producto.id;
        element.className = "row alert alert-info";
        element.innerHTML = `
            <div class="col"><b>${producto.nombre}</b></div>
            <div class="col-2"><b>$${producto.costo}</b></div>
            <div class="col-1"><button class="btn btn-danger btn-sm">X</button></div>
        `
        document.getElementById("gastos").querySelector(".list-group").appendChild(element);
    }
}

export {UI};