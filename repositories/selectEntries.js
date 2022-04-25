const { getPool } = require("../db/getPool");

async function selectEntries() {
  const pool = await getPool();

  const [entries] = await pool.query("SELECT * FROM entradas");

  return entries;
}

module.exports = { selectEntries };
