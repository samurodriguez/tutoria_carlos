const { getPool } = require("../../db/getPool");

async function insertUser(email, password) {
  const pool = await getPool();

  console.log(email, password);

  const [{ insertId }] = await pool.query(
    "INSERT INTO usuarios (email, password) VALUES (?, ?)",
    [email, password]
  );

  return insertId;
}

module.exports = { insertUser };
