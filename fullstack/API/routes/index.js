const express = require("express")
const router = express.Router()
const pacienteController = require("../controllers/pacienteController")

module.exports = function(){

    router.post("/pacientes", pacienteController.nuevoCliente)
    router.get("/pacientes", pacienteController.getPacientes)
    router.get("/pacientes/:id", pacienteController.getPaciente)
    router.put("/pacientes/:id", pacienteController.updatePaciente)
    router.delete("/pacientes/:id", pacienteController.deletePaciente)
    return router
}