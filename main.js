const {app, BrowserWindow} = require('electron');
var os = require('os');
const autoUpdater = require('electron').autoUpdater;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
      height: 600,
      width: 800
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');
});


var platform = os.platform() + '_' + os.arch();
var version = app.getVersion();


autoUpdater.setFeedURL('http://localhost:5000/update/'+platform+'/'+version);

autoUpdater.on('update-availabe', () => {
    console.log('update available')
})
autoUpdater.on('checking-for-update', () => {
  console.log('checking-for-update')
})
autoUpdater.on('update-not-available', () => {
  console.log('update-not-available')
})
autoUpdater.on('update-downloaded', (e) => {
  console.log(e)
  alert("Install?")
    autoUpdater.quitAndInstall()
})
autoUpdater.checkForUpdates()