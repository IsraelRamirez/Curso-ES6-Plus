import {indexDB} from "./database.js"
import {verified} from "./input.js";
import { UI } from "./ui.js";
export let database;
document.addEventListener("DOMContentLoaded", ()=>{
    database = new indexDB("agendaCitas", 1);    
})

document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault();

    const cita ={
        name: document.querySelector("#mascota").value,
        owner: document.querySelector("#cliente").value,
        phone: document.querySelector("#telefono").value,
        date: document.querySelector("#fecha").value,
        hour: document.querySelector("#hora").value,
        sintomas: document.querySelector("#sintomas").value,
    } 

    if(verified(cita)){
        database.newCita(cita);
        UI.mostrarCitas()
    }
    else{
        alert("Faltan datos por ingresar...")
    }
})
document.querySelector("#citas").addEventListener("click", (e)=>{
    e.preventDefault();
    if(e.target.tagName.includes("BUTTON")){
        database.removeCita( e.target.parentNode.getAttributeNode("data-cita-id").value)
    }
})