require("dotenv").config();
const express = require("express");

const { getEntries, postEntry } = require("./controllers/entries");
const { registerUser, loginUser } = require("./controllers/users");
const { validateAuth } = require("./middlewares/validateAuth");

const app = express();

app.use(express.json());

// USERS
app.post("/users", registerUser);
app.post("/login", loginUser);

// ENTRIES
app.get("/entries", getEntries);
app.post("/entries", validateAuth, postEntry);

// ERRORS MIDDLEWARE
app.use((err, req, res, next) => {
  console.error(err.message);

  res.statusCode = 500;

  res.send({
    status: "error",
    message: err.message,
  });
});

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
