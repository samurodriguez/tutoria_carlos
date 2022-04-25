require("dotenv").config();
const express = require("express");

const { getEntries, postEntry } = require("./controllers/entries");

const app = express();

app.use(express.json());

app.get("/entry", getEntries);

app.post("/entry", postEntry);

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
