// 在main.js之中开启node功能才能起作用
var fs = require('fs')

window.onload = function () {
    var btn = this.document.querySelector('#btn')
    var mybaby = this.document.querySelector('#mybaby')
    btn.onclick = function () {
        fs.readFile('xiaojiejie.txt', (err, data) => {
            mybaby.innerHTML = data
        })
    }

    // 在子进程之中使用remote的功能，下面是要创建一个新的页面
    let createBtn = this.document.querySelector('#createWindow')
    let BrowserWindow = require('electron').remote.BrowserWindow
    createBtn.onclick = () => {
        let newWin = new BrowserWindow({
            width: 500,
            height: 500,
        })
        newWin.loadFile('views/newWindow.html')
        // 监听关闭事件, 关闭之后销毁窗口, 防止占用太多内存
        newWin.on('closed', () => { newWin = null })
    }

}

