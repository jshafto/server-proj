const http = require("http");

http.createServer(function(req, res){
    res.end()
}).listen(3000, function(){
    console.log("Listening on port 3000")
})
