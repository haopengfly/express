/**
  * Created by liyun on 2017/2/13.
  * Author: yunpengl@genice.cc
  * Date: 2017/2/13
  * Time: 15:06
  * 
  */
'use strict';

//根据环境变量判断开发测试环境

console.log('process.env.NODE_ENV........');
console.log(process.env.NODE_ENV);
console.log(process.env.PORT);
module.exports = !!process.env.NODE_ENV ? require('./development') : require('./production');