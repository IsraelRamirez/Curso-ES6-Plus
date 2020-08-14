const Paciente = require("../models/Paciente")

exports.nuevoCliente = async (req, res, next)=>{
    if(req.body.nombre && req.body.propietario && req.body.fecha && req.body.hora && req.body.sintomas){
        const paciente = new Paciente(req.body)
        try{
            await paciente.save();
            res.json({mensaje: "El cliente se agregó correctamente"})
        }catch(error){
            console.log(error);
            next();
        }
    }
    else{
        res.json({mensaje: "No se pudo guardar el paciente, falta algun dato..."})
    }    
}

exports.getPacientes = async (req, res, next)=>{
    try{
        const pacientes = await Paciente.find({})
        res.json(pacientes)
    }
    catch(error){
        console.log(error);
        next()
    }
}

exports.getPaciente = async (req,res,next)=>{
    try{
        const paciente = await Paciente.findById(req.params.id)
        res.json(paciente)
    }catch(e){
        console.log(e);
        next()
    }
}

exports.updatePaciente = async (req, res, next)=>{
    try{
        const paciente = await Paciente.findOneAndUpdate({_id:req.params.id}, req.body, {
            new: true
        })
        res.json(paciente)
    }catch(e){
        console.log(e);
        next()
    }
}

exports.deletePaciente = async (req, res, next)=>{
    try{
        const paciente = await Paciente.findOneAndRemove({_id: req.params.id})
        res.json({paciente: paciente, mensaje: "Paciente eliminado"})
    }catch(e){
        console.log(e);
        next()
    }
}