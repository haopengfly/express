/**
  * Created by liyun on 2017/2/13.
  * Author: yunpengl@genice.cc
  * Date: 2017/2/13
  * Time: 15:06
  * 
  */
'use strict';


module.exports = {
    // PORT: 5959,
    PORT: 8003,



    pg_conf: { //数据库配置
        // host: '139.196.12.99',
        host: '127.0.0.1',
        user: 'postgres',
        password: 'root',
        // password: 'nT3mapmB',
        poolSize: 10,
        port: 5432,
        database: 'member',
        idleTimeoutMillis: 30000
    }


};