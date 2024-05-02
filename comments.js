// Create web server and listen on port 3000
// Respond with "Hello, World!" for requests to the root URL (/)
// Respond with "Hello, Comments!" for requests to /comments

// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with "Hello, World!" to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello, World!\n");
});

// Listen on port 3000, IP defaults to