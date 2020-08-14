const {app, BrowserWindow}= require("electron")
const path = require("path")
const isDev = require("electron-is-dev")

let appWindow

function WindowApp() {
    appWindow = new BrowserWindow({
        width: 1400,
        height: 800,
        minHeight: 600,
        minWidth:1200,
        center:true,
        show:false
        //icon:'icon.png'
    })

    appWindow.loadURL(
        isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, "../build/index.html")}`
    )

    appWindow.once("ready-to-show", ()=>{
        appWindow.show()
    })
}

app.on("ready", WindowApp)

app.on("window-all-closed", ()=>{
    if(process.platform !== 'darwin'){
        app.quit();
    }
})

app.on("activate", ()=>{
    if(appWindow === null){
        WindowApp()
    }
})