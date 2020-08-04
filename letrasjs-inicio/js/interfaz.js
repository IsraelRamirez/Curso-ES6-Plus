import {apiSeedsMusic} from "./api.js";
class UI{
    static deleteAlertIfExist(){
        const alert = document.getElementById("error");
        if(alert)
            alert.remove();
    }

    static printAlert(msg, time = 3000){
        const alert = document.createElement("div");
        alert.id = "error";
        alert.className = "error";
        alert.textContent = msg;

        document.getElementById("mensajes").appendChild(alert);

        setTimeout(()=>{
            this.deleteAlertIfExist();
        },time)
    }

    static getLyrics(artista, cancion){
        apiSeedsMusic.sendRequest(artista, cancion)
        .then(Response => {
            
            if(Response.error){
                this.deleteAlertIfExist()
                this.printAlert("No se ha encontrado la música o el autor ingresado... Verifique que se haya ingresado correctamente...", 10000)
                this.mostrarLyrics();
            }
            else{
                this.deleteAlertIfExist()
                this.mostrarLyrics(Response.result.artist.name,Response.result.track.name,Response.result.track.text)
            }
        })
    }

    static mostrarLyrics(artista="", cancion ="", letras=""){
        document.getElementById("resultado").innerHTML = 
        `
        <h2>${cancion} - ${artista}</h2>
        <p class = "contenido">${letras}</p>
        `
    }
}

export {UI};