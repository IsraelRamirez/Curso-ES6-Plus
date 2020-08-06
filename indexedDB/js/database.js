import {UI} from "./ui.js";
export class indexDB{
    /**
     * Inicializa la conexion la base de datos
     * @param {String} dbName 
     */
    constructor(dbName){
        this.dbName = dbName;
        this.dbConnection = indexedDB.open(dbName);
        this.dbConnection.onerror = ()=>{this.alerta("Hubo un error en la conexión/creación de base de datos...")}
        this.dbConnection.onsuccess = ()=>{
            this.DB = this.dbConnection.result;
            this.init(dbName);
            UI.mostrarCitas()
        }        
    }
    /**
     * Elimina la base de datos
     */
    deconstructor(){
        indexedDB.deleteDatabase(this.dbName);
    }
    init(dbName){
        this.dbConnection.onupgradeneeded = function (e){
            let db = e.target.result
            let objectStore = db.createObjectStore(dbName, { keyPath: "key", autoIncrement: true});

            objectStore.createIndex("name", "name", { unique: false });
            objectStore.createIndex("owner", "owner", { unique: false });
            objectStore.createIndex("phone", "phone", { unique: false });
            objectStore.createIndex("date", "date", { unique: false });
            objectStore.createIndex("hour", "hour", { unique: false });
            objectStore.createIndex("sintomas", "sintomas", { unique: false });
        }
    }
    newCita(cita){
        
        let transaction = this.DB.transaction(this.dbName, "readwrite");
        let objectStore = transaction.objectStore(this.dbName);
        
        let peticion = objectStore.add(cita);
        peticion.onsuccess = ()=>{
            document.querySelector("form").reset();
        }
    }
    async getAllCitas(){
        let transaction = this.DB.transaction(this.dbName, "readwrite");
        let objectStore = transaction.objectStore(this.dbName);
        const resultados = Array();
        objectStore.openCursor().onsuccess = await function(e){
            let cursor = e.target.result;
            if(cursor){
                
                resultados.push(cursor.value)
                cursor.continue();
            }
        }
        return resultados;
    }

    removeCita(id){
        let transaction = this.DB.transaction([this.dbName], "readwrite");
        let objectStore = transaction.objectStore(this.dbName);
        let objectStoreRequest = objectStore.delete(Number(id));
        objectStoreRequest.onsuccess= function(e){
            UI.mostrarCitas();
        }
    }

    alerta(mensaje){
        console.log(mensaje);
    }
}