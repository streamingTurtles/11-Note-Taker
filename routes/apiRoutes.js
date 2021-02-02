const fs = require('fs');
// const { Server } = require('http');


// export all api routes - GET, POST and DELETE
module.exports = function(app) {
    // apiRoute GET request logic - user request from a button click/s
    // handle the notes.html page and read into it the db.json stored file
    app.get('/api/notes', function(req, res){
      fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        dbData = JSON.parse(data);
        res.send(dbData);
      });
    });




    // apiRoute POST request logic - user adding notes
    app.post('/api/notes', function(req, res){
      const userNotes = req.body;

    fs.readFile('./db/db.json', (err, data) => {
      if (err) throw err;
      dbData = JSON.parse(data); // convert JSON string to a javascript object so we can operate on it
      // add new note to userNotes
      dbData.push(userNotes);
      let number = 1;
      dbData.forEach((note, index) => {
        note.id = number;
        number++;
        return dbData;
      });
      console.log(dbData);

      stringData = JSON.stringify(dbData);
      // add the stringData, that's converted from object form to a JSON string
      fs.writeFile('./db/db.json', stringData, (err, data) => {
        if (err) throw err;
      });
    });
    res.send('Thank you for your note!');

    })



    // apiRoutes DELETE request logic 
    // user deleting notes and json is updated to reflect remaining notes
    app.delete('/api/notes/:id', function(req, res){
      // id number of note to delete
      const deleteNote = req.params.id;
      console.log(deleteNote);
  
      fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
  
        // delete note per id selected
        dbData = JSON.parse(data);
        // loop through JSON and delete selected id variable to delete
        for (let i = 0; i < dbData.length; i++) {
          if (dbData[i].id === Number(deleteNote)) {
            dbData.splice([i], 1);
          }
        }
        console.log(dbData);
        stringData = JSON.stringify(dbData);
  
        fs.writeFile('./db/db.json', stringData, (err, data) => {
          if (err) throw err;
        });
      });
      // No content HTTP 204 success status
      // indicates that the server fullfilled the request
      // & client stays current page with no content to send in response payload body
      res.status(204).send();
    });
  };

