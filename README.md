# Vue 3 + TypeScript + Vite

# 项目运行
```
开发所使用npm 版本：18.17.1
npm install //安装依赖
npm run dev //运行项目
npm run build //打包项目
```

# 项目结构
```
│  .env //全局环境变量，配置api接口地址和站点名称
│  auto-imports.d.ts //ui框架自动导入声明文件
│  components.d.ts //组件声明文件
│  index.html //入口html
│  list.txt
│  package-lock.json
│  package.json
│  postcss.config.js //postcss配置文件
│  README.md
│  tailwind.config.js //tailwindcss配置文件
│  tsconfig.json //ts配置文件
│  tsconfig.node.json //node环境下ts配置文件
│  vite.config.ts //vite配置文件
│           
├─public //静态资源目录
│  │  
│  ├─img //图片资源
│  │      
│  └─stockPro //股票趋势图内嵌网页
│     
│                              
└─src
    │  App.vue //根组件
    │  main.ts //入口文件
    │  vite-env.d.ts //vite环境变量声明文件
    │  
    ├─api
    │  │  fetchNews.ts //获取新闻列表接口
    │  │  getCaptcha.ts //获取验证码接口
    │  │  getHangQingData.ts //获取行情数据接口
    │  │  getRecomended.ts //获取推荐股票接口
    │  │  getWeekNews.ts //获取新闻接口
    │  │  stockUser.ts //获取用户信息接口
    │  │  
    │  └─interface //接口声明文件
    │          index.ts
    │          
    ├─assets //静态资源
    │      
    ├─components //组件
    │  │  topBar.vue //顶部导航栏
    │  │  
    │  ├─loginDialog //登录注册弹窗
    │  │  │  index.vue //弹窗组件
    │  │  │  loginModal.ts //登录弹窗逻辑
    │  │  │  
    │  │  └─components //弹窗内组件
    │  │          loginForm.vue //登录表单
    │  │          registerForm.vue //注册表单
    │  │          
    │  ├─noLoginDialog //未登录弹窗
    │  │      index.vue //弹窗组件
    │  │      
    │  └─profileDialog //个人信息弹窗
    │      │  index.vue //弹窗组件
    │      │  
    │      └─components //弹窗内组件
    │              profileForm.vue //个人信息表单
    │              
    ├─router //路由
    │      index.ts //路由配置文件
    │      
    ├─stores //pinia状态管理
    │      index.ts //状态管理配置文件
    │      
    ├─style //全局样式
    │      tailwind.css //tailwindcss样式
    │      
    ├─utils //工具函数
    │      domainList.ts //股票域名列表
    │      
    └─views //页面
        ├─home //首页
        │  │  index.vue
        │  │  
        │  └─components //首页组件
        │          newsList.vue //新闻列表
        │          recomendStock.vue //推荐股票
        │          stockHistory.vue //股票历史
        │          stockModal.vue //股票弹窗
        │          stockSwipe.vue //股票滑动
        │          stockTab.vue //股票tab
        │          tabBar.vue //底部导航栏
        │          weekNews.vue //新闻
        │          
        ├─newsPage //新闻详情页
        │      index.vue
        │      
        └─stockLine //股票趋势图
                codeList.ts //股票代码列表
                index.vue //股票趋势图组件

```