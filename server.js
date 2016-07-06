var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var SerialPort = require("serialport")
var sp = SerialPort.SerialPort;

var port = new sp("COM16", {
    baudRate: 115200,
    parser: SerialPort.parsers.readline('\n')
});


// the open event will always be emitted
port.on('open', function() {
    console.log('port open')
});

server.listen(8001);

app.use(express.static('public'));

io.on('connection', function (socket) {
    port.on('data',(d)=>{
        try{
            var obj = JSON.parse(d)
            if(obj)
            socket.emit('sensor',obj);
        }catch(e){
        console.log()
    }

    })
});