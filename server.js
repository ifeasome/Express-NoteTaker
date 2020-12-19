
// Dependencies
// ======================================
let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");

// Sets up the Express App
// =======================================

let app = express();
let PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Router
// ==================================

require("./routes/api_routes")(app);
require("./routes/html_routes")(app);

// Listener
// =================================

app.listen(PORT, function () {
  console.log("I am listening on PORT: " + PORT);
});
