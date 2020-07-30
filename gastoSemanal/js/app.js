import {Presupuesto, Saldo} from "./models/presupuesto.js";
import {UI} from "./models/ui.js";
import {Producto} from "./models/lista.js";

/**Eventos */
document.getElementById("agregar-gasto").querySelector("button").addEventListener("click", agregarLista)
document.getElementById("gastos").addEventListener("click", eliminarLista);
/**Funciones */
function agregarLista(e){
    e.preventDefault();
    const nombre = document.getElementById("agregar-gasto").querySelector("#gasto").value;
    const costo = Number(document.getElementById("agregar-gasto").querySelector("#cantidad").value);
    if(costo && nombre){
        if(costo>=0){
            if(lista.length>0){
                lista.push(new Producto(lista[lista.length-1].id + 1, nombre, costo));
            }
            else{
                lista.push(new Producto(0, nombre, costo));
            }

            UI.insertNewProducto(lista[lista.length-1]);
            const tmpSaldo = Saldo.getSaldoActual(saldo.saldo, lista);
            UI.setSaldoActual(tmpSaldo);
            UI.setColorSA(Saldo.getPercent(saldo.saldo, tmpSaldo));

        }
        else{
            alert("No es posible agregar un costo negativo...")
        }
    }
    else{
        alert("Es necesario ingresar ambos datos...")
    }
}
function eliminarLista(e){
    e.preventDefault();
    if(e.target.tagName === "BUTTON"){
        const id = Number(e.target.parentElement.parentElement.id);
        e.target.parentElement.parentElement.remove();
        Saldo.eliminarElement(id, lista);
        const tmpSaldo = Saldo.getSaldoActual(saldo.saldo, lista);
        UI.setSaldoActual(tmpSaldo);
        UI.setColorSA(Saldo.getPercent(saldo.saldo, tmpSaldo));
    }
}


/** Comprobación */
const saldo = new Presupuesto();
saldo.saldo = Number(prompt("¿Cuál es su presupuesto inicial?", "1"));

UI.setSaldoInicial(saldo.saldo);

const lista = new Array();