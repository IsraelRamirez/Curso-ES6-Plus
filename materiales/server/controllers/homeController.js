const Viajes = require("../models/Viajes")
const Testimoniales = require("../models/Testimoniales")
exports.infoHome = async (req, res)=>{
    
    const viajes = await Viajes.findAll({
            limit: 3
        })
    
    const testimoniales = await Testimoniales.findAll({
            limit: 3
        })
    
    res.render("index",{
        clase: "home",
        pagina: "Inicio",
        viajes,
        testimoniales
    })
}