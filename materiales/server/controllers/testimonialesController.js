const Testimoniales = require("../models/Testimoniales")

const getTestimoniales = async ()=>{
    return await Testimoniales.findAll()
}
exports.postTestimoniales = async (req, res)=>{
    const testimoniales = await getTestimoniales()
    const {nombre, email, mensaje} = req.body
    let errores = [];
    if(!nombre)
        errores.push({"mensaje": "Agrega tu Nombre"})
    if(!email)
        errores.push({"mensaje": "Agrega tu Correo"})
    if(!mensaje)
        errores.push({"mensaje": "Agrega tu Mensaje"})
    
    if(errores.length>0){
        res.render("testimoniales",{
            pagina: "Testimoniales",
            testimoniales,
            errores,
            nombre,
            email,
            mensaje
        })
    }
    else{
        const insert = await Testimoniales.create({
            nombre,
            correo: email,
            mensaje
        })
        res.redirect("/testimoniales")
    }
}

exports.getTestimoniales = async (req, res)=>{
    const testimoniales = await Testimoniales.findAll()
    res.render("testimoniales",{
        pagina: "Testimoniales",
        testimoniales
    })
}