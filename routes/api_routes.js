
// LOAD DATA

// ===============================================================================

let notesData = require("../db/db.json");
let fs = require("fs");
// const { v4: uuidv4 } = require('uuid');
// const { json } = require("express");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // ---------------------------------------------------------------------------
  app.get("/api/notes", function(req, res) {
    // let newNote = req.body;
    // newNote.id = uuidv4();
    fs.readFile("./db/db.json", (err, data) => {
      if (err) throw err;
      console.log(data);
      res.json(JSON.parse(data));
      
    });
  });
  
  
  // API POST Requests
  // ---------------------------------------------------------------------------

app.post("/api/notes", function (req, res) {
    let newNote = fs.readFile("./db/db.json ", "utf8")
    newNote = JSON.parse(newNote);
    newNote.push(req.body);
    console.log(req.body);

    for (let i = 0; i < newNote.length; i++) {
  newNote[i].id = i + 1;
}

    newNote = JSON.stringify(newNote);
    fs.writeFile("./db/db.json ", newNote);
    res.json(JSON.parse(newNote));
  });

  // ---------------------------------------------------------------------------
  // API Delete notes
  app.delete("/api/notes/:id", function(req, res) {
    let deleteNote = fs.readFile("./db/db.json ", "utf8")
    // Empty out the arrays of data
    fs.readFile("./db/db.json", (err, data) => {
      if (err) throw err;
      console.log(data);
      res.json(JSON.parse(data)); 

    for (let i = 0; i < deleteNote.length; i++) {
      if (deleteNote[i].id == req.params.id) {
        deleteNote.splice(i, 1);
      }

      
      fs.writeFile("./db/db.json ", JSON.stringify(deleteNote), (err) => {
        if (err) throw err;
        res.send(deleteNote);
      });
     
    }
    });

    
  });
}
