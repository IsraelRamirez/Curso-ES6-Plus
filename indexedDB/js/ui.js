import {database} from "./app.js";
export class UI{
    static mostrarCitas(){
        let transaction = database.DB.transaction(database.dbName, "readwrite");
        let objectStore = transaction.objectStore(database.dbName);

        const title = document.getElementById("administra");
        const lista = document.getElementById("citas");
        
        lista.innerHTML = "";
        title.textContent = "Citas Pendientes";
        objectStore.openCursor().onsuccess = function(e){
            let cita = e.target.result;
            if(cita){

                const newCita = document.createElement("li");
                newCita.setAttribute("data-cita-id", cita.value.key);
                newCita.classList.add("list-group-item")
                newCita.innerHTML = `
                <p class="font-weight-bold">Mascota: <span class="font-weight-normal">${cita.value.name}</span></p>
                <p class="font-weight-bold">Dueño: <span class="font-weight-normal">${cita.value.owner}</span></p>
                <p class="font-weight-bold">Teléfono: <span class="font-weight-normal">${cita.value.phone}</span></p>
                <p class="font-weight-bold">Fecha: <span class="font-weight-normal">${cita.value.date}</span></p>
                <p class="font-weight-bold">Hora: <span class="font-weight-normal">${cita.value.hour}</span></p>
                <p class="font-weight-bold">Síntomas: <span class="font-weight-normal">${cita.value.sintomas}</span></p>
                <button class="btn btn-danger">Borrar Cita</butto>
                `
                lista.appendChild(newCita)
                cita.continue();
            }
            else{
                if(document.getElementById("citas").childNodes.length == 0){
                    const title = document.getElementById("administra");
                    const citas = document.getElementById("citas");

                    title.textContent = "Agregue una Nueva Cita";
                    citas.innerHTML = "<p>No hay citas ingresadas =(</p>"
                }
            }
        }
    }
}