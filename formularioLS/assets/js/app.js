class Data{
    getTws(){
        const tweets = localStorage.getItem("tws");
        if(tweets)
            return JSON.parse(tweets);
        else
            return new Array();
    }
    /**
     * @param {Tweet} tw Nuevo Tweet 
     */
    setTws(tw){
        let tweets = localStorage.getItem("tws");
        if(!tweets){
            tweets = new Array(tw);
        }
        else{
            tweets = JSON.parse(tweets);
            tweets.push(tw);
        }
        localStorage.setItem("tws", JSON.stringify(tweets));
    }
    deleteTw(id){
        let tweets = localStorage.getItem("tws");
        tweets = JSON.parse(tweets);
        tweets.forEach((value, i) =>{
            if(value.id == id)
                tweets.splice(i, 1);
        })
        if(tweets.length>0){
            localStorage.setItem("tws", JSON.stringify(tweets));
        }
        else{
            localStorage.removeItem("tws");
        }
    }
    /**
     * Consigue la id del último elemento del LocalStorage
     * @returns {int} devuelve el id
     */
    getIdLastElement(){
        let id=0;
        let tweets = localStorage.getItem("tws");
        if(tweets){
            tweets = JSON.parse(tweets);
            console.log(tweets);
            id=tweets[tweets.length-1].id;
        }
        return id;
    }
}

class UI{
    
    listarTws(){
        const data = new Data();
        const lista = data.getTws();
        if(lista){
            lista.forEach((value, i) => {
                const nuevoTw = document.createElement("tr");
                nuevoTw.id = `tw-${value.id}`;
                nuevoTw.innerHTML=`
                <th scope="row">${i+1}</th>
                <td >${value.content}</td>
                <td><a class="borrar-tweet eliminar">X</a></td>
                `;
                document.getElementById("tbody-tweets").appendChild(nuevoTw);
            })
        }
        
    }
    /**
     * Ingresa un nuevo Tweet a la pagina
     * @param {Tweet} tw Nuevo Tweet
     */
    newTws(tw){
        const data = new Data();
        const nuevoTw = document.createElement("tr");
        
        nuevoTw.id = `tw-${tw.id}`;
        nuevoTw.innerHTML=`
        <th scope="row">${data.getTws().length+1}</th>
        <td >${tw.content}</td>
        <td><a class="borrar-tweet eliminar">X</a></td>
        `;
        document.getElementById("tbody-tweets").appendChild(nuevoTw);
    }
    deleteTw(element){
        const data = new Data();
        let newId = element.id.split("-")[1];
        element.remove();
        data.deleteTw(Number(newId));
    }
}

class Tweet{
    constructor(id, content){
        this.id = id;
        this.content = content;
    }
}

function nuevoTw(e){
    e.preventDefault();
    const content = document.getElementById("tweet").value;
    if(content){
        const tweet = new Tweet(data.getIdLastElement()+1, content);
        ui.newTws(tweet);
        data.setTws(tweet);
        document.getElementById("tweet").value = "";
    }
}

function eliminarTw(e){
    e.preventDefault();
    if(e.target.classList.contains("eliminar")){
        
        
        
        if(confirm("¿Está seguro que desea eliminar este Tweet?")){
            ui.deleteTw(e.target.parentElement.parentElement);
        }
    }
}

//localStorage.clear()

const ui = new UI();
const data = new Data();

ui.listarTws();

document.getElementById("formulario").addEventListener("submit", nuevoTw);
document.getElementById("tbody-tweets").addEventListener("click", eliminarTw);