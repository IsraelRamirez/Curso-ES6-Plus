class UI{
    constructor(){
        this.init();
    }

    init(){
        this.getMonedas();
    }

    getMonedas(){
        const api = new API("de2045a7708363c0d55690f7990bb82f10826b0602cf37767b42223e8dd2821a");
        api.getMonedas()
        .then(monedas => {
            for(let moneda in monedas){
                const newOption = document.createElement("option");
                newOption.value = monedas[moneda].Name;
                newOption.textContent = monedas[moneda].CoinName;
                document.getElementById("criptomoneda").appendChild(newOption);
            }
        });
    }

    getValue(money, cripto, name){
        const api = new API("de2045a7708363c0d55690f7990bb82f10826b0602cf37767b42223e8dd2821a");
        const response = document.getElementById("resultado");
        api.getValue(money, cripto)
        .then(moneda => {
            
            const date = new Date(moneda.RAW[cripto][money].LASTUPDATE *1000).toLocaleDateString("es-CL");
            response.innerHTML = `
            <div class="card bg-warning">
                <div class="card-body text-light">
                    <h2 class="card-title">Resultado</h2>
                    <p>El precio de ${name} a moneda ${money} es de: ${moneda.DISPLAY[cripto][money].PRICE}</p>
                    <p>Variación último día: % ${moneda.DISPLAY[cripto][money].CHANGEPCTDAY}</p>
                    <p>Última actualización: ${date}</p>
                </div>
            </div>
            `;
        })
    }

    /**
     * 
     * @param {String} msg 
     * @param {String} color 
     * @param {boolean} tmp 
     */
    static printMsg(msg, clases, tmp){
        if(document.querySelector(".mensajes").childElementCount)
            document.querySelector(".mensajes").firstChild.remove();
        const alerta = document.createElement("div");
        alerta.className = clases;
        alerta.textContent = msg;
        document.querySelector(".mensajes").appendChild(alerta);
        if(tmp){
            setTimeout(()=>{
                document.querySelector(".mensajes").firstChild.remove();
            },2000)
        }
    }

    loader(money, cripto, name){
        const response = document.getElementById("resultado");
        response.innerHTML = "";
        const spinner = document.querySelector(".contenido-spinner");
        spinner.style.display = "block";
        setTimeout(()=>{
            this.getValue(money, cripto, name)
            spinner.style.display = "none";
            
        },4000)
    }
}
