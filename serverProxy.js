var http = require('http');
var https = require('https');
var url = require('url');

var baseurl = 'https://api-m.mtime.cn';
var baseurl = 'https://ticket-api-m.mtime.cn';
var appServer = http.createServer(function(req, res) {
    console.log(req.url);
    https.get(baseurl + req.url, resData => {
        var data = '';
        resData.on('data', function(response) {
            data += response;
        });
        resData.on('end', function() {
            res.setHeader('content-type', 'application/json;charset=UTF-8');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Connection', 'keep-alive');
            res.end(data);
        });
    })
}).listen(3000);
console.log('正在监听-----3000-----端口');