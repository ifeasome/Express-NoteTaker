// * The application frontend has already been created, it's your job to build the backend and connect the two.

// * The following HTML routes should be created:

//   * GET `/notes` - Should return the `notes.html` file. <<

//   * GET `*` - Should return the `index.html` file

// * The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

// * The following API routes should be created:

//   * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

//   * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

//   * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

// Dependencies 
// ======================================
let fs = require("fs");
let express = require("express");
let path = require("path");

// Sets up the Express App 
// =======================================

let app = express();
let PORT = 3001;

// Sets up the Express app to handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes 
// ==================================

// Basic route that send that gets the saved note from the user 
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
}); 
// Hey Sam (is my syntax right to use path.join or fs.join or fs.path.join). I am not too sure what I am even trying to do...
