import * as actionTypes from '../actions/actionTypes'

export const initialFooterMenus = [
    {
        name: '首页',
        url: 'home',
        isActive: true
    },
    {
        name: '发表',
        url: 'posted',
        isActive: false
    },
    {
        name: '消息',
        url: 'msg',
        isActive: false
    },
    {
        name: '我的',
        url: 'mine',
        isActive: false
    }
]


function footerMenus(menus = initialFooterMenus, action){
    switch(action.type){
        case actionTypes.TOGGLE_MENU:
            return menus.map((menu) => 
                {
                    if(menu.name === action.topicName){
                        return {...menu, isActive: true}
                    }
                    return {
                        ...menu,
                        isActive: false                    
                    }
                }
            )
        default:
            return menus;
    }
}

export default footerMenus