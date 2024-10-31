const { app, BrowserWindow } = require('electron')
function createWindow () {
  const win = new BrowserWindow({
    width: 350,
    height: 700,
    titleBarStyle: 'hidden',
    transparent: true,
    resizable: true
  })

  win.loadFile('index.html')
  win.setAlwaysOnTop(true, "pop-up-menu")
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

