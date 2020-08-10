import '../css/style.scss'
const clientes = ["cliente 1", "cliente 2", "cliente 3", "cliente 5"]
let html = ""

clientes.forEach(cliente =>{
    html+= `<li> ${cliente} </li>`
})
document.getElementById("test").innerHTML = html

console.log("Desde inicio");