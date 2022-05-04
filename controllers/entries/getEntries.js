const { selectEntries } = require("../../repositories/entries/selectEntries");

async function getEntries(req, res, next) {
  try {
    const entries = await selectEntries();

    res.send(entries);
  } catch (error) {
    next(error);
  }
}

module.exports = { getEntries };
