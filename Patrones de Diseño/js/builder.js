class Form {
    constructor(){
        this.campos = []
    }

    agregarCampo(tipo, text){
        let campos = this.campos;
        let campo; 

        switch(tipo){
            case "text":
                campo = new InputText(text);
                break;
            case "email":
                campo = new InputEmail(text);
                break;
            case "button":
                campo = new Button(text);
                break;
            default:
                throw new Error("Tipo no valido: "+ tipo)
        }
        campos.push(campo.crearElement());
    }

    obtenerFormulario(){
        let form = document.createElement("form"),
        campos = this.campos.length,
        campo;
        for(let i = 0; i< campos; i++){
            campo = this.campos[i];
            form.appendChild(campo);
            let br = document.createElement("br");
            form.appendChild(br);
        }

        return form;
    }
}

class Inputs{
    constructor(text){
        this.text = text;
    }
}

class InputText extends Inputs{
    constructor(text){
        super(text);
    }

    crearElement(){
        const inputText = document.createElement("input");
        inputText.setAttribute("type", "text");
        inputText.setAttribute("placeholder", this.text);
        return inputText;
    }
}

class InputEmail extends Inputs{
    constructor(text){
        super(text);
    }

    crearElement(){
        const inputEmail = document.createElement("input");
        inputEmail.setAttribute("type", "email");
        inputEmail.setAttribute("placeholder", this.text);
        return inputEmail;
    }
}

class Button extends Inputs{
    constructor(text){
        super(text);
    }

    crearElement(){
        const inputEmail = document.createElement("button");
        inputEmail.setAttribute("type", "submit");
        inputEmail.textContent =  this.text;
        return inputEmail;
    }
}


const form = new Form();

form.agregarCampo("text", "hola mundo")
form.agregarCampo("text", "hola 2")
form.agregarCampo("email", "hola email")
form.agregarCampo("button", "boton")

document.getElementById("test").appendChild(form.obtenerFormulario())