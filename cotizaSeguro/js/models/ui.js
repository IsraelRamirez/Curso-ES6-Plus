import {date, Seguro} from "./utils.js";
class UI{
    static displayYears(){
        const years = date.dateArrayNowTo20();
        years.forEach((year) =>{
            const newYear = document.createElement("option");
            newYear.value = year;
            newYear.textContent = year;
            document.getElementById("anio").appendChild(newYear);
        })
    }
    /**
     * 
     * @param {HTMLSelectElement} element 
     * @returns {boolean}
     */
    static isValid(element){
        if(element.value)
            return true;
        return false;
    }
    /**
     * 
     * @param {boolean} bool 
     * @param {HTMLButtonElement} element
     */
    static activeForm(bool, element){
        if(bool){
            if(element.disabled)
                element.removeAttribute("disabled");
        }
        else{
            if(!element.disabled)
                element.setAttribute("disabled", "");
        }
    }
    /**
     * 
     * @param {HTMLInputElement} element 
     */
    static changeCheck(element){
        document.querySelector("form").querySelector("fieldset").querySelector("input[checked]").removeAttribute("checked");
        
        element.setAttribute("checked", "");
    }

    static loaders(marca, marcaName, ano, tipo){
        const alerta = document.createElement("div");
        alerta.id = "carga";
        alerta.className = "alert alert-success";
        alerta.textContent = "Cotizando...";
        const cotizacion = this.cotizacion(marca, marcaName,ano, tipo);
        if(document.getElementById("result"))
            document.getElementById("result").remove();

        document.getElementById("cotizar-seguro").before(alerta);
        document.querySelector("#cargando img").style.display = "block";
        setTimeout(()=>{
            document.getElementById("carga").remove();
            document.querySelector("#cargando img").style.display = "none";

            document.getElementById("resultado").appendChild(cotizacion);
        }, 1500)
    }

    static cotizacion(marca, marcaName, ano, tipo){
        const alerta = document.createElement("div");
        alerta.id = "result";
        alerta.className = "alert alert-success";
        alerta.innerHTML = `<p><b>Marca: <b> ${marcaName}<p>
                            <p><b>Año: <b> ${ano}<p>
                            <p><b>Tipo: <b> ${tipo}<p>
                            <p><b>Costo Seguro: $<b> ${Seguro.cotizar(marca, ano, tipo)}<p>
                            `;
        return alerta;
    }
}
export {UI};