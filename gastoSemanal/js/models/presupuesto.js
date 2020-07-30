import {Producto} from "./lista.js";

class Presupuesto{
    constructor(saldo){
        this.saldo = saldo;
    }
}

class Saldo{
    /**
     * 
     * @param {Number} saldoInicial 
     * @param {Number} saldoActual 
     * @param {Producto[]} lista
     * @returns {Number}
     */
    static getPercent(saldoInicial, saldoActual){
        return saldoActual/saldoInicial;
    }
    /**
     * 
     * @param {Number} saldoInicial 
     * @param {Producto[]} lista
     * @returns {Number} 
     */
    static getSaldoActual(saldoInicial, lista){
        let saldo = saldoInicial;
        lista.forEach((value) =>{
            saldo -= value.costo;
        })
        return saldo;
    }
    /**
     * 
     * @param {Number} id 
     * @param {Producto[]} lista 
     */
    static eliminarElement(id, lista){
        lista.forEach((value, index)=>{
            if(value.id == id)
                lista.splice(index,1);
        })
    }
}

export {Presupuesto, Saldo};