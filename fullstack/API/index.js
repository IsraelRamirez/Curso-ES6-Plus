const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")
const bodyParser = require("body-parser")
const cors = require("cors")
// Crear server
const app = express();

const whilelist = ["http://localhost:3000"]
const corsOption = {
    origin: (origin, callback) =>{
        const existe = whilelist.some(dominio => dominio === origin);
        if(existe)
            callback(null, true)
        else
            callback(new Error("No Permitido por CORS"))
    }
}
//app.use(cors(corsOption))
app.use(cors())
// Conectar mongoDB

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/veterinaria",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use("/", routes())
// Puerto
app.listen(4000, ()=>{
    console.log("Server Online");
})