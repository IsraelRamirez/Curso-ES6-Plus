// Eliminar de Local Storage
// localStorage.clear();

let newElement = document.createElement("a")

newElement.className = "enlace";
newElement.setAttribute("href", "#");
newElement.textContent = "Hola, nuevo enlace";
document.getElementById("secundaria").appendChild(newElement);
//console.log(sec);