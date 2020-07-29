import {UI} from "./models/ui.js";
import {date, Seguro} from "./models/utils.js";

function selectMarca(e){
    UI.activeForm(UI.isValid(e.target), document.querySelector("form").querySelector("button"));
}

function selecTipo(e){
    UI.changeCheck(e.target);
}

function name(elements, value){
    for(let e of elements){
        if(e.value == value)
            return e.textContent;
    }
}

function sendForm(e){
    e.preventDefault();
    let marca = document.getElementById("marca").value, marcaName = name(document.getElementById("marca"), marca) ,ano = document.getElementById("anio").value, tipo = document.querySelector("fieldset").querySelector("input[checked]").value;
    console.log(marcaName)
    if(marca && ano && (tipo == "basico" || tipo == "completo")){
        UI.loaders(marca, marcaName, ano, tipo);        
    }
    else{
        alert("Ha ocurrido un error, se recomienda intentarlo más tarde...");
    }
}

document.getElementById("marca").addEventListener("change", selectMarca);
document.querySelector("form").querySelector("fieldset").addEventListener("change", selecTipo)
document.querySelector("form").querySelector("button").addEventListener("click", sendForm)

UI.displayYears();