// Setup requires
var compress = require('compression'),
    express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    crypto = require('credential'),
    database = require('./database'),
    io = require('socket.io'),
    io = io(server);

// Setup Express to compress data and be the server
app.use(compress({ threshold: 512}));

io.on('connection', function(socket){
    console.log("A user connected");

    socket.on('hello', function(data){  // Fake one so I remember
        console.log(data);
    });

    socket.on('newUser', function(data){
        
    });

    socket.on('disconnect', function(){
        console.log('A user disconnected');
    });
});

if (database) console.log("DB is up and running");

app.use(express.static(__dirname + '/dist', 'binary'));

var port = Number(process.env.PORT || 5001);
server.listen(port, function(){
    console.log("Listening on "+ port);
});
