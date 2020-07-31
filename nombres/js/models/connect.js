class ApiConnection{
    basePath = "https://randomuser.me/api/?inc=name";
    genero = ""
    pais = ""
    cantidad = ""
    constructor(genero, pais, cantidad){
        if(genero){
            this.genero = `&gender=${genero}`
        }
        if(pais){
            this.pais = `&nat=${pais}`
        }
        this.cantidad = `&results=${cantidad}`
    }

    async getRequest(){
        const fullPath = `${this.basePath}${this.cantidad}${this.pais}${this.genero}`;
        
        const data = await fetch(fullPath)
        .then((Response)=>Response.json())
        .then((results)=>results.results)
        .then((nombres) => nombres)
        .catch(error => error);
        return data;
    }
}

export {ApiConnection};