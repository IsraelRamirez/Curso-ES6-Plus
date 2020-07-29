/**
 * Calculo de fechas
 */
class date{
    /**
     * 
     * @param {Number} inicio 
     * @param {Number} fin 
     * @param {Number} diferencia 
     * @returns {Array}
     */
    static dateRange(inicio, fin, diferencia){
        return Array.from({ length: (fin - inicio) / diferencia + 1}, (_, i) => inicio + (i * diferencia))
    }
    /**
     * @returns {Array}
     */
    static dateArrayNowTo20(){
        return this.dateRange((new Date()).getFullYear(), (new Date()).getFullYear()-20, -1);
    }

    static NowYear(){
        return (new Date()).getFullYear();
    }
}

// Americano (Medio) - Basico - Año Actual = 2990
// 3% - menos por cada año de diferencia del actual
// Asiatico (Barato) - Europeo (Caro) // Diferencia +- 500
// Basico (Barato) - Completo(Caro) //Barato = 0; Completo += 300
// Standar = 2990 Medio Basico

/**
 * Calculo valor seguro
 */
class Seguro{
    static base = 2490;
    static cotizar(marca, ano, tipo){
        let cotiza = this.base;
        cotiza -= (((date.NowYear()-Number(ano))*0.03)*this.base);
        cotiza += ((Number(marca)-1)*500);
        if(tipo == "completo")
            cotiza += 300;
        return cotiza;
    }
}

export {date, Seguro};