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
console.log(platform);
console.log(version);

autoUpdater.setFeedURL('http://localhost:5000/update/'+platform+'/'+version);