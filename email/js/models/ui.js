class UI{
    /**
     * Verifica si el campo está vacío
     * @param {HTMLInputElement} element 
     * @returns {boolean}
     */
    static verified(element){
        if(element.value)
            return true;
        else
            return false;
    }
    /**
     * Se ingresa/elimna la clase invalid
     * @param {boolean} bool 
     * @param {HTMLInputElement} element
     */
    static setInvalid(bool, element){
        
        if(bool){
            if(!element.classList.contains("invalid")){
                if(!element.classList.contains("valid"))
                    element.className += " invalid";
                else
                element.className = element.className.replace("valid", "invalid");
            }
        } 
        else{
            if(element.classList.contains("invalid")){
                if(!element.classList.contains("valid"))
                    element.className = element.className.replace("invalid", "valid");
            }
            else{
                element.classList.add("valid");
            }
        }
    }
    /**
     * Verifica que todos los campos estén validados
     * @param {HTMLFormElement} element 
     * @param {Number} inputs
     * @returns {boolean} 
     */
    static isAllValid(element, inputs){
        if(element.querySelectorAll(".invalid").length>0)
            return false;
        if(element.querySelectorAll(".valid").length==inputs)
            return true;
        return false;
    }
    /**
     * Activa o desactiva el boton element
     * @param {boolean} bool 
     * @param {HTMLButtonElement} element 
     */
    static validated(bool, element){
        if(bool){
            if(element.classList.contains("disabled"))
                element.classList.remove("disabled");
        }
        else{
            if(!element.classList.contains("disabled"))
                element.classList.add("disabled");
        }
    }

    /**
     * Ingresa el gif
     * @param {String} name 
     */
    static insertGif(name){
        const element = document.createElement("img");
        element.src = `img/${name}.gif`;
        element.width = "150";
        element.id=`${name}`;
        return element;
    }

    static borrar(){
        document.getElementById("email").value = null;
        document.getElementById("email").nextElementSibling.classList.remove("active");
        this.setInvalid(true, document.getElementById("email"));
        document.getElementById("asunto").value = null;
        document.getElementById("asunto").nextElementSibling.classList.remove("active");
        this.setInvalid(true, document.getElementById("asunto"));
        document.getElementById("mensaje").value = null;
        document.getElementById("mensaje").nextElementSibling.classList.remove("active");
        this.setInvalid(true, document.getElementById("mensaje"));
        document.getElementById("email").nextElementSibling.classList.remove("active");
        document.getElementById("enviar").classList.add("disabled");
    }

}

export {UI};