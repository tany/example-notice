// アプリケーション作成用のモジュールを読み込み
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
  
const path = require('path');
const url = require('url');
  
// メインウィンドウ
let mainWindow;
  
function createWindow () {
  // メインウィンドウを作成します
  //mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow = new BrowserWindow({width: 980, height: 800, 'node-integration': false});
  
  // メインウィンドウに表示するURLを指定します
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));
  
  // デベロッパーツールの起動
  mainWindow.webContents.openDevTools();
  
  // メインウィンドウが閉じられたときの処理
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}
  
//  初期化が完了した時の処理
app.on('ready', createWindow);
  
// 全てのウィンドウが閉じたときの処理
app.on('window-all-closed', function () {
  // macOSのとき以外はアプリケーションを終了させます
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// アプリケーションがアクティブになった時の処理(Macだと、Dockがクリックされた時）
app.on('activate', function () {
  /// メインウィンドウが消えている場合は再度メインウィンドウを作成する
  if (mainWindow === null) {
    createWindow();
  }
});
