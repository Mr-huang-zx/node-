var express =require('express')
var bodyParser = require('body-parser')
var router = express.Router();
var app = express();

// 配置bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
// 添加路由
app.use('/',router)

// 路由的方式
router.get('/api/',(req,res)=>{
    res.status(200).send("")
})

// 日志中间件 访问接口是触发
app.use(async(req,res,next)=>{
    console.log("1.日志中间件开始");
    // 记录获取请求方式
    console.log(`${req.method} ${req.originalUrl}`)

    // 过滤不文明词汇
    if(req.query.content){
        req.query.content = req.query.content.replace("色情","**")
    }
    await next() //next 下一步
    console.log("3.日志中间件结束")
})

app.get('/api/login',(req,res)=>{
    console.log("2.接口查询")
    res.status(200).send("list data:"+req.query.content)
})



app.listen(8080,()=>{
    console.log('NODE SERVER SUCCESS !')
})
