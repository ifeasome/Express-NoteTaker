
// LOAD DATA

// ===============================================================================

let notesData = require("./Develop/db/db.json");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  
  // ---------------------------------------------------------------------------
  app.get("/api/notes", function(req, res) {
    res.json(db);
  });

  app.get("/api/notes/:id"), function(req, res) {
      res.json(db);
  }

  
  // API POST Requests
  // ---------------------------------------------------------------------------

  app.post("/api/notes", function(req, res) {
    db.push(req.body);
    res.json(db);
   
  
  });

  // ---------------------------------------------------------------------------
  // Delete notes

  app.post("/api/notes/", + id, function(req, res) {
    // Empty out the arrays of data
    db.title = 0;
    db.text = 0;
    
    res.json(db);
  });
};
