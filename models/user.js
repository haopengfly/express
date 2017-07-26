'use strict';
var pg = require('../lib/pgClient');

//查询用户信息
exports.info = function(mobile, card_no, callback){
    getinfo([mobile,card_no],function (err, resulet) {
        if(err){
            callback(err,null);
        }else{
            callback(null,resulet);
        }
    });
};


//会员积分减少
const consumesql = 'update users set score = score-$3 where mobile = $1 or card_no = $2';
exports.consume = function(mobile, card_no, consume, callback){
    //使用公共的函数
    getinfo([mobile,card_no],function (err, result) {
        if(err){
            callback(err,null);
        }else{
            if(result.score<consume){
                return callback('用户积分不够',null);
            }
            pg.query(consumesql,[mobile, card_no, consume],function (err, result) {
                if(err){
                    callback(err,null);
                }else{
                    callback(null,'执行成功');
                }
            });
        }
    });

};

//公共方法返回用户的信息
function getinfo(param,callback){
    const getinfosql = 'select * from users where mobile=$1 or card_no = $2';
    pg.query(getinfosql, param, function(err, result){
        if(err){
            callback(err,null);
        }else if(result.rows[0]){
            result.rows[0].add_time = 'fdfd';
            callback(null, result.rows[0]);
        }else{
            callback('没有这个用户',null);
        }
    });
}