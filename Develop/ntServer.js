
// Server Boiler Plate:


// Dependencies - require npm packages
var http = require("http");
const express = require('express');


// Assign server port for application to run through on localhost
// use Express framework for heroku
const app = express();  // instantiate an express server
const PORT = process.env.PORT || 3001; //  allows web server to start with a dynamic port
// to run on localhost or eventually on heroku
// const PORT = 3001;

// Testing functionality to get content into the server before loading given html files
function temp(request, response){
  response.end("Hi Straming Turtles, you got here with one function, it works, you made it to " + request.url);
}

// Assign testing functionality to the server, can I see the string of streaming turtles
var server = http.createServer(temp);
// routes to the files we want to serve when user clicks on buttons or visits a link
require('./routes/apiroutes')(app);
require('./routes/htmlroutes')(app);



// Start the server, that's now listening on port 3000 for localhost
app.listen(PORT, function() {
  console.log(`Server is listening on PORT: ${PORT}`);
});