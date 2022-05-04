const { insertEntry } = require("../../repositories/entries/insertEntry");

async function postEntry(req, res, next) {
  try {
    const { title, description } = req.body;

    const insertId = await insertEntry(title, description, req.auth.id);

    res.send({
      status: "ok",
      data: {
        id: insertId,
        title,
        description,
      },
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { postEntry };
