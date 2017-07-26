const user = require('../models/user');
const pg = require('../lib/pgClient');


//返回会员信息
exports.info = function (req,res) {
    const args = req.body;
    if(!args.mobile && !args.card_no){
        return res.send('传电话号或者卡号');
    }
    user.info(args.mobile,args.card_no,function (err, result) {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    });
};


//会员积分减少
exports.consume = function (req,res){
    const args = req.body;
    if(!args.mobile && !args.card_no){
        return res.send('卡号和电话号总得传一个');
    }
    if(!args.consume){
        return res.send('消费积分不能空');
    }
    user.consume(args.mobile,args.card_no, args.consume, function (err, result) {
        if(err){
            return res.send(err);
        }else{
            return res.send(result);
        }
    })
};