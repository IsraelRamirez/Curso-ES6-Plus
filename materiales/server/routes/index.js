const express = require("express")
const router = express.Router();

const nosotrosController = require("../controllers/nosotrosController")
const homeController = require("../controllers/homeController")
const testimonialesController = require("../controllers/testimonialesController")
const viajesController = require("../controllers/viajesController")


module.exports = function(){
    router.get("/", homeController.infoHome)
    router.get("/nosotros", nosotrosController.infoNosotros)
    router.get("/viajes",viajesController.allViajes)
    router.get("/viajes/:id",viajesController.getViaje)
    router.post("/testimoniales", testimonialesController.postTestimoniales)
    router.get("/testimoniales", testimonialesController.getTestimoniales)
    
    return router;
}