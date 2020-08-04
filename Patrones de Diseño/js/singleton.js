const alumnos ={
    listaAlumnos: [],

    get: function(id){
        this.listaAlumnos[id];
    },

    crear: function(dato){
        this.listaAlumnos.push(dato)
    },
    listado: function(){
        return this.listaAlumnos;
    }
}

const infoAlumno = {
    nombre: "juan",
    edad:20
}

const infoAlumno2 = {
    nombre: "Isra",
    edad: 23
}

alumnos.crear(infoAlumno);
alumnos.crear(infoAlumno2);
