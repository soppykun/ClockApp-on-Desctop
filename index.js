// Electronのモジュール
const electron = require("electron");

// アプリケーションをコントロールするモジュール
const app = electron.app;

// ウィンドウを作成するモジュール
const BrowserWindow = electron.BrowserWindow;

// メインウィンドウはGCされないようにグローバル宣言
let mainWindow;

// 全てのウィンドウが閉じたら終了
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// Electronの初期化完了後に実行
app.on('ready', function() {
  // メイン画面の表示。ウィンドウの幅、高さを指定できる
  mainWindow = new BrowserWindow({
    'width': 310,
    'height': 310,
    'transparent': true,//透明化
    'frame': false,//フレーム
    'resizable': false,
    'x': 1300, //位置(横方向)
    'y': 400, //位置(縦方向)
    'alwaysOnTop': false, //いつもトップに表示
    'skipTaskbar': true,//タスクバー削除
    'icon': ("blocks.ico")
    
    });
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // ウィンドウが閉じられたらアプリも終了
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});