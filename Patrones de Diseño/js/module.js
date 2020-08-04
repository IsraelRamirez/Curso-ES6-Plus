const comprarBoleto = (()=>{
    //Private
    let event = "Conferencia JS 2020";
    let price = 200;

    const boleto = ()=>{
        const element = document.createElement("p");
        element.textContent = `Lmao ${event};`
        document.getElementById("test").appendChild(element)
    }
    //Public
    return{
        mostrarBoleto: ()=>{
            boleto();
        }
    }
})();

comprarBoleto.mostrarBoleto();