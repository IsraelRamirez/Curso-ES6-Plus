import {UI} from "./models/ui.js";

function isEmpty(e){
    if(e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA"){
        UI.setInvalid(!UI.verified(e.target), e.target);
        if(e.target.id=="email" && e.target.value){
            isEmail(e.target);
        }
    }

    UI.validated(UI.isAllValid(document.querySelector("form"), document.querySelector("form").querySelectorAll("input, textarea").length), document.querySelector("form").querySelector("#enviar"));
}

function isEmail(e){
    
    if(e.value.includes("@")){
        const str = e.value.slice(e.value.indexOf("@"));
        if(str.includes("."))
            UI.setInvalid(false, e);
        else
            UI.setInvalid(true, e);
    }
    else{
        UI.setInvalid(true, e);
    }

}

function sendEmail(e){
    e.preventDefault();
    document.querySelector("#loaders").appendChild(UI.insertGif("spinner"));
    
    setTimeout(()=>{
        document.querySelector("form").querySelector("#spinner").remove();
        document.querySelector("form").querySelector("#loaders").appendChild(UI.insertGif("mail"));
        setTimeout(()=>{
            document.querySelector("form").querySelector("#mail").remove();
        }, 1500);
    }, 1500);

    UI.borrar();
}

function limpiarCampos(e){
    if(confirm("¿Está seguro de que sea borrar la información?"))
        UI.borrar();       
}

document.querySelector("form").addEventListener("focusout", isEmpty);
document.getElementById("enviar").addEventListener("click", sendEmail);
document.getElementById("resetBtn").addEventListener("click", limpiarCampos);