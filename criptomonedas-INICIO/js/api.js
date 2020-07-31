class API{
    constructor(apikey){
        this.apikey = apikey;
    }

    async getMonedas(){
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;
        const monedas = await fetch(url)
        .then(Response => Response.json())
        .then(cripto => {return cripto.Data})
        .catch(err => {console.log(err)})

        return await monedas;
    }

    async getValue(money, cripto){
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${money}&api_key=${this.apikey}`;

        const value = await fetch(url)
        .then(Response => Response.json())
        .then(val => val)

        return await value;
    }
}