const { selectEntries } = require("../../repositories/selectEntries");

async function getEntries(req, res) {
  const entries = await selectEntries();

  res.send(entries);
}

module.exports = { getEntries };
