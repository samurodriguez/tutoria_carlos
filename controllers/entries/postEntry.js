const { insertEntry } = require("../../repositories/insertEntry");

async function postEntry(req, res) {
  const { title, description } = req.body;

  const insertId = await insertEntry(title, description);

  res.send({
    id: insertId,
    title,
    description,
  });
}

module.exports = { postEntry };
