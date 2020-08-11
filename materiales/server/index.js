const express = require("express");
const path = require("path")
const routes = require("./routes")
const configs = require("./config")
const bodyParser = require("body-parser")

const app = express();

app.set("view engine", "pug")
app.set("views", path.join(__dirname, "./views"))
require("dotenv").config({path: "variables.env"})
app.use(express.static("public"))

const config = configs[app.get("env")];

app.locals.titulo = config.nombresitio

app.use( (req, res, next)=>{
    const date = new Date()
    res.locals.fechaActual = date.getFullYear()
    res.locals.ruta = req.path
    return next()
})

app.use(bodyParser.urlencoded({extended: true}))

app.use("/", routes())

const host = process.env.HOST || "0.0.0.0"
const port = process.env.PORT || 3000

app.listen(port, host, ()=>{
    console.log("Servidor iniciado correctamento...");
});