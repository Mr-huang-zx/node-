// express框架 
var express = require("express")  
var bodyParser = require("body-parser")  //解析请求体的参数  post请求
var multiparty =require("multiparty") // 从node_modules获取到    解析Formdata数据格式
var app = express()
var arr = [1,2,3]



// 跨域
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');//自定义中间件，设置跨域需要的响应头。
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');  //允许任何方法
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,X-Session-Token');   //允许任何类型
    next();
   };
   
app.use(allowCrossDomain);//运用跨域的中间件

// 解析请求体的数据
app.use(bodyParser.json())  //创建application/json解析
app.use(bodyParser.urlencoded({extended:true})) //创建application/x-www 解析默认的表单格式

//接口的实现  get post 请求方式  后跟接口地址  接口回调  post接口不能在浏览器测试
// app.get("/",function(req,res){
//     res.send("index")
// })

// 1.get请求  http://localhost:3000/data/delete?123456&55555
app.get("/data/query",function(req,res){
    // console.log(req.body)//req.body 是接收请求体的参数
    console.log(req.query) //是接收拼接在url后的？后的参数
    res.send(JSON.stringify(arr)) //后台给前端反的数据
})
// 2.post
// post put请求
app.post("/data/add",function(req,res){
    // req.body  //通过请求体的方式接受前端传过来的参数
    res.send(req.body)
    console.log(JSON.stringify(req.body))
})

// 3.params
// req.params  前端要传的参数字段是name 
// 前端直接在url后面加上传的参数比如http://localhost:3000/data/delete/123456-55555   通过-拼接多个参数
app.get("/data/delete/:name-:age",function (req,res) { 
    req.params
    res.send(req.params)

 })

//  4.Formdata数据格式 表单 
// 需要先安装 npm i multiparty -S
// 前端直接  var form =new FormData()     form.append("name","小白")   不要配置请求头
app.post("/data/form",function(req,res){
    var form =new multiparty.Form
    form.parse(req,function (err,fields,files) { 
        console.log(fields)  //获取前端传来的数据
        res.send(files)
     })
    
})

app.listen(3000,function(){
    console.log("123456456")
})