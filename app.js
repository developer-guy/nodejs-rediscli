/**
 * Created by bapaydin on 05.03.2017.
 */
var redisConf = require('./redis-conf');
var redis = require('redis');
var redisClient = redis.createClient(redisConf);

redisClient.on('ready', function () {
    console.log("Connection is ready");
});

redisClient.on('error', function (err) {
    console.log("Error occured : " + err);
});


redisClient.set('language','nodejs',function (err, reply) {
   if(err) console.log(err);
   else console.log(reply);
});


redisClient.get('language',function (err,reply) {
    if(err) console.log(err);
    else console.log(reply);
});

redisClient.hmset('tools','webserver','express','devops','jenkins',function (err,reply) {
   if(err) console.log(err);
   else console.log(reply);
});

redisClient.hgetall('tools',function (err, reply) {
    if(err) console.log(err);
    else console.log(reply);
});

redisClient.exists('language',function (err, reply) {
    if(!err){
        if(reply == 1){
            console.log("Language key exists");
        }else{
            console.log("Language key doesn't exist");
        }
    }
});



