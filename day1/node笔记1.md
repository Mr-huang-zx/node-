##### node
    :node是js在后端的一个运行环境
    :express,koa是基于node的框架 能够快速构建web应用

##### 交互
    短链接:ajax axios
        短链接后端不能主动发消息
        只能前端不断轮询，但是性能较差
        前端发请求 后端才回请求
    长链接:websocket
        全双工 前端和后端建立连接后 一直维持连接
        没有请求
        需要心跳机制维护连接

##### 后端作用
    提供不同服务

##### 基本使用 
    01. npm init -y 创建package.json文件
    02. 安装依赖包
        npm i -S express body-parser
        express :基于node的web框架
        body-parser:用于http请求中body的解析
    修改后重启服务

##### 路由
    web框架都有路由  
    mvc 开发模式  
    node + jade---前端模板 用于展示数据 类似于vue中的template
    const router = express.Router()
    在项目中可以将接口抽离封装

##### 中间件(要放在最上面)
    实现原理:拦截器(前端给后台请求数据时)
    日志中间件可以记录请求的1method url 时间等
    可以过滤内容中不当的词汇