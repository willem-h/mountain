// Setup requires
var compress = require('compression'),
    express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io'),
    io = io(server);

// Setup Express to compress data and be the server
app.use(compress({ threshold: 512}));

app.use(express.static(__dirname + '/dist', 'binary'));

var port = Number(process.env.PORT || 5000);
server.listen(port, function(){
    console.log("Listening on "+ port);
});
