// 引入electron模块
var electron = require('electron')
// 创建electron引用
var app = electron.app
// 创建窗口引用
var BrowserWindow = electron.BrowserWindow

// 声明要打开的主窗口
var mainWindow = null;
app.on('ready', () => {
    // 设置打开的窗口大小
    mainWindow = new BrowserWindow({
        width: 666,
        height: 666,
        // 开启node的所有功能
        webPreferences: {
            nodeIntegration: true, enableRemoteModule: true
        }
    })
    // 直接开启调试模式
    mainWindow.webContents.openDevTools()
    // 加载菜单
    require("./main/menu.js")
    // 加载那个页面, 这个相当于是主页面
    mainWindow.loadFile('index.html')
    // 监听关闭事件，把主窗口设置为null
    mainWindow.on('closed', () => {
        mainWindow = null
    })
})