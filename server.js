const express = require("express");
const app = express();
const cors = require(cors);
const PORT = 8000;

app.use(cors());

const aliens = {};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:alienName", (req, res) => {
  const aliensName = req.params.alienName.toLowerCase();
  if (aliens[aliensName]) {
    res.json(aliens[aliensName]);
  } else {
    res.json(aliens["humans"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log("Server is running!");
});
