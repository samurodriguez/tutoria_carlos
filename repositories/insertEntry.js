const { getPool } = require("../db/getPool");

async function insertEntry(title, description) {
  const pool = await getPool();

  const [{ insertId }] = await pool.query(
    "INSERT INTO entradas (title, description) VALUES (?, ?)",
    [title, description]
  );

  return insertId;
}

module.exports = { insertEntry };
