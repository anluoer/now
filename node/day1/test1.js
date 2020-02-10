var http=require('http');
http.createServer(function(req,res){
    //发送HTTP头部
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('hello world')
    
}).listen(8080);
console.log('Server runing')
