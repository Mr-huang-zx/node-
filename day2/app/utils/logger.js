// 日志工具

const {createLogger, format, transports} =require('winston')

const myformat = format.printf(log=>{
    return `${log.timestamp} ${log.level}  ${log.message}`
})
// 日志输出级别:普通信息:info    警告:warn   错误:error
// 当level定位warn  普通日志就不显示  当定为error 普通 警告都不显示
const logger = createLogger({
    level:"warn",
    format:format.combine(
        format.timestamp({format:'YYYY-MM-DD HH:mm:ss'}),  //设定时间格式
        myformat
    ),
    transports:[ //输出日志的地方
        new transports.Console(),  //显示在控制台
        new transports.File({filename:'./logs/applog.log'}) //记录日志存放路径
    ],

})

export default logger