export default function calcularTotal(cantidad, plazo){
    let tax;
    if(cantidad <= 1000)
        tax = 0.25
    else if(cantidad <= 5000)
        tax = 0.2
    else if(cantidad <= 10000)
        tax = 0.15
    else
        tax = 0.1

    let total = cantidad * tax
    let totalPlazo;

    if(plazo === 3)
        totalPlazo = cantidad*0.05
    else if(plazo === 6)
        totalPlazo = cantidad*0.1
    else if(plazo === 12)
        totalPlazo = cantidad*0.15
    else if(plazo === 24)
        totalPlazo = cantidad*0.2
    
    return total + totalPlazo + cantidad

}

