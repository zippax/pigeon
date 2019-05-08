const {app, BrowserWindow} = require('electron')

let mainWindow
function createWindow () {
  const screen = require('electron').screen
  const display = screen.getPrimaryDisplay()
  const area = display.workArea
  mainWindow = new BrowserWindow({
    width: area.width,
    height: area.height,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    // mainWindow = null
    app.quit()
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})
