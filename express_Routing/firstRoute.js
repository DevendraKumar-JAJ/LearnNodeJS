const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hiii");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/contact", (req, res) => {
  res.send("Contact");
});

app.use((req, res) => {
  res.send("Other");
});

app.listen(4000, () => {
  console.log("Server listening on port 4000");
});
