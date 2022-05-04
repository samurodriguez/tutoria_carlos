const { getPool } = require("../../db/getPool");

async function selectEntries() {
  const pool = await getPool();

  const [entries] = await pool.query(
    "SELECT e.*, u.email FROM entradas e LEFT JOIN usuarios u ON e.id_user = u.id"
  );

  return entries;
}

module.exports = { selectEntries };
