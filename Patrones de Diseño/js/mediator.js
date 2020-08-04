const Vendedor = function(nombre){
    this.nombre = nombre;
    this.sala = null;
}

const Comprador = function(nombre){
    this.nombre = nombre
    this.sala = null;
}

Vendedor.prototype = {
    oferta: function(articulo, precio){
        console.log((`Tenemos el siguiente articulo ${articulo}, iniciamos en $ ${precio}`));
    },
    vendido: function(comprador){
        console.log(`Vendido a ${comprador} (Sonido de mazo)`);
    }
}

Comprador.prototype = {
    oferta: function(mensaje, comprador){
        console.log(`${comprador.nombre} : ${mensaje}`);
    }
}

const Subasta = function(){
    let compradores = {};

    return {
        registrar: function(usuario){
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}

const juan = new Comprador("Juan");
const isra = new Comprador("Isra");
const caro = new Comprador("Caro");

const vendedor = new Vendedor("Vendedor");

const subasta = new Subasta();
subasta.registrar(juan);
subasta.registrar(isra);
subasta.registrar(caro);

const subasta2 = new Subasta();
subasta2.registrar(juan);
subasta2.registrar(isra);

vendedor.oferta("Mustang 1966", 3000)
juan.oferta(3500, juan)
isra.oferta(4000, isra)
caro.oferta(10000, caro)
vendedor.vendido(caro.nombre)