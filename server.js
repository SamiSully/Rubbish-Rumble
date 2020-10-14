// Module Requirements
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const handlebars = require("handlebars");

// Express app setup
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars setup
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes Links
// ==========================================
require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

// Testing route, to be changed later
app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

// Starts the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
