var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server),
	port = 8888;
	/*Configuration*/
	app.configure(function() {
	  app.use(express.bodyParser());
	  app.use(express.methodOverride());
	  app.use(app.router);
	  app.use(express.static(__dirname + '/www/'));
	  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

	});
 
	io.sockets.on('connection', function(socket) {

	});
 	
server.listen(port);

console.log('	Go Go Gadget! >:) -- Server Started on port: ' + port);
