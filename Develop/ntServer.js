
// Server Boiler Plate:


// Dependencies - require npm packages
var http = require("http");
const express = require('express');


// Assign server port for application to run through on localhost
// use Express framework for heroku
const app = express();  // instantiate an express server
// to run on localhost or eventually on heroku
const PORT = 3000;

// Testing functionality to get content into the server before loading given html files
function temp(request, response){
  response.end("Hi Straming Turtles, you got here with one function, it works, you made it to " + request.url);
}

// Assign functionality to the server
var server = http.createServer(temp);



// Start the server, that's now listening on port 3000 for localhost
server.listen(PORT, function() {
  console.log(`Server is listening on PORT: ${PORT}`);
});