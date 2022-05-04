const { getPool } = require("../../db/getPool");

async function insertEntry(title, description, userId) {
  const pool = await getPool();

  const [{ insertId }] = await pool.query(
    "INSERT INTO entradas (title, description, id_user) VALUES (?, ?, ?)",
    [title, description, userId]
  );

  return insertId;
}

module.exports = { insertEntry };
