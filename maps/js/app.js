const ui = new UI();
document.addEventListener("DOMContentLoaded", ()=>{
    ui.setAllMarkers();
})

document.getElementById("buscar").querySelector("input").addEventListener("input", (e)=>{
    
    ui.getSugerencias(e.target.value);
})

