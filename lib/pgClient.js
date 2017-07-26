/**
  * Created by liyun on 2017/2/13.
  * Author: yunpengl@genice.cc
  * Date: 2017/2/13
  * Time: 15:07
  * 
  */
'use strict';


const pg = require('pg');
const settings = require('../config/settings');
const pg_conf = settings.pg_conf; //客户端配置参数
const dataBaseName = pg_conf.database;

const pool = new pg.Pool({
    user: pg_conf.user, //env var: PGUSER
    database: pg_conf.database, //env var: PGDATABASE
    password: pg_conf.password, //env var: PGPASSWORD
    port: pg_conf.port, //env var: PGPORT
    max: pg_conf.poolSize, // max number of clients in the pool
    idleTimeoutMillis: pg_conf.idleTimeoutMillis, // how long a client is allowed to remain idle before being closed
});
pool.on('error', function (err, client) {
    console.error('client database: ', err.client.database);
    console.error('idle client error', err.message, err.stack)
});

/**
 * sql查询
 * @param callback
 */
exports.query =  (sql, params, callback) => {
    pool.connect((err, client, done) => {
        if(err) {
            console.error('error fetching client from pool', err);
            callback(err, null);
        }
        client.query(sql, params, (err, result) => {
            // client.query('SELECT $1::int AS number', ['1'], (err, result) => {
            //call `done()` to release the client back to the pool
            done();

            if(err) {
                callback(err, null);
            }else{
                callback(err, result);

            }
            // console.log(result.rows[0].number);
            // callback(err, result);
            //output: 1
        });
    });
};

exports.getDataBaseName = function () {
    return dataBaseName;
};

/**
 * 获取数据库连接
 * @returns {*}
 */
exports.connect =  (callback) => {
    // return pool.connect();
    pool.connect((err, client, done) => {
        callback(err, client, done);
    });
};
