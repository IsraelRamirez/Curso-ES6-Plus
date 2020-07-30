class Producto{
    /**
     * @param {Number} id
     * @param {String} nombre 
     * @param {Number} costo 
     */
    constructor(id, nombre, costo){
        this.id = id;
        this.nombre = nombre;
        this.costo = costo;
    }
}

export {Producto};