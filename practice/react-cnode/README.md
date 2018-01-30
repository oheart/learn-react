## react-cnode

## 注意点
1. webpack-dev-server搭建环境（开发／生产），proxy实现访问cnode社区的接口请求。  
[cnode-API](https://cnodejs.org/api)
2. tab切换选中  
头部和底部tab切换原来用的redux方式，因为用store控制选中状态当重新刷新页面,store就初始化了，后来改为router方式控制选项卡切换
3. (React router 4 does not update view on link, but does on refresh )[https://stackoverflow.com/questions/43895805/react-router-4-does-not-update-view-on-link-but-does-on-refresh/44565602]
