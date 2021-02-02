// add in node.js path module for handling file paths 
const path = require('path');

// manage the GET requests & export for use in index.js file
module.exports = function (app){
    
      // route to the note taker home "get started" index.html page
      app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
      });

      // route to the note taking page, notes.html page
      app.get('/notes', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
      });
    
      // if no route matches above, use a following default route
      app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
      });

}