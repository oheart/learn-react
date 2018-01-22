import * as actionTypes from '../actions/actionTypes'

export const initialHeaderMenus = [
    {
        name: '全部',
        url: 'all',
        isActive: true
    },
    {
        name: '精华',
        url: 'good',
        isActive: false
    },
    {
        name: '分享',
        url: 'share',
        isActive: false
    },
    {
        name: '问答',
        url: 'ask',
        isActive: false
    },
    {
        name: '招聘',
        url: 'job',
        isActive: false
    }
   
]


function headerMenus(menus = initialHeaderMenus, action){
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

export default headerMenus
