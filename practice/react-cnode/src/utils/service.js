let BaseURL = 'url';
let Service = {
    /**
     * 登录
     * email 邮箱账号 string类型
     * password 密码 string类型
     */
    login :BaseURL + "/signin",

    /**
     * 本地数据存储或读取
     * 
     *  key 键名
     *  value 值
     */
    localItem: function (key, value) {
        if (arguments.length == 1) {
            return localStorage.getItem(key);
        } else {
            return localStorage.setItem(key, value);
        }
    },
    
    /**
     * 删除本地数据
     * 
     * key 键名
     * value 值
     */
    removeLocalItem: function (key) {
        if (key) {
            return localStorage.removeItem(key);
        }
        return localStorage.removeItem();
    },
    /**
     * 清空localStorage存储的所有数据
     */
    clearLocalStorage: function(){
        return localStorage.clear();
    },

    /**
     * 格式化时间
     * 
     */
    formatDate: function (str) {
        var date = new Date(str);
        var time = new Date().getTime() - date.getTime(); //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
        if (time < 0) {
            return '';
        } else if (time / 1000 < 60) {
            return '刚刚';
        } else if ((time / 60000) < 60) {
            return parseInt((time / 60000)) + '分钟前';
        } else if ((time / 3600000) < 24) {
            return parseInt(time / 3600000) + '小时前';
        } else if ((time / 86400000) < 31) {
            return parseInt(time / 86400000) + '天前';
        } else if ((time / 2592000000) < 12) {
            return parseInt(time / 2592000000) + '月前';
        } else {
            return parseInt(time / 31536000000) + '年前';
        }
    }

};


export default Service;
