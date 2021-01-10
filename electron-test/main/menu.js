// menu菜单是在主线程之中的！！！
// 引入Menu, BrowserWindow, 这个其实就是按需引入
const { Menu, BrowserWindow } = require('electron')

var menuTemplate = [
    {
        // 菜单名称
        label: '凤来怡洗浴会所',
        // 子菜单，菜单项
        submenu: [
            {
                label: '精品SPA',
                // 主要代码--------------start
                click: () => {
                    win = new BrowserWindow({
                        width: 500,
                        height: 500,
                        webPreferences: { nodeIntegration: true }
                    })
                    win.loadFile('views/newWindow.html')
                    win.on('closed', () => {
                        win = null
                    })
                }
                // 主要代码--------------end
            },
            { label: '泰式按摩' }
        ]

    },
    {
        label: '大浪淘沙洗浴中心',
        submenu: [
            { label: '牛奶玫瑰浴' },
            { label: '爱情拍拍手' }
        ]
    }
]

// 构建menu模板
var menus = Menu.buildFromTemplate(menuTemplate)
// 设置menu
Menu.setApplicationMenu(menus)