var express =require('express')
var bodyParser = require('body-parser')

const util = require('util');


// node的模块化
// module.exports =()=>{
//     // 配置bodyParser
//     var app = express();
//     // 暴露app.listen 把监听的方法延迟执行
//     app.listenAsync = util.promisify(app.listen)
//     app.use(bodyParser.json());
//     app.use(bodyParser.urlencoded({extended:true}))

//     app.get('/api/login',(req,res)=>{
//         console.log("2.接口查询")
//         res.status(200).send("list data:"+req.query.content)
//     })

//     // app.listen(port,()=>{
//     //     console.log('NODE SERVER SUCCESS !')
//     // })
//     return app
// }

// es6模块化

export default ()=>{
    // 配置bodyParser
    var app = express();
    // 暴露app.listen 把监听的方法延迟执行
    app.listenAsync = util.promisify(app.listen)

    // 跨域 (中间件拦截器)
    app.use((req,res,next)=>{
        // http请求的来源
        res.setHeader('Access-Control-Allow-Orgin','*');
        // http请求的方法
        res.setHeader('Access-Control-Allow-Methods','*');
        // http请求头 token cookie
        res.setHeader('Access-Control-Allow-Headers','*')
        next();
    })


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))

    app.get('/api/login',(req,res)=>{
        console.log("2.接口查询")
        res.status(200).send("list data:"+req.query.content)
    })

    // app.listen(port,()=>{
    //     console.log('NODE SERVER SUCCESS !')
    // })
    return app
}


