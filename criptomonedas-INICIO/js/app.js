const ui = new UI();
document.getElementById("formulario").addEventListener("submit", (e) =>{
    e.preventDefault();
    
    const moneda = document.getElementById("moneda").value, cripto = document.getElementById("criptomoneda").value, name= document.querySelector("#criptomoneda")[document.querySelector("#criptomoneda").selectedIndex].textContent;
    
    if(moneda && cripto){
        ui.loader(moneda, cripto, name);
    }
    else{
        UI.printMsg("Se debe ingresar todos los cambos","alert bg-danger text-center",true);
    }
})