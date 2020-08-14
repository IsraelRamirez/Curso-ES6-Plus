const {app, BrowserWindow} = require('electron')

let appWindow;
function windowApp(){
    appWindow = new BrowserWindow({
        
        icon:'icon.png',
        width: 1400,
        height: 800,
        minHeight: 600,
        minWidth:1200,
        center:true,
        show:false
    })

    appWindow.on('closed', ()=>{
        appWindow = null
    })

    appWindow.loadFile('index.html')

    appWindow.once('ready-to-show', ()=>{
        appWindow.show()
    })
}

app.on('ready', windowApp)