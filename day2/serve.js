// node 导入myexpress函数
// const express = require('./config/myexpress')

// es6导入
import express from './config/myexpress'
import logger from './app/utils/logger'

const server =express()
const port =3000

server.listenAsync(port).then(()=>{
    console.log("NODE SERVER SUCCESS !")
    // logger.warn("NODE SERVER SUCCESS !")
    // logger.error("NODE SERVER SUCCESS !")
    // logger.info("NODE SERVER SUCCESS !")

})