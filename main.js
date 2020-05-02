const {app, BrowserWindow} = require('electron')
const path = require('path')
const server2=require('./process/server.js')
const serve3 = require('./processkeyringsordrers/app.js')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 1000,
    resizable: true,
   // fullscreenable: true,
    slashes: true,
    
   
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

 mainWindow.loadFile('login.html')
//mainWindow.loadURL('http://localhost:2000');

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
  
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})

//Custom titlebar


/* new customTitlebar.Titlebar({
  backgroundColor: customTitlebar.Color.fromHex("#343a40")
}); */
