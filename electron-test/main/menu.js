// 引入Menu
const { Menu } = require('electron')

var menuTemplate = [
    {
        // 菜单名称
        label: '凤来怡洗浴会所',
        // 子菜单，菜单项
        submenu: [
            { label: '精品SPA' },
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