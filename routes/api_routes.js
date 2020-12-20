// LOAD DATA

// ===============================================================================

let fs = require("fs");
const { v4: uuidv4 } = require('uuid');
uuidv4();


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // ---------------------------------------------------------------------------
  app.get("/api/notes", function (req, res) {
    // let newNote = req.body;
    // newNote.id = uuidv4();
    fs.readFile("./db/db.json", (err, data) => {
      if (err) throw err;
    
      res.json(JSON.parse(data));
    });
  });

  // API POST Requests
  // ---------------------------------------------------------------------------

  app.post("/api/notes", function (req, res) {
    let newNote = fs.readFileSync("./db/db.json", "utf8");

    newNote = JSON.parse(newNote);
    newNote.push(req.body);



    for (let i = 0; i < newNote.length; i++) {
      newNote[i].id = uuidv4();
    }
    newNote = JSON.stringify(newNote);
    fs.writeFileSync("./db/db.json", newNote);

    res.json(newNote);
  });

  // ---------------------------------------------------------------------------
  // API Delete notes
  app.delete("/api/notes/:id", function (req, res) {
    // Empty out the arrays of data
    fs.readFile("./db/db.json", (err, data) => {
      if (err) throw err;

      let deleteNote = JSON.parse(data);

      console.log(deleteNote);
      console.log(req.params.id);

      for (let i = 0; i < deleteNote.length; i++) {
        if (deleteNote[i].id == req.params.id) {
          deleteNote.splice(i, 1);
        }
      }

      fs.writeFile("./db/db.json", JSON.stringify(deleteNote), (err) => {
        if (err) throw err;
        console.log(deleteNote);
        res.send(true);
        
      });
    });
  });
};
