/**
  * Created by liyun on 2017/2/13.
  * Author: yunpengl@genice.cc
  * Date: 2017/2/13
  * Time: 15:06
  * 
  */
'use strict';


module.exports = {
    PORT: 8003,
    // PORT: 5959,

    /** redis production */
    redis_conf: {
        host: '127.0.0.1',
        port: '6379',
        enabled: true
    },

    /*** winston 用以发送错误日志通知的邮箱  ***/
    mail_error_log: {
        to: '',
        from: '',        // 这个邮箱与短信通知绑定。发送邮件可收到短信通知。
        host: '',
        port: 465,
        username: '',
        password: '',
        subject: '{{msg}}',
        ssl: true,
        level: 'warn'
    },

    pg_conf: { //数据库配置
        // host: '139.196.12.99',
        host: '127.0.0.1',
        user: 'postgres',
        password: 'root',
        // password: 'nT3mapmB',
        poolSize: 10,
        port: 5432,
        database: 'dev_qmh',
        idleTimeoutMillis: 30000
    },

    sms_conf: {
        //短信开关，是否真实发送
        // real_send: false,
        real_send: true,
        //api地址
        api_host: 'sms-api.luosimao.com',
        //api路径
        api_path: '/v1/send.json',
        // api key
        api_key: 'ccccdcc52a6e753377baff963fb2c75b',
        /**
         * 发送模板
         */
        templates: {
            /**
             * 新用户注册
             */
            register: '奇妙云的验证码：<%=verify_code%>。【奇妙云】',
            /**
             * 新用户注册
             */
            register_user_b: '亲爱的用户，您好。<%=verify_code%>添加您为奇妙云体验用户，请及时激活账号。【奇妙云】',
            /**
             *  丢失密码/密码找回
             */
            lost_password: '奇妙云的验证码：<%=verify_code%>。【奇妙云】',
            /**
             * 变更手机号
             */
            change_mobile: '奇妙云的验证码：<%=verify_code%>。【奇妙云】',  /**
             * 变更手机号
             */
            change_admin_mobile: '奇妙云的验证码：<%=verify_code%>。【奇妙云】',
            /**
             * 变更手机号
             */
            change_password: '奇妙云的验证码：<%=verify_code%>。【奇妙云】',  /**
             * 变更手机号
             */
            change_admin_password: '奇妙云的验证码：<%=verify_code%>。【奇妙云】',
            /**
             * 后台运营人员注册
             */
            register_admin: '亲爱的用户，您好。<%=verify_code%>添加你为奇妙云后台管理人员，请及时点击下方链接激活账号，链接24小时后失效。http://qmh.genice.cc/manager/auth.html 【奇妙云】',
            /*
             *后台激活用户
             */
            active_user:'奇妙云的验证码：<%=verify_code%>。【奇妙云】',
            /*
             *后台激活用户
             */
            active_admin:'奇妙云的验证码：<%=verify_code%>。【奇妙云】',
            /*
             *后台激活用户
             */
            lost_admin_password:'奇妙云的验证码：<%=verify_code%>。【奇妙云】',
            /*
             * APP绑定手机号
             */
            bind_mobile:'奇妙云的验证码：<%=verify_code%>。【奇妙云】',
        }
    },
    qiniu_conf: {
        //资源
        bucket_name: 'qimiao-qmh',
        //访问秘钥
        access_key: 'Ra67L1PIsbdrLPxHsK894zqkVUOQMK6yS1ATHdbW',
        //加密秘钥
        secret_key: 't5AL52QLqtOBzuESaBNHPkpTU8Dc_1IRUw-c10EC',
        //域名
        domain:'oq1hf74i0.bkt.clouddn.com '
    },
    jpush_conf: {
        app_key:'4ad9826a46f585bdd73097b1',
        secret_key:'2fda164575ef09c6a30d47d4'
    },
    oauth_conf: {
        tokenLife: 3600 * 24
    },
    weixinOpen: {
        AppID: 'wx46cf4177259669de',
        AppSecret: 'f5281325299985a23f9da9653917cd5d'
    }

};