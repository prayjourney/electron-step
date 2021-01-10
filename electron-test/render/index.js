// 在main.js之中开启node功能才能起作用
var fs = require('fs')

window.onload = function () {
    var btn = this.document.querySelector('#btn')
    var mybaby = this.document.querySelector('#mybaby')
    btn.onclick = function(){
        fs.readFile('xiaojiejie.txt',(err,data)=>{
            mybaby.innerHTML = data
        })
    }
}

