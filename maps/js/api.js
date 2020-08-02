class ApiGov{
    static async getGasolineras(){
        const gasolineras = await fetch("https://api.datos.gob.mx/v1/precio.gasolina.publico")
        .then(Response => Response.json())
        .then(Results => Results.results)
        .catch(err => {console.log("Ha ocurrido un error con la API del Govierno de Mx...");})
        return await gasolineras;
    }
}