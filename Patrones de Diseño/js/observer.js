let observer = {
    obtenerOfertas: function(callback){
        if(typeof callback === "function"){
            this.subscribers[this.subscribers.length] = callback
        }
    },
    cancelarOfertas: function(callback){
        for(let i = 0; i < this.subscribers.length; i++){
            if(this.subscribers[i] == callback){
                delete this.subscribers[i];
            }
        }
    },
    publicarOferta:function(oferta){
        for(let i = 0; i < this.subscribers.length; i++){
            if(typeof this.subscribers[i] === "function"){
                this.subscribers[i](oferta);
            }
        }
    },
    crear: function(objeto){
        for(let i in this){
            if(this.hasOwnProperty(i)){
                objeto[i] = this[i];
                objeto.subscribers = [];
            }
        }
    }
}

const udemy = {
    nuevoCurso: function(){
        const curso = "Un nuevo curso de JS";
        this.publicarOferta(curso);
    }
}

const facebook = {
    nuevoAnuncio: function(){
        const oferta = "Compra un celular";
        this.publicarOferta(oferta);
    }
}

observer.crear(udemy);
observer.crear(facebook);

const juan = {
    compartir: function(oferta){
        console.log("Excelente oferta de "+ oferta);
    }
}
const karen = {
    interesa: function(oferta){
        console.log("Me interesa la oferta de "+ oferta);
    }
}


udemy.obtenerOfertas(juan.compartir);
udemy.obtenerOfertas(karen.interesa);
udemy.nuevoCurso()
udemy.cancelarOfertas(karen.interesa)
udemy.nuevoCurso()
udemy.cancelarOfertas(juan.compartir);
udemy.nuevoCurso()

facebook.obtenerOfertas(juan.compartir);
facebook.nuevoAnuncio()
