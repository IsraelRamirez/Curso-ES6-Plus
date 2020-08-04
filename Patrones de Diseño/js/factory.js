function constructorSitios(){
    this.crearElemento = function(text, tipo){
        let html;
        if(tipo === "input")
            html = new InputHTML(text)
        else if(tipo === "img")
            html = new ImagenHTML(text)
        else if(tipo === "h1")
            html = new HeadingHTML(text)
        else if(tipo === "p")
            html = new ParrafoHTML(text)
        html.tipo = tipo
        html.mostrar = function(){
            const element = document.createElement(this.tipo);

            if(this.tipo === "input")
                element.setAttribute("placeholder", this.text)
            else if(this.tipo === "img")
                element.setAttribute("src", this.text);
            else if(this.tipo === "h1")
                element.textContent = this.text;
            else if(this.tipo === "p")
                element.textContent = this.text;

            document.getElementById("test").appendChild(element);
        }
        return html;
    }
}

const InputHTML = function(text){
    this.text = text;
}
const ImagenHTML = function(text){
    this.text = text;
}
const HeadingHTML = function(text){
    this.text = text;
}
const ParrafoHTML = function(text){
    this.text = text;
}
const elementosWeb = [];

const sitioweb = new constructorSitios();

elementosWeb.push(sitioweb.crearElemento("Ingresar Dato", "input"))
elementosWeb.push(sitioweb.crearElemento("js/imagenes.png", "img"))
elementosWeb.push(sitioweb.crearElemento("Bienvendios", "h1"))
elementosWeb.push(sitioweb.crearElemento("Hola a todos", "p"))

elementosWeb.forEach(element=>{
    element.mostrar()
})

console.log(elementosWeb)